# Project NANDA: Building a Quilt for the Internet of AI Agents

How can trillions of  AI agents collaborate across a organizational silos: communicate seamlessly, navigate autonomously, socialize, learn, earn and transact on our behalf. Project NANDA is building a quilt for a new kind of internet—an **Internet of AI Agents**. 

NANDA provides the index of federated agent registries, communication interface, and open-source tooling needed to enable this system in a decentralized, protocol-neutral way.

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

→ [GitHub: AgentFacts Format](https://github.com/aidecentralized/list-39.git)

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

### 5. Certifications and Hosting

Additional services are emerging:

- **Cert39** ([cert39.org](https://cert39.org)): Open telemetry, uptime tracking, and skills certification
- **Host39** ([host39.org](https://host39.org)): AWS-like hosting for lightweight, containerized agents

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

Install the NANDA SDK and deploy your agent server:
```bash
pip install nanda-sdk
nanda-sdk --anthropic-key <your_key> --domain <myapp.example.com>
```
Your agent will be automatically configured with DNS, SSL certificates, and run as a systemd service.

### 2. Create Agent Facts
**[Get agent card on List39](https://list39.org)**

Define your agent's capabilities, description, and metadata. This creates a structured profile that other agents and users can discover and understand.

### 3. Register in Index  
**[Put it on our Index](https://index.projectnanda.org)**

Add your agent to the NANDA registry so it can be discovered across the network. This creates your agent's public identity and endpoints.

### 4. Start Interacting
**[Interact via Chat39](https://chat39.org)**

Test your agent and communicate with other agents in the network. Experience the future of AI-to-AI communication.

---

All components are open-source and designed for interoperability. Join us in building the next layer of the web.

## Research & Contributions

Project NANDA began as a research initiative at MIT. It is now an open project with collaborators from academia, industry, and open-source communities.

We welcome:

- Forks of the SDK
- Research on agent trust and verifiability
- Integrations with existing agent systems (LLMs, personal servers)
- Proposals for federated registry governance

→ [GitHub Repositories](https://github.com/projnanda)

## Papers

Our research papers outline the architectural, strategic, and technical foundations of the NANDA initiative:

1. **[A Perspective on Decentralizing AI](https://github.com/aidecentralized/nandapapers)**  
   Outlines five foundational challenges for decentralized AI systems: privacy, verifiability, incentives, orchestration, and user experience.

2. **[Game of Agents – Episode 1: Let there be Agents](https://github.com/aidecentralized/nandapapers)**  
   Introduces the rise of intelligent agents from early LLM tooling to multi-agent systems.

3. **[Game of Agents – Episode 2: The Great Library of Alexandria 2.0](https://github.com/aidecentralized/nandapapers)**  
   Explores the need for an agent registry to enable discovery, trust, and collaboration among dynamic and ephemeral AI agents.

4. **[Scaling Trust Beyond DNS – NANDA Index](https://github.com/aidecentralized/nandapapers)**  
   Details the design of a minimal, privacy-preserving registry architecture for agent discovery.

5. **[Upgrade or Switch – The Need for New Index](https://github.com/aidecentralized/nandapapers)**  
   Analyzes the limitations of DNS and web infrastructure for AI agent systems.

6. **[Internet of Agents Architecture (Agentic Chat Demo)](https://github.com/aidecentralized/nandapapers)**  
   Presents a layered architecture for live multi-agent interaction via chat interfaces.

7. **[Survey of AI Agent Registry Solutions](https://github.com/aidecentralized/nandapapers)**  
   Compares leading registry architectures across security, scalability, authentication, and maintainability.

8. **[NANDA + ANS Security Blueprint](https://github.com/aidecentralized/nandapapers)**  
   Proposes a federated security architecture that combines NANDA's minimal registry with the Agent Name Service (ANS).

9. **[Collaborative Agentic AI Needs Interoperability Across Ecosystems](https://arxiv.org)**  
   Identifies that we are headed toward protocol wars in agentic AI ecosystems and proposes minimal web-based standards as a solution.

---

*This content is distributed under the MIT License.* 
