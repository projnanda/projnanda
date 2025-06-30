# Project Nanda FAQ: Contextualizing with Linux Foundation Agent2Agent Project

In the context of the recent Linux Foundation Agent2Agent (A2A) project announcement and the broader landscape of agentic AI interoperability, here are some common questions about Project Nanda - research and development.

## What is A2A?

The Agent-to-Agent (A2A) protocol is an open standard created by Google and now hosted by the Linux Foundation. It provides a minimal wire protocol for secure, intelligent communication between AI agents across different platforms, vendors, and frameworks using JSON-RPC 2.0 request/response semantics and lightweight streaming channels.

## What is the Primary goal of A2A?

A2A's primary goal is to provide a minimal wire protocol so two opaque agents can discover each other and collaborate securely. It focuses specifically on the communication layer - defining how agents talk to each other once they're already connected.

## Why does A2A matter?

A2A enables agent-to-agent interoperability and collaboration, helping organizations avoid vendor lock-in and accelerate innovation. It provides the foundational "language" for agents to exchange data through standardized syntax rules, message formats, and interaction protocols.

## What communication problems does Project NANDA solve?

Project NANDA addresses broader communication challenges through:
- **NANDA Adapter**: Enables cross-protocol interoperability by translating between and choosing between agent protocols (A2A, MCP, HTTPS)
- **Universal discovery**: Provides a global discovery layer where agents from any protocol can register and locate one another
- **Protocol translation**: Automatically configures communication channels between different frameworks

## How does NANDA relate to MCP, A2A, and NLWeb?

NANDA acts as a universal handshake layer that works with all these protocols. The NANDA Index functions as a global discovery service where agents from any protocol can register, while the NANDA Adapter establishes communication channels and handles protocol translations. This enables an MCP assistant to directly communicate with an A2A inventory system or an NLWeb calendar service.

## How do NANDA index and A2A compare?

| Feature | NANDA Index | A2A Protocol |
|---------|-------------|--------------|
| Focus | Lightweight agent discovery and cross-protocol routing | Standardized JSON-RPC communication between agents |
| Discovery | Decentralized "Quilt" with global index | Individual Agent Cards at /.well-known/agent.json (no index) |
| Protocol Support | NANDA Adapter bridges A2A, MCP, HTTPS, NLWeb, gRPC | A2A protocol only (JSON-RPC 2.0 + Server-Sent Events) |
| Identity | Cryptographically signed AgentAddr + Verifiable Credentials | Plain HTTPS + optional OAuth/mTLS tokens |
| Privacy | Dual-path resolution (direct + anonymous via PrivateFactsURL) | No privacy-preserving lookup options |

## What is common between A2A and Nanda Index

Uses Agent-card and agent-facts that are similar. But Agent-facts of Nanda Index uses additional fields for xyz (such as Identity management and credential verification, Economic primitives and payment systems)

## What problems does A2A not solve that NANDA addresses?

A2A avoids "ancillary" concerns that NANDA treats as essential:
- Agent index
- Identity management and credential verification
- Economic primitives and payment systems
- Reputation and trust mechanisms
- Decentralized governance structures

## What problems does A2A solve that NANDA doesn't focus on?

A2A provides the standardized communication protocol itself - the actual syntax and technical specifications for how agents exchange messages. NANDA Index assumes this communication layer exists (whether A2A, MCP, or others) and focuses on the infrastructure around it.

## The Semantics vs Syntax distinction

- **A2A (Syntax Layer)**: Provides structural framework - message formats, JSON-RPC protocols, technical specifications for data exchange
- **NANDA (Semantics Layer)**: Focuses on meaning, context, and intent - why tasks are performed, not just how to transmit data

## The Software vs Innovation distinction

- **A2A (Software)**: Delivers immediate developer tools, code libraries, security frameworks for building agent communication
- **NANDA (Innovation)**: Drives long-term research into co-learning, knowledge pricing, population AI coordination, and privacy-preserving ML

## How does the A2A announcement change the agentic AI space?

The Linux Foundation's stewardship ensures A2A remains vendor-neutral and open to community governance, preventing any single company from dominating agent communication standards. This creates a trusted foundation for the broader agent ecosystem to build with.

## How does Project NANDA relate to the Linux Foundation A2A project?

NANDA builds upon and complements A2A. While A2A provides the communication protocol, NANDA adds the decentralized infrastructure layer on top - discovery, authentication, trust, and economic mechanisms. NANDA can tunnel A2A traffic through its universal handshake system.

## Will Project NANDA work with Agent2Agent Project?

NANDA has been collaborating closely with A2A stakeholders including Google, Cisco, and Salesforce. This partnership will continue to foster interoperability.

## Do Agent2Agent Project and Project NANDA compete?

No, they are complementary layers:
- NANDA solves how to find, trust, pay, and manage agents
- A2A solves how two agents exchange work once they're connected
- A NANDA-compliant agent can expose an A2A endpoint, making existing A2A services "NANDA-ready" with minimal changes
