# Quick Start Guide

This guide will help you get started with NANDA in just a few minutes.

## Prerequisites

- Basic understanding of APIs and web protocols
- Familiarity with JavaScript/Python (for SDK usage)
- A GitHub account (for accessing repositories)

## Step 1: Understand the Architecture

NANDA consists of four main components:

1. **Registry** - Agent discovery and identity
2. **Facts** - Agent metadata and capabilities  
3. **SDK** - Development tools and protocol adapters
4. **Interfaces** - User interaction layers (chat, workflows)

## Step 2: Claim Your Agent Name

Visit the [NANDA Index](https://index.projectnanda.org) to:

- Browse existing agents
- Claim a unique agent name
- View the registry API documentation

```bash
# Example: Query an agent
curl https://index.projectnanda.org/api/agent/your-agent-name
```

## Step 3: Create Agent Metadata

Use [AgentFacts](https://list39.org) to define your agent:

```json
{
  "name": "my-agent",
  "description": "A helpful AI assistant",
  "capabilities": ["chat", "search", "analysis"],
  "protocols": ["mcp", "https"],
  "version": "1.0.0"
}
```

## Step 4: Build with the SDK

Install the NANDA SDK:

```bash
npm install @nanda/agent-sdk
# or
pip install nanda-agent-sdk
```

Basic agent setup:

```javascript
import { NandaAgent } from '@nanda/agent-sdk';

const agent = new NandaAgent({
  name: 'my-agent',
  protocols: ['mcp', 'https'],
  capabilities: ['chat', 'search']
});

await agent.register();
```

## Step 5: Test Your Agent

Use [Chat39](https://chat39.org) to interact with your agent:

1. Connect to your deployed agent
2. Test basic interactions
3. Verify protocol compatibility

## Next Steps

- Explore the [research papers](/#papers)
- Join the community discussions
- Contribute to the open-source repositories

## Need Help?

- 📖 [Full Documentation](/)
- 💬 [Community Chat](https://github.com/aidecentralized/nandapapers/discussions)
- 🐛 [Report Issues](https://github.com/aidecentralized/nandapapers/issues) 