import script from '../src/script.mjs';

describe('Google Delete Workforce User Script', () => {
  const mockServiceAccountKey = Buffer.from(JSON.stringify({
    client_email: 'test@example-project.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMOCK_KEY\n-----END PRIVATE KEY-----',
    project_id: 'test-project-123'
  })).toString('base64');

  const mockContext = {
    env: {
      ENVIRONMENT: 'test'
    },
    secrets: {
      service_account_key: mockServiceAccountKey
    },
    outputs: {},
    partial_results: {},
    current_step: 'start'
  };

  let originalFetch;
  let originalConsoleLog;
  let originalConsoleError;
  let originalCrypto;

  beforeEach(() => {
    // Store original functions
    originalFetch = global.fetch;
    originalConsoleLog = global.console.log;
    originalConsoleError = global.console.error;

    // Mock functions
    global.console.log = () => {};
    global.console.error = () => {};
  });

  afterEach(() => {
    // Restore original functions
    global.fetch = originalFetch;
    global.console.log = originalConsoleLog;
    global.console.error = originalConsoleError;
  });

  describe('invoke handler', () => {
    test('should execute successfully with valid params', async () => {
      // Mock successful responses
      global.fetch = (url, options) => {
        if (url.includes('oauth2.googleapis.com')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ access_token: 'mock-access-token' })
          });
        } else if (url.includes('iam.googleapis.com')) {
          return Promise.resolve({
            ok: true,
            status: 200
          });
        }
      };

      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'user123@example.com'
      };

      const result = await script.invoke(params, mockContext);

      expect(result.status).toBe('success');
      expect(result.workforce_pool_id).toBe('test-pool-123');
      expect(result.subject_id).toBe('user123@example.com');
      expect(result.deleted_at).toBeDefined();
    });

    test('should handle user not found (404) as successful deletion', async () => {
      // Mock OAuth success and 404 for delete
      global.fetch = (url, options) => {
        if (url.includes('oauth2.googleapis.com')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ access_token: 'mock-access-token' })
          });
        } else if (url.includes('iam.googleapis.com')) {
          return Promise.resolve({
            ok: false,
            status: 404,
            text: () => Promise.resolve('User not found')
          });
        }
      };

      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'nonexistent-user@example.com'
      };

      const result = await script.invoke(params, mockContext);

      expect(result.status).toBe('success');
      expect(result.workforce_pool_id).toBe('test-pool-123');
      expect(result.subject_id).toBe('nonexistent-user@example.com');
    });

    test('should throw FatalError for missing required parameters', async () => {
      const params = {
        workforce_pool_id: 'test-pool-123'
        // missing subject_id
      };

      await expect(script.invoke(params, mockContext)).rejects.toThrow('Missing or invalid required parameter: subject_id');
    });

    test('should throw FatalError for missing service account key', async () => {
      const contextWithoutKey = {
        ...mockContext,
        secrets: {}
      };

      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'user123@example.com'
      };

      await expect(script.invoke(params, contextWithoutKey)).rejects.toThrow('Missing required secret: service_account_key');
    });
  });

  describe('error handler', () => {
    test('should handle retryable errors', async () => {
      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'user123@example.com',
        error: {
          message: 'Rate limit exceeded',
          retryable: true
        }
      };

      const result = await script.error(params, mockContext);

      expect(result.status).toBe('failed');
      expect(result.retryable).toBe(true);
      expect(result.error).toBe('Rate limit exceeded');
      expect(result.workforce_pool_id).toBe('test-pool-123');
      expect(result.subject_id).toBe('user123@example.com');
    });

    test('should handle fatal errors', async () => {
      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'user123@example.com',
        error: {
          message: 'Invalid credentials',
          retryable: false
        }
      };

      const result = await script.error(params, mockContext);

      expect(result.status).toBe('failed');
      expect(result.retryable).toBe(false);
      expect(result.error).toBe('Invalid credentials');
      expect(result.workforce_pool_id).toBe('test-pool-123');
      expect(result.subject_id).toBe('user123@example.com');
    });
  });

  describe('halt handler', () => {
    test('should handle graceful shutdown', async () => {
      const params = {
        workforce_pool_id: 'test-pool-123',
        subject_id: 'user123@example.com',
        reason: 'timeout'
      };

      const result = await script.halt(params, mockContext);

      expect(result.status).toBe('halted');
      expect(result.workforce_pool_id).toBe('test-pool-123');
      expect(result.subject_id).toBe('user123@example.com');
      expect(result.reason).toBe('timeout');
      expect(result.halted_at).toBeDefined();
    });

    test('should handle halt without parameters', async () => {
      const params = {
        reason: 'system_shutdown'
      };

      const result = await script.halt(params, mockContext);

      expect(result.status).toBe('halted');
      expect(result.workforce_pool_id).toBe('unknown');
      expect(result.subject_id).toBe('unknown');
      expect(result.reason).toBe('system_shutdown');
    });
  });
});