import script from '../src/script.mjs';

describe('Google Delete Workforce User Script', () => {
  const mockContext = {
    env: {
      ENVIRONMENT: 'test'
    },
    secrets: {
      // Authentication is handled externally, so we don't need specific credentials here
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

    // Note: Authentication is handled externally by the system
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