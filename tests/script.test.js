import script from '../src/script.mjs';

describe('Google Delete Workforce User Script', () => {
  const mockContext = {
    env: {
      ENVIRONMENT: 'test'
    },
    secrets: {
      GOOGLE_SERVICE_ACCOUNT_KEY: JSON.stringify({
        client_email: 'test@project.iam.gserviceaccount.com',
        private_key: '-----BEGIN PRIVATE KEY-----\ntest\n-----END PRIVATE KEY-----',
        project_id: 'test-project'
      })
    },
    outputs: {}
  };

  // Simple mocking approach for ES6 modules
  // const mockRequest = () => Promise.resolve({ status: 200, data: {} });

  beforeEach(() => {
    // Mock console to avoid noise in tests
    global.console.log = () => {};
    global.console.error = () => {};
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

    test('should throw error for missing service account key', async () => {
      const params = {
        workforcePoolId: 'pool123',
        subjectId: 'user456'
      };

      const contextWithoutKey = {
        ...mockContext,
        secrets: {}
      };

      await expect(script.invoke(params, contextWithoutKey))
        .rejects.toThrow('Missing required secret: GOOGLE_SERVICE_ACCOUNT_KEY');
    });

    // Note: Testing actual Google API calls would require integration tests
    // with real service account credentials
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