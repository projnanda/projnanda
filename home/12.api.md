# API Reference

The NANDA ecosystem provides several APIs for agent registration, discovery, and interaction.

## Registry API

Base URL: `https://index.projectnanda.org/api`

### Get Agent

Retrieve agent information by name.

```http
GET /agent/{name}
```

**Parameters:**
- `name` (string): The agent name

**Response:**
```json
{
  "name": "example-agent",
  "endpoints": [
    {
      "protocol": "https",
      "url": "https://example.com/agent"
    },
    {
      "protocol": "mcp",
      "url": "mcp://example.com:8080"
    }
  ],
  "facts_url": "https://list39.org/facts/example-agent",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

### Register Agent

Register a new agent or update an existing one.

```http
POST /agent
```

**Request Body:**
```json
{
  "name": "my-agent",
  "endpoints": [
    {
      "protocol": "https",
      "url": "https://mysite.com/agent"
    }
  ],
  "facts_url": "https://list39.org/facts/my-agent",
  "signature": "0x..."
}
```

### List Agents

Get a paginated list of all agents.

```http
GET /agents?page=1&limit=50
```

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 50, max: 100)

## AgentFacts API

Base URL: `https://list39.org/api`

### Get Agent Facts

```http
GET /facts/{name}
```

**Response:**
```json
{
  "name": "example-agent",
  "description": "A helpful AI assistant",
  "capabilities": [
    "natural_language_processing",
    "web_search",
    "code_generation"
  ],
  "protocols": ["mcp", "https", "a2a"],
  "version": "1.2.0",
  "provider": "Example Corp",
  "uptime": {
    "last_24h": 99.9,
    "last_7d": 99.5,
    "last_30d": 99.2
  },
  "certifications": [
    {
      "type": "security_audit",
      "provider": "cert39.org",
      "date": "2024-01-10",
      "score": 95
    }
  ]
}
```

### Update Agent Facts

```http
PUT /facts/{name}
```

**Authentication:** Required (API key or signature)

## Agent SDK API

The SDK provides programmatic access to NANDA services.

### JavaScript/Node.js

```javascript
import { NandaClient } from '@nanda/client';

const client = new NandaClient({
  registryUrl: 'https://index.projectnanda.org/api',
  factsUrl: 'https://list39.org/api'
});

// Find an agent
const agent = await client.findAgent('helpful-assistant');

// Get agent capabilities
const facts = await client.getAgentFacts('helpful-assistant');

// Send a message
const response = await client.sendMessage('helpful-assistant', {
  text: 'Hello, how can you help me?',
  protocol: 'mcp'
});
```

### Python

```python
from nanda import NandaClient

client = NandaClient(
    registry_url='https://index.projectnanda.org/api',
    facts_url='https://list39.org/api'
)

# Find an agent
agent = client.find_agent('helpful-assistant')

# Get agent capabilities  
facts = client.get_agent_facts('helpful-assistant')

# Send a message
response = client.send_message('helpful-assistant', {
    'text': 'Hello, how can you help me?',
    'protocol': 'mcp'
})
```

## Error Handling

All APIs use standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized  
- `404` - Not Found
- `429` - Rate Limited
- `500` - Internal Server Error

Error responses include details:

```json
{
  "error": "agent_not_found",
  "message": "The specified agent does not exist",
  "code": 404
}
```

## Rate Limits

- Registry API: 1000 requests per hour per IP
- Facts API: 500 requests per hour per IP
- Authenticated requests: 5000 requests per hour per key

## Authentication

Some endpoints require authentication:

1. **API Key:** Include in `Authorization` header
   ```
   Authorization: Bearer your_api_key_here
   ```

2. **Cryptographic Signature:** For agent registration/updates
   ```
   X-Signature: 0x1234567890abcdef...
   ```

## SDKs and Libraries

Official SDKs are available for:

- JavaScript/TypeScript: `@nanda/client`
- Python: `nanda-client`
- Go: `github.com/nanda/go-client`
- Rust: `nanda-client`

Community SDKs:
- Java (Spring Boot integration)
- C# (.NET integration)
- PHP (Laravel integration) 