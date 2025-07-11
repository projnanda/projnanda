# 🌐 Project NANDA: Building the Agentic Web

> **The future isn't just AI - it's trillions of AI agents collaborating across the open web securely**

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/@ProjectNANDA)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/BxnPBEqd88)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/projectnanda/)
[![arXiv](https://img.shields.io/badge/arXiv-B31B1B?style=flat&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.21550)
[![MIT](https://img.shields.io/badge/MIT-A31F34?style=flat&logo=mit&logoColor=white)](https://nanda.mit.edu)

---

## 🚀 Project NANDA

**Project NANDA** is building the foundational infrastructure for an Internet of AI Agents—a system where trillions of AI agents can collaborate, communicate, and transact across organizational boundaries without bottlenecks or security vulnerabilities.

Created at MIT, NANDA provides the **index**, **protocols**, and **tools** needed to enable this decentralized, protocol-neutral ecosystem. 

### 🎯 The Vision

We're moving from:
- **Static content** → **Dynamic services** → **Autonomous actors**
- AI models that just generate content → AI that **carries out actions** on our behalf
- Siloed systems → **Open, interoperable agent networks**

## 📚 Know more
- **📖 [View All Research Papers](https://github.com/aidecentralized/nandapapers)** - Latest reserach papers outlining the architectural, strategic, and technical foundations of the NANDA
- **📖 [Project NANDA FAQ](https://projnanda.github.io/projnanda/#/faq_nanda)** - Comprehensive Q&A about the project
- **🔗 [NANDA & A2A FAQ](https://projnanda.github.io/projnanda/#/faq_nanda_a2a)** - NANDA Index - contextualizing with Linux Foundation Agent2Agent Project
- **📁 [GitHub Repositories](https://github.com/projnanda)** - All open-source code for Agents, Index, Adapter SDK

---

## 🏗️ Architecture Overview

NANDA is intentionally modular and protocol-agnostic, stitching together existing and emerging protocols through open registries and SDKs.

### Core Components

| Component | Purpose | Status |
|-----------|---------|---------|
| **[NANDA Index](https://index.projectnanda.org)** | Lightweight registry for agent discovery | ![Live](https://img.shields.io/badge/status-live-brightgreen) |
| **[AgentFacts](https://list39.org)** | Structured agent metadata & capabilities | ![Live](https://img.shields.io/badge/status-live-brightgreen) |
| **[Agent Picker SDK](https://github.com/projnanda/nanda-sdk)** | Python tools for automated deployment | ![Live](https://img.shields.io/badge/status-live-brightgreen) |
| **[Chat Interface](https://chat39.org)** | User interface for agent interaction | ![Live](https://img.shields.io/badge/status-live-brightgreen) |

### Core Features

- **Identify** agents across the open web
- **Describe** agents with structured facts and capabilities  
- **Enable** communication across protocol boundaries (A2A, MCP, HTTPS)
- **Deploy** agents in managed or self-hosted environments
- **Interact** with agents through open clients or UX layers

---

## 📈 Development Roadmap

### Stage 1: Foundations of Agentic Web ![In Progress](https://img.shields.io/badge/status-in_progress-yellow)
**Foundation/Onboarding/Index**
- ![Complete](https://img.shields.io/badge/status-complete-brightgreen) Index Infrastructure: NANDA Index for agent discovery and identity
- ![Complete](https://img.shields.io/badge/status-complete-brightgreen) Cross-Platform Communication: Protocol bridges between A2A, MCP, HTTPS
- ![Complete](https://img.shields.io/badge/status-complete-brightgreen) Agent Onboarding: SDKs and tools for easy agent deployment
- ![In Progress](https://img.shields.io/badge/status-in_progress-yellow) Interoperability: Standards for agents to work across different platforms

### Stage 2: Agentic Commerce ![Planned](https://img.shields.io/badge/status-planned-blue)
**Knowledge pricing, edge AI**
- ![Planned](https://img.shields.io/badge/status-planned-blue) Knowledge Pricing: Mechanisms for agents to value and exchange information
- ![Planned](https://img.shields.io/badge/status-planned-blue) Edge AI Integration: Distributed intelligence at network edges
- ![Planned](https://img.shields.io/badge/status-planned-blue) Economic Protocols: Payment and incentive systems for agent services
- ![Planned](https://img.shields.io/badge/status-planned-blue) Resource Markets: Platforms for trading compute, data, and capabilities

### Stage 3: Society of Agents ![Research](https://img.shields.io/badge/status-research-orange)
**Large Population Models, co-learning, Agents across data silos**
- ![Research](https://img.shields.io/badge/status-research-orange) Large Population Models (LPMs): Collective intelligence from agent populations
- ![Research](https://img.shields.io/badge/status-research-orange) Collaborative Learning: Agents learning together while preserving privacy
- ![Research](https://img.shields.io/badge/status-research-orange) Cross-Silo Coordination: Agents working across organizational data boundaries
- ![Research](https://img.shields.io/badge/status-research-orange) Distributed AI: Split learning and inference across agent networks

---

## 🚀 Quick Start

Ready to deploy your first agent? Get started in minutes:

### Option 1: One-Click Setup
🎯 **[Join39.org](https://join39.org)** - Complete all steps in one place

### Option 2: Manual Setup
1. **🚀 [Deploy Your Agent](https://github.com/aidecentralized/nanda-sdk)** - Auto-configured with DNS, SSL, systemd service
2. **📋 [Create Agent Facts](https://list39.org)** - Define capabilities and metadata
3. **🏷️ [Register in Index](https://index.projectnanda.org)** - Make your agent discoverable

---

## 🧠 Research & Publications

Our research papers outline the architectural, strategic, and technical foundations:

### 📚 Latest Papers

1. **[Upgrade or Switch – The Need for New Registry](v0.3%20Upgrade%20or%20Switch%20-%20Do%20We%20Need%20a%20New%20Registry%20Architecture%20for%20the%20Internet%20of%20AI%20Agents.pdf)** - Analyzes the limitations of DNS and web infrastructure for AI agent systems. Weighs incremental upgrades (e.g., DNS push, SVCB records) against purpose-built registries. Offers analogies like dial-up to broadband and outlines the technical deltas introduced by the agent paradigm.
   
2.  **[Scaling Trust Beyond DNS: Unlocking the Internet of AI Agents via the NANDA Quilt of Registries and Verified AgentFacts](https://github.com/aidecentralized/nandapapers/blob/main/v0.3%20Beyond%20DNS%20-%20Unlocking%20the%20%20Internet%20of%20AI%20Agents%20via%20the%20NANDA%20Quilt%20of%20Registries%20and%20Verified%20AgentFacts.pdf)** - Details the design of a minimal, privacy-preserving registry architecture for agent discovery. Introduces the AgentFacts schema, TTL-based endpoint resolution, and cryptographic verification for agent capabilities. Offers concrete mechanisms for multi-endpoint routing, least-disclosure queries, and rapid revocation in decentralized agent ecosystems.
   
3. **[NANDA + ANS Security Blueprint](v0.2%20NANDA%20+%20ANS%20Security%20Blueprint_%20A%20Federated%20Registry%20Architecture%20for%20Secure,%20Capability-Aware%20Agent%20Discovery.pdf)** - Proposes a federated security architecture that combines NANDA’s minimal registry with the Agent Name Service (ANS) for dual-trust anchoring. Features include verifiable credentials, zero-knowledge proofs, and a modular governance system for agent discovery and capability validation.

4. **[Collaborative Agentic AI Needs Interoperability](https://github.com/aidecentralized/nandapapers/blob/main/Collaborative%20Agentic%20AI%20Needs%20Interoperability%20Across%20Ecosystems.pdf)** [![arXiv](https://img.shields.io/badge/arXiv-2505.21550-00ff00.svg)](https://arxiv.org/abs/2505.21550)

5. **[Survey of AI Agent Registry Solutions](https://github.com/aidecentralized/nandapapers/blob/main/v0.2%20Survey_of_AI_Agent_Registry_Solutions.pdf)** - Comparing MCP, A2A, Microsoft Entra Agent ID, and NANDA


📖 **[View All Papers](https://github.com/aidecentralized/nandapapers)** | 🖊️ **[Join Writing Group](https://tinyurl.com/nandawritingonboarding)**

---

## 🔧 Technical Deep Dive

### Why Not DNS?

DNS was designed in 1983 for static web infrastructure. Here's why it falls short for AI agents:

| Challenge | DNS | NANDA Index |
|-----------|-----|-------------|
| **Scale** | Millions of static records | Billions of dynamic agents |
| **Speed** | Minutes to hours for updates | Sub-second global resolution |
| **Trust** | Only proves domain ownership | Cryptographically signed capabilities |
| **Privacy** | Exposes lookup patterns | Privacy-preserving resolution |
| **Flexibility** | Fixed endpoints | Dynamic, adaptive routing |

### The "Quilt" Architecture

NANDA supports multiple registration types in a federated "quilt":

```
@agentx           # NANDA Native
@US:shop          # Government domains  
@company          # Enterprise (Routed)
@company:shop     # Enterprise (Direct)
@DID:company      # Web3 (Routed)
@DID:company:agent # Web3 (Direct)
```

### Protocol Interoperability

NANDA bridges protocols seamlessly:
- **MCP** (Model Context Protocol)
- **A2A** (Agent-to-Agent Protocol)  
- **HTTPS** (Traditional web)
- **NLWeb** (Microsoft's natural language interfaces)

---

## 🤝 Community & Collaboration

### Get Involved

- **[Discord](https://discord.gg/BxnPBEqd88)** - Join ongoing conversations
- **[Events](https://Lu.Ma/nanda)** - Weekly webinars and technical discussions
- **[YouTube](https://www.youtube.com/@ProjectNANDA)** - Latest demos and talks
- **[Newsletter](https://forms.gle/bnVRV2zr8M5Kotfr7)** - Stay updated

### Opportunities

- **Research**: Contribute to papers and algorithmic development
- **Development**: Fork SDKs, build integrations, propose improvements
- **Ecosystem**: Connect startups, corporations, and academic institutions
- **[Radius Fellowship](https://www.linkedin.com/jobs/view/4260498540/)** - Paid roles available

---

## 🎥 See It In Action

[![YouTube video player](https://img.youtube.com/vi/jlcO19XyQ1I/0.jpg)](https://www.youtube.com/watch?v=jlcO19XyQ1I)

*Click to watch our latest demo*

---

## 🏢 Partnership & Enterprise

**Corporate Coalition**: Multiple companies participating in development and standardization

**Academic Network**: Research partnerships with MIT and leading universities

**Open Source**: All components distributed under MIT License

**Government Engagement**: Stimulating public sector adoption and policy development

---

## 📚 Additional Resources

- **🏠 [Homepage](https://projectnanda.org)** - Official project site
- **🎓 [MIT Research Group](https://nanda.mit.edu)** - Academic foundation
- **📖 [Project FAQ](https://projnanda.github.io/projnanda/#/faq_nanda)** - Comprehensive Q&A
- **🔗 [NANDA & A2A FAQ](https://projnanda.github.io/projnanda/#/faq_nanda_a2a)** - Protocol relationships
- **📁 [GitHub Repositories](https://github.com/projnanda)** - All open-source code

---

## 🌍 Our Belief

The web will evolve from static content to dynamic services to autonomous actors. AI models will not just generate content but carry out actions on our behalf. Registries and protocols must be open to prevent capture and enable global participation.

**Join us in building the next layer of the web.**

---

<div align="center">

**Made with ❤️ by the NANDA Community**

*Building the Internet of AI Agents, one protocol at a time*

</div>
