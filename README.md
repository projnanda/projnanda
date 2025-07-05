# Project NANDA: Building a Quilt for the Internet of AI Agents

How can trillions of  AI agents collaborate across a organizational silos: communicate seamlessly, navigate autonomously, socialize, learn, earn and transact on our behalf. Project NANDA is building a quilt for a new kind of internet i.e. **Internet of AI Agents**. 

NANDA, created at MIT, provides the index of federated agent registries, communication interface, and open-source tooling needed to enable this system in a decentralized, protocol-neutral way.

## Overview

Project Nanda roadmap includes many research and implementation problems: agent discovery, Packet Switched Intelligence, trust, privateML, knowledge pricing, population AI and more. In the short term, NANDA defines a minimal set of abstractions to:

- **Identify** agents across the open web
- **Describe** agents with structured facts and capabilities  
- **Enable** communication across protocol boundaries (A2A, MCP, HTTPS)
- **Deploy** agents in managed or self-hosted environments
- **Interact** with agents through open clients or UX layers (e.g. chat, workflows)

The architecture is intentionally modular and protocol-agnostic. NANDA does not define a new transport layer. Instead, it stitches together existing and emerging protocols through open registries and SDKs.

## Current Reference Implementations

### 1. NANDA Index
**[index.projectnanda.org](https://index.projectnanda.org)**

The NANDA Index is a lightweight, decentralized registry of agent entries. It functions similarly to DNS or ENS:

- Agents claim names
- Agent endpoints and metadata are stored as verifiable index entries  
- Entries can be queried or updated via a RESTful API

The Index is not meant to be a monopoly. It's designed to be forkable and federated. Multiple index-compatible registries can coexist.

→ [GitHub: Registry Spec](https://github.com/projnanda/nanda-index)

### 2. AgentFacts
**[list39.org](https://list39.org)**

Each agent is associated with a structured set of facts—metadata that describes capabilities, provenance, uptime, hosting method, and more. These are designed to be human-readable and machine-verifiable.

Unlike traditional static schemas, AgentFacts evolve. They can contain:

- Natural language descriptions
- Capability claims  
- Links to telemetry (Cert39)
- Provenance logs (optional)

This metadata layer can be hosted independently from the registry, allowing separation of identity and descriptive state.

→ [GitHub: AgentFacts Format](https://github.com/projnanda/agentfacts-format)

### 3. Agent Picker SDK
**[GitHub: NANDA SDK](https://github.com/projnanda/nanda-sdk)**

The NANDA Agent-Picker SDK is a Python tool that automates the setup of Internet of Agents servers. It handles the complete server configuration process including DNS records, SSL certificates, and required software.

It includes:

- Automated server configuration and deployment
- DNS record creation and SSL certificate setup
- System service management for agents
- Integration with Anthropic API and MCP servers

Developers can use the SDK to deploy:

- Internet of Agents servers with custom domains
- Multiple agents on a single server
- Automatically configured HTTPS endpoints
- Production-ready agent infrastructure

→ [GitHub: Agent SDK](https://github.com/projnanda/nanda-sdk)

### 4. Chat Interface
**[chat39.org](https://chat39.org)**

The Chat39 application is one UX layer built on top of the NANDA index to demonstrate the capabilities of NANDA quilt index. It lets users:

- Interact with their own personal agents (twins)
- Converse with other autonomous agents
- Route queries to MCP/A2A-enabled endpoints

While "chat" is one interface, the same agents can power workflows, search, transactions, and more.

Chat39 helps bootstrap adoption by making agents tangible and accessible.

These sites are maintained independently but follow the NANDA architecture, encouraging replication and decentralization.

## Protocol Interoperability

NANDA is built on the belief that no single protocol will serve all purposes. Agents need to speak across:

- **MCP** (Model Context Protocol) 
- **A2A** (Agent-to-Agent Protocol) 
- **HTTPS** — still the backbone of the web

The Agent SDK abstracts over these protocols to allow seamless communication, while the Index + Facts layer standardizes identity and trust.

## Philosophy and Vision

The Internet of Agents requires more than APIs and UI. It needs infrastructure for agency:

- **Decentralized discovery**
- **Persistent identity**  
- **Machine-readable intent**
- **Cross-agent communication** without central gatekeepers

Our aim is not to own this infrastructure, but to model what it could look like, and offer reference implementations others can adopt or fork.

### We believe:

- The web will evolve from **static content** → **dynamic services** → **autonomous actors**
- AI models will not just generate content but **carry out actions** on our behalf
- Registries and protocols must be **open** to prevent capture and enable global participation

## Getting Started

Ready to deploy your first agent? Follow these steps to join the Internet of Agents:

### 1. Deploy Your Agent
**[Create an agent via SDK](https://github.com/aidecentralized/nanda-sdk)**

Your agent will be automatically configured with DNS, SSL certificates, and run as a systemd service.

### 2. Create Agent Facts
**[Get agent card on List39](https://list39.org)**

Define your agent's capabilities, description, and metadata. This creates a structured profile that other agents and users can discover and understand.

### 3. Register in Index  
**[Put it on our Index](https://index.projectnanda.org)**

Add your agent to the NANDA registry so it can be discovered across the network. This creates your agent's public identity and endpoints.

OR

Complete all the above steps in one place, via **[https://join39.org](https://join39.org)**

---

All components are open-source and designed for interoperability. Join us in building the next layer of the web.

## FAQ

For answers to common questions about Project NANDA and its relationship with other protocols:

- **[Project NANDA FAQ](https://projnanda.github.io/projnanda/#/faq_nanda)** - General questions about NANDA, the Index, and ecosystem
- **[NANDA & A2A FAQ](https://projnanda.github.io/projnanda/#/faq_nanda_a2a)** - How NANDA relates to the Linux Foundation's Agent2Agent project

## Research & Contributions

Project NANDA began as a research initiative at MIT. It is now an open project with collaborators from academia, industry, and open-source communities.

We welcome:

- Forks of the SDK
- Research on agent trust and verifiability
- Integrations with existing agent systems (LLMs, personal servers)
- Proposals for federated registry governance

→ [GitHub Repositories](https://github.com/projnanda)

## Nanda Papers

Our research papers outline the architectural, strategic, and technical foundations of the NANDA initiative:

#### 📝 Willing to contribute? Refer: [ Onboarding ](https://github.com/aidecentralized/nandapapers/blob/main/Onboarding%20to%20NANDA%20writing.md)

---

#### 1. [A Perspective on Decentralizing AI](https://github.com/aidecentralized/nandapapers/blob/main/decentralized_ML_perspective-16.pdf)

Outlines five foundational challenges for decentralized AI systems: privacy, verifiability, incentives, orchestration, and user experience. The paper proposes a layered architectural approach and highlights parallels with internet infrastructure like TCP/IP and DNS.

---

#### 2. [Game of Agents – Episode 1: Let there be Agents](https://github.com/aidecentralized/nandapapers/blob/main/Game%20of%20Agents%20%E2%80%94%20Episode%201_%20Let%20there%20be%20Agents%20_%20by%20Abhishek%20Singh%20_%20Medium.pdf)

Introduces the rise of intelligent agents from early LLM tooling to multi-agent systems. It discusses protocol evolution, especially the Model Context Protocol (MCP), and sets the stage for emerging agent infrastructure battles.

---

#### 3. [Game of Agents – Episode 2: The Great Library of Alexandria 2.0](https://github.com/aidecentralized/nandapapers/blob/main/Game%20of%20Agents%20%E2%80%94%20Episode%202_%20The%20Great%20Library%20of%20Alexandria%202.0%20_%20by%20Abhishek%20Singh%20_%20Medium.pdf)

Explores the need for an agent registry to enable discovery, trust, and collaboration among dynamic and ephemeral AI agents. Compares governance models including platform-led, consortium-led, and decentralized blockchain-based approaches.

---
#### 4. [Scaling Trust Beyond DNS – NANDA Registry](https://github.com/aidecentralized/nandapapers/blob/main/v0.3%20Beyond%20DNS%20-%20Unlocking%20the%20%20Internet%20of%20AI%20Agents%20via%20the%20NANDA%20Quilt%20of%20Registries%20and%20Verified%20AgentFacts.pdf)

Details the design of a minimal, privacy-preserving registry architecture for agent discovery. Introduces the AgentFacts schema, TTL-based endpoint resolution, and cryptographic verification for agent capabilities. Offers concrete mechanisms for multi-endpoint routing, least-disclosure queries, and rapid revocation in decentralized agent ecosystems.

---

#### 5. [Upgrade or Switch – The Need for New Registry](https://github.com/aidecentralized/nandapapers/blob/main/v0.3%20Upgrade%20or%20Switch%20-%20Do%20We%20Need%20a%20New%20Registry%20Architecture%20for%20the%20Internet%20of%20AI%20Agents.pdf)

Analyzes the limitations of DNS and web infrastructure for AI agent systems. Weighs incremental upgrades (e.g., DNS push, SVCB records) against purpose-built registries. Offers analogies like dial-up to broadband and outlines the technical deltas introduced by the agent paradigm.

---

#### 6. [Internet of Agents Architecture (Agentic Chat Demo)](https://github.com/aidecentralized/nandapapers/blob/main/NandaRegistry_AgenticChat.pdf)

Presents a layered architecture for live multi-agent interaction via chat interfaces. Describes client, communication, and context agent roles with example use cases. Demonstrates real-time coordination enabled by the NANDA registry.

---

#### 7. [Survey of AI Agent Registry Solutions](https://github.com/aidecentralized/nandapapers/blob/main/v0.2%20Survey_of_AI_Agent_Registry_Solutions.pdf)

Compares leading registry architectures - MCP, A2A, Microsoft Entra Agent ID, and NANDA, across security, scalability, authentication, and maintainability. Highlights NANDA’s AgentFacts as a privacy-preserving, cryptographically verifiable schema purpose-built for dynamic, multi-agent systems.

---

#### 8. [NANDA + ANS Security Blueprint](https://github.com/aidecentralized/nandapapers/blob/main/v0.2%20NANDA%20+%20ANS%20Security%20Blueprint_%20A%20Federated%20Registry%20Architecture%20for%20Secure,%20Capability-Aware%20Agent%20Discovery.pdf)

Proposes a federated security architecture that combines NANDA’s minimal registry with the Agent Name Service (ANS) for dual-trust anchoring. Features include verifiable credentials, zero-knowledge proofs, and a modular governance system for agent discovery and capability validation.

---

#### 9. [Collaborative Agentic AI Needs Interoperability Across Ecosystems](https://github.com/aidecentralized/nandapapers/blob/main/Collaborative%20Agentic%20AI%20Needs%20Interoperability%20Across%20Ecosystems.pdf)

[![arXiv](https://img.shields.io/badge/arXiv-2505.21550-00ff00.svg)](https://arxiv.org/abs/2505.21550)

Identifies that we are headed toward protocol wars in agentic AI ecosystems. Proposes minimal web-based standards as a solution to enable interoperability across agents and prevent fragmentation in the ecosystem.

## Streams

- LinkedIn Channel: https://www.linkedin.com/company/projectnanda/
- Events Calendar: https://Lu.Ma/nanda
- Youtube Channel: https://www.youtube.com/@ProjectNANDA
- GitHub repos https://github.com/projnanda
- Onboarding steps for NANDA writing group: https://tinyurl.com/nandawritingonboarding
- Connect with & Sign up for newsletter: https://forms.gle/bnVRV2zr8M5Kotfr7
- Homepage: https://projectnanda.org
- MIT research group: https://nanda.mit.edu
- Discord Channel: https://discord.gg/BxnPBEqd88
- Create your agent in 30 seconds and list on Nanda Index: https://join39.org/how-it-works

- Apply to Radius Fellowship (paid roles) https://www.linkedin.com/jobs/view/4260498540/


[![YouTube video player](https://img.youtube.com/vi/jlcO19XyQ1I/0.jpg)](https://www.youtube.com/watch?v=jlcO19XyQ1I)

---

*This content is distributed under the MIT License.* 
