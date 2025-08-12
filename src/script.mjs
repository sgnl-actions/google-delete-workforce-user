/**
 * Google Delete Workforce User Action
 *
 * Deletes a workforce user from Google Cloud IAM Workforce Identity pool.
 * Uses the Google Cloud IAM API to perform the deletion operation.
 */

class RetryableError extends Error {
  constructor(message) {
    super(message);
    this.retryable = true;
  }
}

class FatalError extends Error {
  constructor(message) {
    super(message);
    this.retryable = false;
  }
}

/**
 * Get Google Cloud access token from service account key
 * @param {string} serviceAccountKey - Base64 encoded service account key JSON
 * @returns {Promise<string>} Access token
 */
async function getAccessToken(serviceAccountKey) {
  try {
    const keyData = JSON.parse(Buffer.from(serviceAccountKey, 'base64').toString());
    
    // Create JWT for Google OAuth2
    const now = Math.floor(Date.now() / 1000);
    const header = {
      alg: 'RS256',
      typ: 'JWT'
    };
    
    const payload = {
      iss: keyData.client_email,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    };
    
    // Simple JWT creation (for production, use proper JWT library)
    const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64url');
    const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signatureInput = `${headerEncoded}.${payloadEncoded}`;
    
    // Import private key and sign
    const crypto = await import('crypto');
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(signatureInput);
    const signature = sign.sign(keyData.private_key, 'base64url');
    
    const jwt = `${signatureInput}.${signature}`;
    
    // Exchange JWT for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt
      })
    });
    
    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      throw new FatalError(`Failed to get access token: ${error}`);
    }
    
    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  } catch (error) {
    if (error instanceof FatalError) throw error;
    throw new FatalError(`Invalid service account key: ${error.message}`);
  }
}

/**
 * Delete workforce user from Google Cloud IAM
 * @param {string} accessToken - Google Cloud access token
 * @param {string} projectId - Google Cloud project ID
 * @param {string} workforcePoolId - Workforce pool ID
 * @param {string} subjectId - Subject ID of the user to delete
 * @returns {Promise<void>}
 */
async function deleteWorkforceUser(accessToken, projectId, workforcePoolId, subjectId) {
  const url = `https://iam.googleapis.com/v1/locations/global/workforcePools/${workforcePoolId}/subjects/${subjectId}`;
  
  console.log(`Deleting workforce user: ${subjectId} from pool: ${workforcePoolId}`);
  
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (response.status === 404) {
    console.log(`Workforce user ${subjectId} not found, considering deletion successful`);
    return;
  }
  
  if (response.status === 429 || response.status >= 500) {
    const error = await response.text();
    throw new RetryableError(`Google Cloud API error (${response.status}): ${error}`);
  }
  
  if (!response.ok) {
    const error = await response.text();
    throw new FatalError(`Failed to delete workforce user (${response.status}): ${error}`);
  }
  
  console.log(`Successfully deleted workforce user: ${subjectId}`);
}

/**
 * Validate required input parameters
 * @param {Object} params - Input parameters
 */
function validateInputs(params) {
  const required = ['workforce_pool_id', 'subject_id'];
  for (const field of required) {
    if (!params[field] || typeof params[field] !== 'string' || params[field].trim() === '') {
      throw new FatalError(`Missing or invalid required parameter: ${field}`);
    }
  }
}

export default {
  /**
   * Main execution handler - delete workforce user
   * @param {Object} params - Job input parameters
   * @param {Object} context - Execution context with env, secrets, outputs
   * @returns {Object} Job results
   */
  invoke: async (params, context) => {
    console.log('Starting Google Delete Workforce User action');
    
    try {
      // Validate inputs
      validateInputs(params);
      
      const { workforce_pool_id, subject_id, project_id } = params;
      
      console.log(`Processing workforce pool: ${workforce_pool_id}`);
      console.log(`Deleting subject: ${subject_id}`);
      
      // Validate secrets
      if (!context.secrets?.service_account_key) {
        throw new FatalError('Missing required secret: service_account_key');
      }
      
      // Get access token
      const accessToken = await getAccessToken(context.secrets.service_account_key);
      
      // Extract project ID from service account key if not provided
      let finalProjectId = project_id;
      if (!finalProjectId) {
        const keyData = JSON.parse(Buffer.from(context.secrets.service_account_key, 'base64').toString());
        finalProjectId = keyData.project_id;
        if (!finalProjectId) {
          throw new FatalError('Project ID not found in service account key and not provided in parameters');
        }
      }
      
      console.log(`Using project ID: ${finalProjectId}`);
      
      // Delete the workforce user
      await deleteWorkforceUser(accessToken, finalProjectId, workforce_pool_id, subject_id);
      
      const result = {
        status: 'success',
        workforce_pool_id,
        subject_id,
        deleted_at: new Date().toISOString()
      };
      
      console.log('Workforce user deletion completed successfully');
      return result;
      
    } catch (error) {
      console.error(`Error deleting workforce user: ${error.message}`);
      
      if (error instanceof RetryableError || error instanceof FatalError) {
        throw error;
      }
      
      // Classify unknown errors as fatal
      throw new FatalError(`Unexpected error: ${error.message}`);
    }
  },

  /**
   * Error recovery handler - implement error handling logic
   * @param {Object} params - Original params plus error information
   * @param {Object} context - Execution context
   * @returns {Object} Recovery results
   */
  error: async (params, _context) => {
    const { error, workforce_pool_id, subject_id } = params;
    console.error(`Error handler called for workforce pool ${workforce_pool_id}, subject ${subject_id}: ${error.message}`);
    
    // Check if error is retryable
    if (error.retryable) {
      console.log('Error is retryable, will be retried by job scheduler');
      return {
        status: 'failed',
        retryable: true,
        error: error.message,
        workforce_pool_id,
        subject_id
      };
    }
    
    // Fatal error - do not retry
    console.error('Fatal error encountered, will not retry');
    return {
      status: 'failed',
      retryable: false,
      error: error.message,
      workforce_pool_id,
      subject_id
    };
  },

  /**
   * Graceful shutdown handler - implement cleanup logic
   * @param {Object} params - Original params plus halt reason
   * @param {Object} context - Execution context
   * @returns {Object} Cleanup results
   */
  halt: async (params, _context) => {
    const { reason, workforce_pool_id, subject_id } = params;
    console.log(`Job is being halted (${reason}) for workforce pool ${workforce_pool_id}, subject ${subject_id}`);
    
    // No cleanup needed for this action as it's idempotent
    return {
      status: 'halted',
      workforce_pool_id: workforce_pool_id || 'unknown',
      subject_id: subject_id || 'unknown',
      reason: reason,
      halted_at: new Date().toISOString()
    };
  }
};