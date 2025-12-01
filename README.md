# Google Delete Workforce User Action

Delete a workforce user from Google Cloud IAM Workforce Identity Federation. This action is commonly used for offboarding users or revoking access from workforce identity pools.

## Overview

This SGNL action integrates with Google Cloud IAM API to delete workforce users from Workforce Identity Federation pools. When executed, the user will be permanently removed from the specified workforce pool.

## Prerequisites

- Google Cloud IAM API access
- Appropriate authentication credentials (Bearer token, Basic auth, OAuth2, etc.)
- Workforce pool ID where the user exists
- Subject ID of the workforce user to delete

## Configuration

### Required Secrets

The configured auth type will determine which secrets are needed:

- **Bearer Authentication**: `BEARER_AUTH_TOKEN`
- **Basic Authentication**: `BASIC_USERNAME` and `BASIC_PASSWORD`
- **OAuth2 Client Credentials**: `OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET`
- **OAuth2 Authorization Code**: `OAUTH2_AUTHORIZATION_CODE_ACCESS_TOKEN`

### Optional Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `ADDRESS` | `https://iam.googleapis.com` | Google IAM API base URL (can also be provided via `address` parameter) |
| `OAUTH2_CLIENT_CREDENTIALS_AUDIENCE` | - | OAuth2 audience for client credentials flow |
| `OAUTH2_CLIENT_CREDENTIALS_AUTH_STYLE` | - | OAuth2 auth style (InParams or InHeader) |
| `OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID` | - | OAuth2 client ID |
| `OAUTH2_CLIENT_CREDENTIALS_SCOPE` | - | OAuth2 scope |
| `OAUTH2_CLIENT_CREDENTIALS_TOKEN_URL` | - | OAuth2 token endpoint URL |

### Input Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `subjectId` | string | Yes | The subject/user ID of the workforce user to delete | `user@example.com` |
| `workforcePoolId` | string | Yes | The ID of the workforce pool containing the user | `my-workforce-pool` |
| `address` | string | No | Google IAM API base URL (defaults to `https://iam.googleapis.com`) | `https://iam.googleapis.com` |

### Output Structure

| Field | Type | Description |
|-------|------|-------------|
| `subjectId` | string | The subject ID that was deleted |
| `workforcePoolId` | string | The workforce pool ID that was processed |
| `deleted` | boolean | Whether the user was successfully deleted |
| `alreadyDeleted` | boolean | Whether the user was already deleted (404 response) |
| `deletedAt` | datetime | When the deletion completed (ISO 8601) |

## Usage Example

### Job Request

```json
{
  "id": "delete-workforce-user-001",
  "type": "nodejs-22",
  "script": {
    "repository": "github.com/sgnl-actions/google-delete-workforce-user",
    "version": "v1.0.0",
    "type": "nodejs"
  },
  "script_inputs": {
    "subjectId": "user@example.com",
    "workforcePoolId": "my-workforce-pool",
    "address": "https://iam.googleapis.com"
  },
  "environment": {
    "LOG_LEVEL": "info"
  }
}
```

### Successful Response

```json
{
  "subjectId": "user@example.com",
  "workforcePoolId": "my-workforce-pool",
  "deleted": true,
  "deletedAt": "2024-01-15T10:30:00Z"
}
```

### Idempotent Behavior (User Already Deleted)

```json
{
  "subjectId": "user@example.com",
  "workforcePoolId": "my-workforce-pool",
  "deleted": true,
  "alreadyDeleted": true,
  "deletedAt": "2024-01-15T10:30:00Z"
}
```

## Authentication Methods

This action supports multiple authentication methods via the `@sgnl-actions/utils` package:

### 1. Bearer Token
Simple bearer token authentication:
```json
"secrets": {
  "BEARER_AUTH_TOKEN": "your-bearer-token"
}
```

### 2. Basic Authentication
Username and password authentication:
```json
"secrets": {
  "BASIC_USERNAME": "your-username",
  "BASIC_PASSWORD": "your-password"
}
```

### 3. OAuth2 Client Credentials
Machine-to-machine OAuth2 flow (fetches token dynamically):
```json
"secrets": {
  "OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET": "your-client-secret"
},
"environment": {
  "OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID": "your-client-id",
  "OAUTH2_CLIENT_CREDENTIALS_TOKEN_URL": "https://oauth2.googleapis.com/token",
  "OAUTH2_CLIENT_CREDENTIALS_SCOPE": "https://www.googleapis.com/auth/cloud-platform"
}
```

### 4. OAuth2 Authorization Code
Uses pre-existing access token (no refresh, uses as-is):
```json
"secrets": {
  "OAUTH2_AUTHORIZATION_CODE_ACCESS_TOKEN": "your-access-token"
}
```

## Error Handling

The action includes comprehensive error handling:

### Successful Cases
- **200 OK**: User successfully deleted
- **404 Not Found**: User doesn't exist (treated as success - idempotent operation)

### Error Cases
- **401 Unauthorized**: Invalid or expired authentication credentials
- **403 Forbidden**: Insufficient permissions
- **Other errors**: Thrown with detailed error messages

## Development

### Local Testing

```bash
# Install dependencies
npm install

# Run tests
npm test

# Test locally with mock data
npm run dev

# Build for production
npm run build
```

### Running Tests

The action includes comprehensive unit tests covering:
- Input validation (subjectId, workforcePoolId)
- Successful deletion
- Address parameter handling (default, parameter, environment variable)
- Error handling

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage
```

## Security Considerations

- **Token Protection**: Never log or expose authentication tokens
- **Audit Logging**: All deletions are logged with timestamps
- **Idempotent Operations**: Safe to retry - 404 responses treated as success
- **Input Validation**: Subject ID and workforce pool ID are validated

## Google Cloud IAM API Reference

This action uses the following Google Cloud IAM API endpoint:
- [Delete Workforce Pool Subject](https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools.subjects/delete)

## Troubleshooting

### Common Issues

1. **"Invalid or missing subjectId parameter"**
   - Ensure the `subjectId` parameter is provided and is a non-empty string

2. **"Invalid or missing workforcePoolId parameter"**
   - Ensure the `workforcePoolId` parameter is provided and is a non-empty string

3. **Authentication Errors (401)**
   - Verify your authentication credentials are valid and haven't expired
   - For OAuth2, ensure the access token has the correct scopes

4. **Permission Errors (403)**
   - Ensure your credentials have the `iam.workforcePoolSubjects.delete` permission
   - Verify the service account has access to the workforce pool

## Version History

### v1.0.0
- Initial release
- Support for workforce user deletion via Google Cloud IAM API
- Multiple authentication methods (Bearer, Basic, OAuth2 Client Credentials, OAuth2 Authorization Code)
- Integration with @sgnl-actions/utils package
- Idempotent operation support

## License

MIT

## Support

For issues or questions, please contact SGNL Engineering or create an issue in this repository.