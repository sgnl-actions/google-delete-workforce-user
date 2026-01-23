/**
 * Google Delete Workforce User Action
 *
 * Deletes a user from Google Cloud Workforce Identity Federation using
 * the Google Cloud IAM API.
 */

import { getAuthorizationHeader, getBaseURL} from '@sgnl-actions/utils';

/**
 * Helper function to delete a workforce user
 * @private
 */
async function deleteWorkforceUser(workforcePoolId, subjectId, baseUrl, authHeader) {
  // Construct the API URL
  const url = `${baseUrl}/v1/locations/global/workforcePools/${workforcePoolId}/subjects/${subjectId}`;

  // Make the DELETE request with authentication
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': authHeader
    }
  });

  // Read response body if available
  let responseData = null;
  try {
    const text = await response.text();
    if (text) {
      responseData = JSON.parse(text);
    }
  } catch {
    // Response might not be JSON or empty
  }

  return {
    success: response.ok,
    status: response.status,
    data: responseData
  };
}

export default {
  /**
   * Main execution handler - deletes a workforce user
   * @param {Object} params - Job input parameters
   * @param {string} params.subjectId - The subject/user ID to delete
   * @param {string} params.workforcePoolId - The workforce pool ID
   * @param {string} params.address - Full URL to Google IAM API (defaults to https://iam.googleapis.com)
   *
   * @param {Object} context - Execution context with secrets and environment
   * @param {string} context.environment.ADDRESS - Default Google IAM API base URL
   *
   * The configured auth type will determine which of the following environment variables and secrets are available
   * @param {string} context.secrets.BEARER_AUTH_TOKEN
   *
   * @param {string} context.secrets.BASIC_USERNAME
   * @param {string} context.secrets.BASIC_PASSWORD
   *
   * @param {string} context.secrets.OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET
   * @param {string} context.environment.OAUTH2_CLIENT_CREDENTIALS_AUDIENCE
   * @param {string} context.environment.OAUTH2_CLIENT_CREDENTIALS_AUTH_STYLE
   * @param {string} context.environment.OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID
   * @param {string} context.environment.OAUTH2_CLIENT_CREDENTIALS_SCOPE
   * @param {string} context.environment.OAUTH2_CLIENT_CREDENTIALS_TOKEN_URL
   *
   * @param {string} context.secrets.OAUTH2_AUTHORIZATION_CODE_ACCESS_TOKEN
   *
   * @returns {Object} Job results
   */
  invoke: async (params, context) => {

    const { workforcePoolId, subjectId } = params;

    console.log(`Starting Google Workforce user deletion for subject ${subjectId} in pool ${workforcePoolId}`);

    // Validate inputs
    if (!subjectId || typeof subjectId !== 'string') {
      throw new Error('Invalid or missing subjectId parameter');
    }
    if (!workforcePoolId || typeof workforcePoolId !== 'string') {
      throw new Error('Invalid or missing workforcePoolId parameter');
    }

    // Get base URL using utils (with default for Google IAM API)
    let baseUrl;
    try {
      baseUrl = getBaseURL(params, context);
    } catch (error) {
      // Default to standard Google IAM API URL if not provided
      baseUrl = 'https://iam.googleapis.com';
    }

    // Get authorization header using utils
    const authHeader = await getAuthorizationHeader(context);

    // Make the API request to delete the user
    const result = await deleteWorkforceUser(
      workforcePoolId,
      subjectId,
      baseUrl,
      authHeader
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
   *
   * @param {Object} params - Original params plus error information
   * @param {Object} context - Execution context
   *
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
   *
   * @param {Object} params - Original params plus halt reason
   * @param {Object} context - Execution context
   *
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