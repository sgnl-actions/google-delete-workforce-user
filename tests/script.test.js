import script from '../src/script.mjs';

describe('Google Delete Workforce User Script', () => {
  const mockContext = {
    environment: {
      ADDRESS: 'https://iam.googleapis.com'
    },
    secrets: {
      OAUTH2_AUTHORIZATION_CODE_ACCESS_TOKEN: 'test-google-access-token'
    },
    outputs: {}
  };

  let originalFetch;

  beforeAll(() => {
    // Save original fetch
    originalFetch = global.fetch;
  });

  beforeEach(() => {
    // Mock console to avoid noise in tests
    global.console.log = () => {};
    global.console.error = () => {};

    // Mock fetch for successful delete
    global.fetch = () => Promise.resolve({
      ok: true,
      status: 200,
      text: async () => ''
    });
  });

  afterAll(() => {
    // Restore original fetch
    global.fetch = originalFetch;
  });

  describe('invoke handler', () => {
    test('should throw error for missing workforcePoolId', async () => {
      const params = {
        subjectId: 'user456'
      };

      await expect(script.invoke(params, mockContext))
        .rejects.toThrow('Invalid or missing workforcePoolId parameter');
    });

    test('should throw error for missing subjectId', async () => {
      const params = {
        workforcePoolId: 'pool123'
      };

      await expect(script.invoke(params, mockContext))
        .rejects.toThrow('Invalid or missing subjectId parameter');
    });

    test('should successfully delete a workforce user', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456'
      };

      const result = await script.invoke(params, mockContext);

      expect(result.subjectId).toBe('user456');
      expect(result.workforcePoolId).toBe('pool123');
      expect(result.deleted).toBe(true);
      expect(result.deletedAt).toBeDefined();
    });

    test('should use default Google IAM API URL when address not provided', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456'
      };

      let capturedUrl;
      global.fetch = async (url, options) => {
        capturedUrl = url;
        return {
          ok: true,
          status: 200,
          text: async () => ''
        };
      };

      await script.invoke(params, mockContext);

      expect(capturedUrl).toBe('https://iam.googleapis.com/v1/locations/global/workforcePools/pool123/subjects/user456');
    });

    test('should use address parameter when provided', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456',
        address: 'https://custom.googleapis.com'
      };

      let capturedUrl;
      global.fetch = async (url, options) => {
        capturedUrl = url;
        return {
          ok: true,
          status: 200,
          text: async () => ''
        };
      };

      await script.invoke(params, mockContext);

      expect(capturedUrl).toBe('https://custom.googleapis.com/v1/locations/global/workforcePools/pool123/subjects/user456');
    });

    test('should use ADDRESS environment variable when address param not provided', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456'
      };

      const contextWithEnvAddress = {
        ...mockContext,
        environment: {
          ADDRESS: 'https://env.googleapis.com'
        }
      };

      let capturedUrl;
      global.fetch = async (url, options) => {
        capturedUrl = url;
        return {
          ok: true,
          status: 200,
          text: async () => ''
        };
      };

      await script.invoke(params, contextWithEnvAddress);

      expect(capturedUrl).toBe('https://env.googleapis.com/v1/locations/global/workforcePools/pool123/subjects/user456');
    });
  });

  describe('error handler', () => {
    test('should re-throw error for framework to handle', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456',
        error: new Error('Network timeout')
      };

      await expect(script.error(params, mockContext))
        .rejects.toThrow('Network timeout');
    });
  });

  describe('halt handler', () => {
    test('should handle graceful shutdown', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456',
        reason: 'timeout'
      };

      const result = await script.halt(params, mockContext);

      expect(result.workforcePoolId).toBe('pool123');
      expect(result.subjectId).toBe('user456');
      expect(result.reason).toBe('timeout');
      expect(result.haltedAt).toBeDefined();
      expect(result.cleanupCompleted).toBe(true);
    });

    test('should handle halt with missing params', async () => {
      const params = {
        reason: 'system_shutdown'
      };

      const result = await script.halt(params, mockContext);

      expect(result.workforcePoolId).toBe('unknown');
      expect(result.subjectId).toBe('unknown');
      expect(result.reason).toBe('system_shutdown');
      expect(result.cleanupCompleted).toBe(true);
    });
  });
});