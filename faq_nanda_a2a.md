# NANDA Index FAQ: Contextualizing with Linux Foundation Agent2Agent Project

In the context of the recent Linux Foundation Agent2Agent (A2A) project announcement and the broader landscape of agentic AI interoperability, here are some common questions about the NANDA Index - the lightweight index system for agent discovery.

## What is the NANDA Index in the context of the larger Project NANDA?

The NANDA Index is the foundational component of Project NANDA's three-stage vision for building the Internet of AI Agents. Using a city analogy: if A2A protocols are the streets agents use to communicate, Project NANDA builds the entire city, and the NANDA Index serves as the address system.

Project NANDA progresses through three technical phases:
- **Phase 1 - Foundations of Agentic Web**: NANDA Index provides agent identity and discovery infrastructure, plus cross-platform communication protocols and interoperability standards
- **Phase 2 - Agentic Commerce**: Knowledge pricing mechanisms, edge AI integration, economic protocols, and resource markets for agent services  
- **Phase 3 - Society of Agents**: Large Population Models (LPMs), collaborative learning systems, cross-silo coordination, and distributed AI networks

The NANDA Index enables all three stages by providing the essential discovery infrastructure that lets agents find and identify each other across the ecosystem. Howeever, it is only one part of the bigger goal of Project NANDA.


## What is A2A?

The Agent-to-Agent (A2A) protocol is an open standard created by Google and now hosted by the Linux Foundation. It provides a minimal wire protocol for secure, intelligent communication between AI agents across different platforms, vendors, and frameworks using JSON-RPC 2.0 request/response semantics and lightweight streaming channels.

## What is the Primary goal of A2A?

A2A's primary goal is to provide a minimal wire protocol so two opaque agents can discover each other and collaborate securely. It focuses specifically on the communication layer - defining how agents talk to each other once they're already connected.

## Why does A2A matter?

A2A enables agent-to-agent interoperability and collaboration, helping organizations avoid vendor lock-in and accelerate innovation. It provides the foundational "language" for agents to exchange data through standardized syntax rules, message formats, and interaction protocols.

## What communication problems does Project NANDA as a whole solve?

Project NANDA addresses broader discovery and routing challenges in several ways, some of which are listed below:
- **NANDA Adapter**: Enables cross-protocol interoperability by translating between and choosing between agent protocols (A2A, MCP, HTTPS)
- **Universal discovery**: Provides a global discovery layer where agents from any protocol can index and locate one another (using NANDA index)
- **Protocol translation**: Automatically configures communication channels between different frameworks

## How does the NANDA Index relate to MCP, A2A, and NLWeb?

The NANDA Index acts as a universal handshake layer that works with all these protocols. The NANDA Index functions as a global discovery service where agents from any protocol can index themselves, while the NANDA Adapter establishes communication channels and handles protocol translations. This enables an MCP assistant to directly communicate with an A2A inventory system or an NLWeb calendar service.

## How do NANDA Index and A2A compare?

| Feature | NANDA Index | A2A Protocol |
|---------|-------------|--------------|
| Focus | Lightweight agent discovery and cross-protocol routing | Standardized JSON-RPC communication between agents |
| Discovery | Decentralized "Quilt" with global index | Individual Agent Cards at /.well-known/agent.json (no index) |
| Protocol Support | NANDA Adapter bridges A2A, MCP, HTTPS, NLWeb, gRPC | A2A protocol only (JSON-RPC 2.0 + Server-Sent Events) |
| Identity | Cryptographically signed AgentAddr + Verifiable Credentials | Plain HTTPS + optional OAuth/mTLS tokens |
| Privacy | Dual-path resolution (direct + anonymous via PrivateFactsURL) | No privacy-preserving lookup options |

## What is common between A2A and NANDA Index

Both use agent metadata documents - A2A uses Agent Cards and NANDA Index uses AgentFacts that are similar. But AgentFacts of the NANDA Index uses additional fields for identity management and credential verification, economic primitives and payment systems, and privacy-preserving discovery mechanisms.

## What problems A2A does not solve that the NANDA Index addresses?

A2A avoids "ancillary" concerns that the NANDA Index treats as essential:
- Agent index and discovery infrastructure
- Identity management and credential verification
- Economic primitives and payment systems
- Reputation and trust mechanisms
- Decentralized governance structures

## What problems does A2A solve that the NANDA Index doesn't focus on?

A2A provides the standardized communication protocol itself - the actual syntax and technical specifications for how agents exchange messages. The NANDA Index assumes this communication layer exists (whether A2A, MCP, or others) and focuses on the discovery infrastructure around it.

## The Semantics vs Syntax distinction

- **A2A (Syntax Layer)**: Provides structural framework - message formats, JSON-RPC protocols, technical specifications for data exchange
- **Project NANDA (Semantics Layer)**: Focuses on meaning, context, and intent in discovery - why agents need to find each other, not just how to transmit data

## The Software vs Innovation distinction

- **A2A (Software)**: Delivers immediate developer tools, code libraries, security frameworks for building agent communication
- **Project NANDA (Innovation)**: Drives long-term research into decentralized discovery, privacy-preserving lookups, and federated index architectures

## How does the A2A announcement change the agentic AI space?

The Linux Foundation's stewardship ensures A2A remains vendor-neutral and open to community governance, preventing any single company from dominating agent communication standards. This creates a trusted foundation for the broader agent ecosystem to build with.

## How does the NANDA Index relate to the Linux Foundation A2A project?

The NANDA Index builds upon and complements A2A. While A2A provides the communication protocol, the NANDA Index adds the decentralized discovery infrastructure layer on top - agent finding, authentication, trust, and economic mechanisms. The NANDA Index can route to A2A endpoints through its universal handshake system.

## Will the NANDA Index work with Agent2Agent Project?

The NANDA Index has been designed with A2A compatibility in mind, collaborating closely with A2A stakeholders including Google, Cisco, and Salesforce. This partnership will continue to foster interoperability.

## Do Agent2Agent Project and NANDA Index compete?

No, they are complementary layers:
- The NANDA Index solves how to find, trust, and route to agents
- A2A solves how two agents exchange work once they're connected
- A NANDA Index-compliant agent can expose an A2A endpoint, making existing A2A services "NANDA-discoverable" with minimal changes
