<style>
  /* 1. Load the Font from Google */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  /* 2. Force the Site to use it */
  body, h1, h2, h3, h4, h5, h6, p, span, div, a {
    font-family: "Poppins", sans-serif !important;
  }
</style>

<div align = "left">

# Project NANDA
### Building the Internet of AI Agents

> **The future isn't just AI — it's trillions of AI agents collaborating across the open web securely.**

</div>

<div align = "center">

[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@ProjectNANDA)
[![Discord](https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/BxnPBEqd88)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Follow-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/projectnanda/)
[![arXiv](https://img.shields.io/badge/arXiv-Read_Papers-B31B1B?style=for-the-badge&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.14263)

</div>

---

## What is Project NANDA?

**Project NANDA** is the foundational infrastructure for the **Open Agentic Web**.

We are solving the core challenge of the next decade: <span style="font-weight: 600; font-style: italic;">How can billions of AI agents discover each other, verify capabilities, and coordinate tasks without creating bottlenecks or security vulnerabilities?</span>

NANDA provides the **index**, **protocols**, and **tools** needed to enable a decentralized, protocol-neutral ecosystem.

* **Infrastructure**: Interop links between heterogeneous agent registries (A2A, MCP, HTTPS).
* **Governance**: Frameworks for a responsible, open agentic web.
* **Discovery**: A privacy-preserving registry architecture.



<style>
  .nanda-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin: 50px 0;
    text-align: center;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  @media (max-width: 900px) {
    .nanda-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .nanda-stats-grid {
      grid-template-columns: 1fr;
    }
  }

  .nanda-stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  }

  .nanda-stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    border-color: #000000;
  }

  .stat-number {
    font-size: 3.2rem;
    font-weight: 700;
    color: #000000;
    line-height: 1;
    margin-bottom: 12px;
    letter-spacing: -1.5px;
  }

  .stat-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  .stat-sub {
    font-size: 0.85rem;
    color: #777777;
    line-height: 1.5;
    font-weight: 400;
  }
</style>

<div class="nanda-stats-grid">

  <div class="nanda-stat-item">
    <div class="stat-number">6000+</div>
    <div class="stat-label">Community Members</div>
    <div class="stat-sub">Global Network Participants</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">61</div>
    <div class="stat-label">Collaborations</div>
    <div class="stat-sub">Leading Organizations</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">15+</div>
    <div class="stat-label">Papers</div>
    <div class="stat-sub">Research Publications</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">50+</div>
    <div class="stat-label">Webinars</div>
    <div class="stat-sub">Education Sessions</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">12</div>
    <div class="stat-label">Hackathons</div>
    <div class="stat-sub">Innovation Challenges</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">100+</div>
    <div class="stat-label">Speakers</div>
    <div class="stat-sub">Industry Experts</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">75+</div>
    <div class="stat-label">Projects</div>
    <div class="stat-sub">Active Initiatives</div>
  </div>

  <div class="nanda-stat-item">
    <div class="stat-number">18</div>
    <div class="stat-label">Locations</div>
    <div class="stat-sub">Global Hubs</div>
  </div>

</div>



<div align="center">

## Research & Publications

Our research outlines the architectural and strategic foundations of the Agentic Web.

### Core Papers

| Paper Title | Description | Links |
| :--- | :--- | :--- |
| **Beyond DNS: Unlocking the Internet of AI Agents** | *The foundational paper.* Details the design of the NANDA Index, AgentFacts schema, and Verified Agent Discovery. | [![arXiv](https://img.shields.io/badge/arXiv-2507.14263-B31B1B)](https://arxiv.org/abs/2507.14263) |
| **Upgrade or Switch: The Need for New Registry** | Analyzes why DNS fails for AI agents and weighs incremental upgrades against purpose-built registries. | [![arXiv](https://img.shields.io/badge/arXiv-2506.12003-B31B1B)](https://arxiv.org/abs/2506.12003) |
| **NANDA Adaptive Resolver** | A dynamic microservice architecture for agent name resolution in distributed environments. | [![arXiv](https://img.shields.io/badge/arXiv-2508.03113-B31B1B)](https://arxiv.org/abs/2508.03113) |
| **NANDA in Practice: Enterprise Perspective** | Explores Zero Trust Agentic Access (ZTAA) and governance for enterprise agent ecosystems. | [![arXiv](https://img.shields.io/badge/arXiv-2508.03101-B31B1B)](https://arxiv.org/abs/2508.03101) |
| **Survey of AI Agent Registry Solutions** | Compares NANDA, MCP, A2A, and MS Entra across security, scalability, and maintainability. | [![arXiv](https://img.shields.io/badge/arXiv-2508.03095-B31B1B)](https://arxiv.org/abs/2508.03095) |

**[Join our Writing Group](https://projnanda.github.io/projnanda/#/./home/onboardingwritinggroup)** to contribute to upcoming research.

</div>

---

## Development Roadmap

<style>
  .nanda-roadmap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .nanda-card {
    flex: 1;
    min-width: 300px; /* Stacks vertically on mobile */
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    border-top: 4px solid #ddd; /* Default top border */
    color: #000000;
  }

  /* Hover Animation */
  .nanda-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.15);
  }

  /* Specific Colors for Phases */
  .phase-1:hover { border-top-color: #0A66C2; } /* Blue */
  .phase-2:hover { border-top-color: #B31B1B; } /* Red/Maroon */
  .phase-3:hover { border-top-color: #008000; } /* Green */

  .nanda-card h3 { margin-top: 0; margin-bottom: 10px; }
  .nanda-badge {
    display: inline-block;
    padding: 2px 8px;
    font-size: 0.75rem;
    border-radius: 4px;
    background: #eee;
    color: #555;
    margin-bottom: 10px;
  }
  .badge-active { background: #d1f7c4; color: #006400; font-weight: bold; }
</style>

<div class="nanda-roadmap">

  <div class="nanda-card phase-1">
    <span class="nanda-badge badge-active">CURRENT PHASE</span>
    <h3>Phase 1: Foundations</h3>
    <p><b>Focus: Onboarding, Indexing, & Discovery</b></p>
    <ul>
      <li><b>Index Infrastructure:</b> NANDA Index for agent discovery.</li>
      <li><b>Cross-Platform Bridge:</b> Protocol bridges between A2A, MCP, and HTTPS.</li>
      <li><b>Agent Onboarding:</b> SDKs for easy agent deployment.</li>
    </ul>
  </div>

  <div class="nanda-card phase-2">
    <span class="nanda-badge">UPCOMING</span>
    <h3>Phase 2: Agentic Commerce</h3>
    <p><b>Focus: Knowledge Pricing & Edge AI</b></p>
    <ul>
      <li><b>Knowledge Pricing:</b> Mechanisms for agents to value/exchange info.</li>
      <li><b>Edge AI:</b> Distributed intelligence at network edges.</li>
      <li><b>Economic Protocols:</b> Incentive systems for agent services.</li>
    </ul>
  </div>

  <div class="nanda-card phase-3">
    <span class="nanda-badge">FUTURE VISION</span>
    <h3>Phase 3: Society of Agents</h3>
    <p><b>Focus: Large Population Models & Co-learning</b></p>
    <ul>
      <li><b>LPMs:</b> Collective intelligence from agent populations.</li>
      <li><b>Collaborative Learning:</b> Privacy-preserving co-learning.</li>
      <li><b>Cross-Silo Coordination:</b> Agents working across data boundaries.</li>
    </ul>
  </div>

</div>

---

### Partners
<div align="center" style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
  <img src="assets/SpeakerOne.png" width="80%" alt="Partner 1">
  <img src="assets/SpeakerTwo.png" width="80%" alt="Partner 2">
  <img src="assets/SpeakerThree.png" width="80%" alt="Partner 3">
</div>

---

## Media Coverage

<style>
  .media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }

  .media-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: 1px solid #eee;
    padding: 25px;
    border-radius: 12px;
    text-decoration: none !important;
    color: inherit !important;
    transition: all 0.3s ease;
    height: 100%;
    text-align: left;
  }

  .media-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border-color: #000;
  }

  .media-title {
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
    line-height: 1.4;
    margin-bottom: 15px;
  }

  .media-source {
    font-size: 0.85rem;
    font-weight: 700;
    color: #666;
    letter-spacing: 1px;
    margin-top: auto;
    display: flex;
    align-items: center;
  }
  
  .media-source::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background: #ccc;
    margin-right: 10px;
  }
</style>

<div class="media-grid">
  <a href="https://www.forbes.com/sites/johnwerner/2025/07/08/line-up-and-identify-yourselves-ai-agents-get-organized-with-nanda/" class="media-card">
    <div class="media-title">Line Up and Identify Yourselves — AI Agents Get Organized with NANDA</div>
    <div class="media-source">Forbes</div>
  </a>

  <a href="https://www.forbes.com/sites/johnwerner/2025/05/13/make-a-decentralized-internet-with-ai-nanda-is-coming/" class="media-card">
    <div class="media-title">Make a Decentralized Internet with AI — NANDA Is Coming</div>
    <div class="media-source">Forbes</div>
  </a>

  <a href="https://www.linkedin.com/pulse/nanda-internet-ai-agents-ramesh-raskar-211ve" class="media-card">
    <div class="media-title">NANDA: The Internet of AI Agents</div>
    <div class="media-source">LinkedIn (Ramesh Raskar)</div>
  </a>
</div>

---

## See It In Action

<div align="center">
  <a href="https://www.youtube.com/watch?v=jlcO19XyQ1I">
    <img src="https://i.ytimg.com/vi/jlcO19XyQ1I/hqdefault.jpg" width="45%" alt="Intro to NANDA">
  </a>
  &nbsp;
  <a href="https://www.youtube.com/watch?v=-S51FOnqF0o">
    <img src="https://i.ytimg.com/vi/-S51FOnqF0o/hqdefault.jpg" width="45%" alt="NANDA Demo">
  </a>
  
  <p><em>Click thumbnails to watch demos</em></p>
</div>

---

## Community & Collaboration

We believe the web must evolve from static content to autonomous actors. **Join us in building the next layer of the web.**

### How to Engage

<style>
  .engage-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 30px 0;
  }
  
  .engage-card {
      display: flex;
      flex-direction: column;
      text-decoration: none !important;
      color: inherit !important;
      background: #fff;
      border: 1px solid #eee;
      padding: 20px;
      border-radius: 12px;
      transition: all 0.3s ease;
      text-align: left;
  }
  .engage-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      border-color: #000;
  }
  .engage-title {
      font-weight: 700;
      font-size: 1.1rem;
      color: #000;
      margin-bottom: 5px;
  }
  .engage-text {
      font-size: 0.9rem;
      color: #555;
  }
</style>

<div class="engage-grid">
  <a href="https://discord.gg/BxnPBEqd88" class="engage-card">
    <div class="engage-title">Discord</div>
    <div class="engage-text">For technical discussions and community chat.</div>
  </a>
  
  <a href="https://Lu.Ma/nanda" class="engage-card">
    <div class="engage-title">Events (Lu.ma)</div>
    <div class="engage-text">Join our weekly webinars and summits.</div>
  </a>

  <a href="https://github.com/projnanda" class="engage-card">
    <div class="engage-title">GitHub</div>
    <div class="engage-text">Explore our code and repositories.</div>
  </a>

  <a href="https://docs.google.com/forms/d/e/1FAIpQLScoYg90Ex5IOpBzuSxbnjwjSssJD4rw5U2GpShxACE5t0N4Lw/viewform" class="engage-card">
    <div class="engage-title">FAN Fellowship</div>
    <div class="engage-text">Applications are open.</div>
  </a>

  <a href="https://docs.google.com/forms/d/e/1FAIpQLSemeT9K8WGbggXbFvKlEYj_TQyVrSupxAUonV_W7kO6GOFSIg/viewform" class="engage-card">
    <div class="engage-title">Tresata Fellowship</div>
    <div class="engage-text">Apply for paid roles.</div>
  </a>

  <a href="https://www.linkedin.com/jobs/view/4260498540/" class="engage-card">
    <div class="engage-title">Radius Fellowship</div>
    <div class="engage-text">Apply for paid roles.</div>
  </a>
</div>

---



<div align="center">

**Made with ♥ by the NANDA Community** *Building the Open Agentic Web*

</div>
