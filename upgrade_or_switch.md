# Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?

**Authors:** Ramesh Raskar (MIT), Pradyumna Chari (MIT), Jared James Grogan, Mahesh Lambe (UnifyDynamics), Robert Lincourt (Dell), Raghu Bala (Synergetics AI), Aditi Joshi, Abhishek Singh (MIT), Ayush Chopra (MIT), Rajesh Ranjan (CMU), Shailja Gupta (CMU), Dimitris Stripelis (Flower AI), Maria Gorskikh, Sichao Wang (CISCO)

**Project NANDA**

---

## Abstract

The web is on the cusp of a profound transformation. The emerging Internet of AI Agents - a network where independently addressable software AI agents discover one another, authenticate, and act with varying degrees of autonomy - promises not only to serve human requests but to let AI agents negotiate, coordinate, and transact directly on their behalf. This paper examines whether the path forward requires upgrading existing web infrastructure or switching to entirely purpose-built architectures for the 'Internet of AI agents'.

## Introduction

The web is on the cusp of a profound transformation. Despite advances in automation and event-driven design, the current Web still operates largely on a reactive model. Systems wait for user or client requests before acting, with limited native support for proactive or autonomous behaviors. The emerging Internet of AI Agents - a network where independently addressable software AI agents discover one another, authenticate, and act with varying degrees of autonomy - promises not only to serve human requests but to let AI agents negotiate, coordinate, and transact directly on their behalf.

Unlike traditional web components that remain idle until triggered by a user or a client issues a request, these AI agents are long-lived, goal-oriented, proactive computational entities with built-in reasoning capabilities that can anticipate needs, take initiative, maintain ongoing state, retain contextual memory and work towards defined goals without constant human direction. AI Agents leverage advanced machine learning models to interpret ambiguous instructions, adapt to changing circumstances, and make context-sensitive decisions within their domain of operation - capabilities that move far beyond the web's traditional, stateless request-response paradigm and exist on a continuum of autonomy.

AI agents, operating with varying degrees of autonomy, are poised to reshape both humanâ€“computer interaction and agent-to-agent interaction with digital systems and with each other through digital intermediaries. Figure 1 contrasts today's reactive page/API model with this proactive, memory-driven architecture.

![Traditional Web vs Internet of AI Agents](assets/figure1_traditional_vs_agents.png)

**Figure 1** | Traditional Web vs. Internet of AI Agents Architecture: The traditional web is a reactive request-response system: a user (or client app) issues an HTTP call, a stateless server returns a page or JSON payload, and the interaction ends. By contrast, the Internet of AI Agents introduces stateful, persistent, LLM-powered AI agents that can interpret user goals, retain context across sessions, and autonomously pursue multi-step tasks, often coordinating with other agents on the user's behalf.

## Architectural Evolution: From Static to Autonomous

### Table 1: Architectural Comparison of Execution Models

| Dimension | Static Web Page (HTML/CSS) | Stateless Cloud Function / REST API | LLM-Backed Autonomous Agent |
|-----------|----------------------------|-------------------------------------|----------------------------|
| **Who initiates control?** | Client fetches URL | Client calls endpoint | Agent decides and pushes messages; client optional |
| **Lifecycle** | Immutable file; versioned manually | Ephemeral (per-request); no memory between calls | Persistent process / container; maintains long-term state & memory |
| **Execution context** | Web server, no compute after render | Isolated runtime (e.g., AWS Lambda) spun up per call | Event loop with scheduler, tool-calling sandbox, vector store, policy layer |
| **State management** | External DB or none | Must externalise state every call | Internal memory + external stores; can self-modify plans |
| **Autonomy level** | 0 â€“ passive | 1 â€“ reactive | 2-3 â€“ proactive (can set sub-goals, spawn agents) |
| **Concurrency model** | One request â†” one response | Many isolated calls; no inter-call coordination | Parallel, asynchronous task graph; may coordinate with peer agents |
| **Addressing & identity** | DNS + TLS cert bound to domain | Same as static, plus API keys | Needs cryptographic Decentralized Identifiers (Machine Readable Identifiers) and capability attestation; identity may migrate |
| **Security surface** | XSS, CSRF | Injection, auth bypass | Prompt injection, tool-chain abuse, autonomous exfiltration |
| **Typical latency budget** | â‰¥ 100 ms round-trip (human perception threshold) | 10-100 ms service-to-service RPC | Internal loop: < 250 ms; External goal fulfilment: 0.25â€“3 s (LLM inference + network) |
| **Failure semantics** | 404 / 5xx | Retry logic | Must handle goal re-planning, degraded tools, dynamic trust revocation |

## A Primer on WWW Architecture and Hierarchy

Today's web stack hinges on four interlocking layersâ€”DNS, WHOIS, IP addressing, and Certificate Authoritiesâ€”each optimised for human-initiated traffic.

### Domain Name System (DNS)
The Domain Name System (DNS) is a globally distributed, hierarchical namespace which maps human-readable domain names to machine-readable IP addresses. This system provides globally unique identifiers for websites, a hierarchical namespace structure (root, top-level domains, second-level domains), distributed management through multiple registrars, and resolution services with propagation times typically measured in hours.

### WHOIS Database
The WHOIS Database complements DNS by providing metadata about domain ownership, including contact information for domain owners, registration and expiration dates, name server information, and limited verification of identity. But after GDPR most records are redacted or proxied, and identity checks remain largely self-attested, which is an unacceptable foundation for autonomous agents that must negotiate trust without human arbitration.

### IP Addressing
IP Addressing provides unique identifiers for devices connected to the internet. IPv4 uses 32-bit addresses, limiting the namespace to approximately 4.3 billion addresses, while IPv6 uses 128-bit addresses, theoretically allowing for 2^128 unique addresses.

### Certificate Authorities
Certificate Authorities issue digital certificates that authenticate website identities and enable secure communication. They validate domain ownership, issue certificates with expiration dates, maintain certificate revocation lists, and operate at human-oriented speeds and verification levels.

## Lessons from Dial-up â†’ Broadband

The transition from dialup to broadband internet provides valuable insights into how we might approach the shift to the Internet of AI agents. When the internet was first commercialized, existing telephone infrastructure seemed like a natural fit - it already connected most homes and businesses. However, as internet usage evolved, fundamental limitations of dial-up became apparent.

### Why We Didn't Use Dialup for Internet Long-Term

Dialup's limitations (max 56 kbps downstream vs. >1Mbps early DSL) revealed the importance of designing infrastructure for future needs rather than just current requirements. The circuit-switched connection model was flawed for internet use, as dial-up's temporary connections were not suitable for the persistent connectivity the internet would ultimately demand.

### How We Dealt with Known Unknowns

Engineers could plainly see that dial-up's 56 kbps ceiling and â‰ˆ 200 ms modem latency would strangle bandwidth-hungry, interactive apps. So they designed last-mile upgradesâ€”DSL, cable, then fiberâ€”that offered > 1 Mbps downstream and sub-30 ms RTTs while staying 'always-on.'

### How We Prevented Unknown Unknowns

The move to packet-switched, layered networks with TCP/IP created a flexible foundation that could accommodate unforeseen developments. The open IPv4/IPv6 substrate allowed bandwidth-intensive applications to flourish in ways no one could have predicted.

## The Continuum: From Endpoints to Autonomous Agents

When the Web is described as moving "from web pages to agents," it is easy to imagine a sudden, binary leap. In practice the evolution is gradual, and most of the infrastructure we rely on today was stretched, sometimes painfully, at each intermediate step.

### 1. Endpoints: The Stateless Web
The original Web exposed static endpointsâ€”HTML files, images, style sheets and, later, simple CGI scripts. A user (or crawler) made an explicit request, the server returned a byte stream, and the conversation ended.

### 2. Services: Always-On APIs
The next layer of capability arrived when businesses wrapped their databases in REST and GraphQL services. Now machines, not just humans, were first-class clients, and data mutated continuously rather than on release nights.

### 3. Workers: Event-Driven Compute
Cloud platforms then introduced serverless functions, cron jobs and RPA bots. These "workers" are short-lived but bursty; thousands can spin up when a message queue spikes and disappears a second later.

### 4. Agents: Autonomy and Delegation
Autonomous agents sit at the far end of this continuum. They do not merely react to events; they pursue goals, maintain memories, migrate between runtimes and, crucially, delegate sub-tasks to freshly spawned helper agents.

At this stage three new thresholds appear:

- **Self-directed discovery**: An agent must discover, evaluate and negotiate with unknown peers in milliseconds.
- **Delegated authority with rapid revocation**: When an agent hands a helper a subset of its privileges, the grant must be revocable instantly if the helper misbehaves.
- **Cryptographic proof of behaviour**: Trust can no longer hinge on "I control this domain." Regulators and counterpart agents will demand code-integrity attestations and tamper-evident execution logs.

## Challenges in Scaling

As we consider the transition to an Internet of AI Agents, three categories of scaling challenges emerge: addressing & routing, real-time trust propagation, and governanceâ€”each a critical 'crossover point' where legacy web systems begin to fail.

### Known Unknowns

Several critical technical limitations are already visible:

- **Address scarcity**: Despite NAT and IPv6, routing-table inflation and privacy-rotating IPv6 addresses remain bottlenecks
- **DNS update propagation**: End-user visibility can stretch to 24-48 hours in worst cases
- **Trust metadata gaps**: Existing systems lack standards for capability, permission, and integrity data
- **Certificate lifecycle**: CRL/OCSP mechanisms cannot handle real-time revocation at trillion-agent scale

### Unknown Unknowns

- **Latency requirements**: How quickly will agents need sub-second global discovery and authentication?
- **Governance at scale**: How will competing registries federate trust for autonomous software?
- **Privacy under delegation**: What protocols will ensure data minimization across billions of agents?
- **Intent-aware orchestration**: How will schedulers match tasks to agents based on capability and jurisdiction?

## Upgrade or Switch: The Decision Matrix

Given these challenges, we face a fundamental decision: should we upgrade existing web stack or switch to purpose-built registries designed specifically for the Internet of AI agents?

### Upgrade Options

**IPv6 Dual-Stack with Agent-Aware Routing**
- Leverage IPv6's massive address space
- Maintain compatibility with existing DNS infrastructure
- Challenge: Per-agent /128 announcements would inflate BGP tables

**RDAP Metadata Extension**
- Extend existing WHOIS databases with agent-specific fields
- Add capability descriptions and trust metrics
- Standardize query methods for agent attributes

**ACME-Plus Certificates with Instant Revocation**
- Automate certificate issuance with behavioral attestations
- Implement near real-time revocation mechanisms
- Bind certificates to Software Bill of Materials (SBOM)

**Agent-Specific DNS Records and Push Updates**
- Introduce SVCB/HTTPS records with capability hashes
- Implement DNS Push (RFC 8765) for instant propagation
- Maintain backward compatibility

### Switch Options

**Clean-Slate Cryptographic Namespace**
- Develop parallel addressing system for agents
- Implement entirely new resolution protocols
- Purpose-built for millisecond-latency lookups

**Self-Sovereign DID Mesh**
- Implement DID-based systems for agent identity
- Enable direct agent-to-agent verification
- Remove dependency on central registries

**Tiered Hybrid Index**
- Centralized registries for safety-critical agents
- Federated mesh for specialized agents
- Bridge protocols between systems

**Capability-First Addressing**
- Address agents by capabilities rather than static identifiers
- Enable semantic queries like '/translate-en-es'
- Implement cryptographic proof-of-capability tokens

## Comparative Analysis

### Table 3: Design Trade-offs

| Design Dimension | Enhanced-Upgrade Path | Clean-Switch Path | Key Trade-off |
|------------------|----------------------|-------------------|---------------|
| **Identifier Space & Routing** | Dual-stack IPv6 + aggregated signed routing manifests | Hash-derived, location-independent IDs via overlay DHT | Upgrade preserves BGP tooling but risks FIB bloat; switch avoids BGP but needs new resolver adoption |
| **Update / Revocation Latency** | DNS Push + DoH streams; target < 1s global convergence | Gossip-based or CRDT ledger with millisecond propagation | Upgrade easier to deploy; switch offers lower worst-case latency |
| **Identity & Trust** | ACME-plus certs bound to SBOM digests; RDAP capability fields | Self-sovereign DIDs + verifiable credentials | Upgrade piggy-backs on browsers; switch removes central CA reliance |
| **Capability Discovery** | DNS SVCB/HTTPS records with signed capability hashes | Capability-first queries via semantic index with ZK-proofs | DNS benefits from ubiquity but limited expressiveness |
| **Governance Model** | Extend ICANN/SSAC + IETF drafts | Polycentric federation with transparency logs | Upgrade reuses existing channels; switch encourages innovation |
| **Implementation Timeline** | 12-18 months for global rollout | 3-5 years to spec and bootstrap | Time-to-value vs. architectural purity |

## Conclusion

The transition to the Internet of AI agents represents a fundamental shift comparable to the move from dialup to broadband internet. While upgrading existing systems offers backwards compatibility, the unique requirements of autonomous agents suggest that entirely new architectures may ultimately be necessary.

The history of technology transitions suggests that hybrid approaches often emerge during periods of rapid change. We may see centralized registries for critical agents alongside decentralized systems for specialized agents, with bridge protocols enabling interoperability.

Rather than simply extending human-oriented web infrastructure, we have an opportunity to design systems specifically for agent-to-agent interactions, potentially unlocking entirely new categories of applications and services. Whether through upgrade or switchâ€”or most likely, some combination of bothâ€”the architecture for the Internet of AI agents will be a critical foundation for the next era of digital innovation.

---

## Glossary

### Table 2: Key Terms

| Term | Definition | Reference |
|------|------------|-----------|
| **ACME** | Automatic Certificate Management Environment - IETF protocol for automated TLS certificate issuance | Certificate Management |
| **Agent** | Software entity with goal-directed reasoning, memory and ability to initiate actions autonomously | Introduction |
| **Agent Index** | Authoritative system storing cryptographic identifiers, capability descriptors, and trust metadata | Throughout |
| **BGP** | Border Gateway Protocol - Internet's inter-domain routing protocol | Scaling Challenges |
| **DID** | Decentralized Identifier - W3C standard for self-sovereign, location-independent identifiers | Switch Options |
| **DNS Push** | Extension letting resolvers subscribe to real-time updates (RFC 8765) | Upgrade Options |
| **RDAP** | Registration Data Access Protocol - JSON-based successor to WHOIS | Upgrade Options |
| **SVCB/HTTPS** | Modern DNS record types for embedding alternative endpoints and parameters | Upgrade Options |

---

## References

1. DataReportal & Kepios. (2025, April). Digital 2025 April Global Statshot Report.
2. Shen, M., & Yang, Q. (2025). From mind to machine: The rise of manus ai as a fully autonomous digital agent. arXiv preprint arXiv:2505.02024.
3. Gao, Z., & Venkataramani, A. (2019). Measuring update performance and consistency anomalies in managed DNS services. IEEE INFOCOM 2019.
4. DNS Made Easy. (2025). DNS propagation: Why doesn't my domain work?
5. Google. (2025). IPv6 adoption statistics.
6. World Wide Web Consortium. (2025). Decentralized identifiers (DIDs) v1.1.

---

**[View Original Document](https://docs.google.com/document/d/1B4wMM7sFNtWe_utunL1haNSmBrCRfwqCLaV_SG4IXR0/edit?usp=sharing)**

**[Download PDF](https://arxiv.org/abs/[paper-id])** *(ArXiv link to be updated)*

---

*Â© 2025 Project NANDA. This work is licensed under the MIT License.* 

