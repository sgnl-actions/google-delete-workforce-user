/**
 * Google Delete Workforce User Action
 *
 * Deletes a user from Google Cloud Workforce Identity Federation using
 * the Google Cloud IAM API.
 */

import { JWT } from 'google-auth-library';

/**
 * Helper function to delete a workforce user
 * @private
 */
async function deleteWorkforceUser(workforcePoolId, subjectId, serviceAccountKey) {
  // Parse the service account key
  const keyData = JSON.parse(serviceAccountKey);

  // Create a JWT client with the service account credentials
  const authClient = new JWT({
    email: keyData.client_email,
    key: keyData.private_key,
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });

  // Construct the API URL
  const url = `https://iam.googleapis.com/v1/locations/global/workforcePools/${workforcePoolId}/subjects/${subjectId}`;

  try {
    // Make the DELETE request using the auth client
    const response = await authClient.request({
      url,
      method: 'DELETE'
    });

    return {
      success: true,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    // Return error details for proper handling
    return {
      success: false,
      status: error.response?.status || error.code,
      error: error.response?.data || error.message
    };
  }
}

export default {
  /**
   * Main execution handler - deletes a workforce user
   * @param {Object} params - Job input parameters
   * @param {string} params.workforcePoolId - The workforce pool ID
   * @param {string} params.subjectId - The subject/user ID to delete
   * @param {Object} context - Execution context with env, secrets, outputs
   * @returns {Object} Job results
   */
  invoke: async (params, context) => {
    const { workforcePoolId, subjectId } = params;

    console.log(`Starting Google Workforce user deletion for subject ${subjectId} in pool ${workforcePoolId}`);

    // Validate inputs
    if (!workforcePoolId || typeof workforcePoolId !== 'string') {
      throw new Error('Invalid or missing workforcePoolId parameter');
    }
    if (!subjectId || typeof subjectId !== 'string') {
      throw new Error('Invalid or missing subjectId parameter');
    }

    // Validate service account key is present
    if (!context.secrets?.GOOGLE_SERVICE_ACCOUNT_KEY) {
      throw new Error('Missing required secret: GOOGLE_SERVICE_ACCOUNT_KEY');
    }

    // Make the API request to delete the user
    const result = await deleteWorkforceUser(
      workforcePoolId,
      subjectId,
      context.secrets.GOOGLE_SERVICE_ACCOUNT_KEY
    );

    // Handle the response
    if (result.success) {
      console.log(`Successfully deleted workforce user ${subjectId}`);

      return {
        subjectId: subjectId,
        workforcePoolId: workforcePoolId,
        deleted: true,
        deletedAt: new Date().toISOString()
      };
    }

    // Handle specific error cases
    const statusCode = result.status;

    // 404 means user doesn't exist - consider this success (idempotent)
    if (statusCode === 404) {
      console.log(`Workforce user ${subjectId} not found - already deleted`);
      return {
        subjectId: subjectId,
        workforcePoolId: workforcePoolId,
        deleted: true,
        alreadyDeleted: true,
        deletedAt: new Date().toISOString()
      };
    }

    // Handle other errors
    let errorMessage = `Failed to delete workforce user: ${statusCode}`;
    if (result.error?.error?.message) {
      errorMessage = `Failed to delete workforce user: ${result.error.error.message}`;
    } else if (typeof result.error === 'string') {
      errorMessage = `Failed to delete workforce user: ${result.error}`;
    }

    console.error('Google API error:', result.error);

    const error = new Error(errorMessage);
    error.statusCode = statusCode;
    throw error;
  },

  /**
   * Error recovery handler - framework handles retries by default
   * @param {Object} params - Original params plus error information
   * @param {Object} context - Execution context
   * @returns {Object} Recovery results
   */
  error: async (params, _context) => {
    const { error, subjectId, workforcePoolId } = params;
    console.error(`Workforce user deletion failed for ${subjectId} in pool ${workforcePoolId}: ${error.message}`);

    // Framework handles retries for transient errors (429, 502, 503, 504)
    // Just re-throw the error to let the framework handle it
    throw error;
  },

  /**
   * Graceful shutdown handler - cleanup when job is halted
   * @param {Object} params - Original params plus halt reason
   * @param {Object} context - Execution context
   * @returns {Object} Cleanup results
   */
  halt: async (params, _context) => {
    const { reason, subjectId, workforcePoolId } = params;
    console.log(`Workforce user deletion job is being halted (${reason}) for ${subjectId} in pool ${workforcePoolId}`);

    // No cleanup needed for this simple operation
    // The DELETE request either completed or didn't

    return {
      subjectId: subjectId || 'unknown',
      workforcePoolId: workforcePoolId || 'unknown',
      reason: reason,
      haltedAt: new Date().toISOString(),
      cleanupCompleted: true
    };
  }
};