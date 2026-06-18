# Sovereign AI Agents

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  .markdown-section {
    padding: 0 !important;
    max-width: 100% !important;
  }
  
  .sovereign-dashboard {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    color: #1e293b;
    max-width: 950px;
    margin: 0 auto;
    padding: 0 24px 48px 24px;
  }
  
  /* Hero Banner */
  .sovereign-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-radius: 24px;
    padding: 56px 32px;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  
  .sovereign-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(216, 221, 229, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .sovereign-hero h1 {
    margin: 0 0 16px 0;
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.02em;
    border: none !important;
  }
  
  .sovereign-hero p {
    margin: 0 auto;
    color: #94a3b8;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 680px;
    font-weight: 400;
  }

  /* Section Layouts */
  .sovereign-section-block {
    margin-bottom: 48px;
  }

  .sovereign-section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
    border: none !important;
  }

  /* List of Points (Capabilities) */
  .sovereign-points-list {
    margin-top: 16px;
    border-top: 1px solid #e2e8f0;
  }
  
  .sovereign-point-item {
    display: flex;
    gap: 24px;
    padding: 24px 0;
    border-bottom: 1px solid #e2e8f0;
    align-items: flex-start;
  }
  
  .sovereign-point-item:last-child {
    border-bottom: none;
  }
  
  .sovereign-point-num {
    font-size: 0.85rem;
    font-weight: 600;
    color: #94a3b8;
    min-width: 32px;
    padding-top: 3px;
    font-family: monospace;
  }
  
  .sovereign-point-content {
    flex-grow: 1;
  }
  
  .sovereign-point-title {
    margin: 0 0 8px 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.3;
  }
  
  .sovereign-point-desc {
    margin: 0;
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.6;
  }

  /* Grid of Initiatives (Small Cards) */
  .sovereign-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .sovereign-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.006);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 350px;
    position: relative;
    overflow: hidden;
  }
  
  .sovereign-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 0 30px rgba(148, 163, 184, 0.15);
    border-color: #cbd5e1;
  }
  
  /* Decorative Globe SVG Pattern inside Card */
  .sovereign-card-globe {
    position: absolute;
    right: -24px;
    top: -24px;
    width: 140px;
    height: 140px;
    opacity: 0.04;
    color: #0f172a;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .sovereign-card:hover .sovereign-card-globe {
    transform: rotate(15deg) scale(1.05);
  }
  
  .sovereign-card-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  }
  
  .sovereign-card-title {
    margin: 0 0 4px 0;
    font-size: 1.4rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.019em;
    line-height: 1.25;
  }
  
  .sovereign-card-subtitle {
    margin: 0;
    color: #64748b;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 1.35;
  }
  
  .sovereign-badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .sovereign-badge {
    background: #f1f5f9;
    color: #334155;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 600;
  }
  
  .sovereign-card-desc {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.55;
    margin: 0 0 18px 0;
    flex-grow: 1;
    z-index: 1;
  }
  
  .sovereign-card-meta {
    border-top: 1px solid #f1f5f9;
    padding-top: 12px;
    margin-bottom: 18px;
    font-size: 0.775rem;
    color: #64748b;
    line-height: 1.4;
    z-index: 1;
  }
  
  .sovereign-card-meta strong {
    color: #334155;
  }

  /* CTAs - Stacked vertically */
  .sovereign-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    z-index: 1;
  }
  
  .sovereign-btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #0f172a;
    color: #ffffff !important;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.825rem;
    transition: all 0.2s ease;
    border: 1px solid #0f172a;
    box-sizing: border-box;
    width: 100%;
  }
  
  .sovereign-btn-primary:hover {
    background: #1e293b;
    border-color: #1e293b;
  }
  
  .sovereign-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #0f172a !important;
    padding: 10px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.825rem;
    transition: all 0.2s ease;
    border: 1px solid #cbd5e1;
    box-sizing: border-box;
    width: 100%;
  }
  
  .sovereign-btn-secondary:hover {
    background: #f8fafc;
    border-color: #94a3b8;
  }
  
  /* Footer Section */
  .sovereign-footer {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 36px;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  }
  
  .sovereign-footer h3 {
    margin: 0 0 8px 0;
    color: #0f172a;
    font-size: 1.35rem;
    font-weight: 700;
    border: none !important;
  }
  
  .sovereign-footer p {
    margin: 0 0 20px 0;
    color: #475569;
    font-size: 0.95rem;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .sovereign-cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="sovereign-dashboard">

<!-- Hero Banner -->
<div class="sovereign-hero">
<h1>Sovereign AI Agents</h1>
<p>Building public infrastructure for private agents—and ensuring the agentic future works for everyone. Personal, decentralized, and community-aligned AI agent systems deployed for public good.</p>
</div>

<!-- Capabilities Section -->
<div class="sovereign-section-block">
<h2 class="sovereign-section-title">Core Capabilities</h2>
<div class="sovereign-points-list">

<div class="sovereign-point-item">
<div class="sovereign-point-num">01</div>
<div class="sovereign-point-content">
<div class="sovereign-point-title">Voice-First Accessibility</div>
<p class="sovereign-point-desc">Enables natural language interactions (voice and text) across regional dialects, ensuring digital inclusivity.</p>
</div>
</div>

<div class="sovereign-point-item">
<div class="sovereign-point-num">02</div>
<div class="sovereign-point-content">
<div class="sovereign-point-title">Privacy-by-Design</div>
<p class="sovereign-point-desc">Local sovereign computation ensures user data, context, and state remain under individual or municipal control.</p>
</div>
</div>

<div class="sovereign-point-item">
<div class="sovereign-point-num">03</div>
<div class="sovereign-point-content">
<div class="sovereign-point-title">Agent-to-Agent Coordination</div>
<p class="sovereign-point-desc">Supports secure peer-to-peer discovery, negotiation, and handoffs between autonomous entities.</p>
</div>
</div>

<div class="sovereign-point-item">
<div class="sovereign-point-num">04</div>
<div class="sovereign-point-content">
<div class="sovereign-point-title">Civic Integration</div>
<p class="sovereign-point-desc">Direct integration with municipal services, crowd safety, public transit, and civic databases.</p>
</div>
</div>

</div>
</div>

<!-- Architecture Section -->
<div class="sovereign-section-block">
<h2 class="sovereign-section-title">Architectural Principles</h2>
<div style="margin-top: 16px; text-align: center;">
<img src="./assets/architectural_principles.png" alt="Architectural Principles" style="width: 100%; max-width: 900px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
</div>
</div>

<!-- Key Initiatives Section -->
<div class="sovereign-section-block">
<h2 class="sovereign-section-title">Key Initiatives</h2>
<div class="sovereign-cards-grid">

<!-- Card 1: KumbhDoot -->
<div class="sovereign-card">
<svg class="sovereign-card-globe" viewBox="0 0 100 100" fill="none" stroke="currentColor">
<circle cx="50" cy="50" r="40" stroke-width="1.5" />
<ellipse cx="50" cy="50" rx="40" ry="15" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="40" ry="28" stroke-width="1" />
<line x1="10" y1="50" x2="90" y2="50" stroke-width="1" />
<ellipse cx="50" cy="50" rx="15" ry="40" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="28" ry="40" stroke-width="1" />
<line x1="50" y1="10" x2="50" y2="90" stroke-width="1" />
</svg>
<div>
<div class="sovereign-card-header">
<div>
<div class="sovereign-card-title">KumbhDoot</div>
<div class="sovereign-card-subtitle">AI Agent for Every Pilgrim</div>
</div>
<div class="sovereign-badge-container">
<span class="sovereign-badge">50M+ Target</span>
<span class="sovereign-badge">Crowd Safety</span>
</div>
</div>
<p class="sovereign-card-desc">
Empowering 50M+ pilgrims at Nashik Kumbh Mela 2027 with a voice-first agent in 20+ languages for crowd safety and real-time navigation.
</p>
</div>
<div>
<div class="sovereign-card-meta">
<strong>Key Contributors:</strong> Kaustubh Dhavse, Dr. Praveen Gedam, Shekhar Singh, Dr. Ramesh Raskar
</div>
<div class="sovereign-actions">
<a href="https://www.kumbhdoot.org/docs/KumbhDoot_Proposal.pdf" target="_blank" class="sovereign-btn-primary">Proposal PDF</a>
<a href="https://www.kumbhdoot.org/" target="_blank" class="sovereign-btn-secondary">Website</a>
</div>
</div>
</div>

<!-- Card 2: DigiDoot -->
<div class="sovereign-card">
<svg class="sovereign-card-globe" viewBox="0 0 100 100" fill="none" stroke="currentColor">
<circle cx="50" cy="50" r="40" stroke-width="1.5" />
<ellipse cx="50" cy="50" rx="40" ry="15" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="40" ry="28" stroke-width="1" />
<line x1="10" y1="50" x2="90" y2="50" stroke-width="1" />
<ellipse cx="50" cy="50" rx="15" ry="40" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="28" ry="40" stroke-width="1" />
<line x1="50" y1="10" x2="50" y2="90" stroke-width="1" />
</svg>
<div>
<div class="sovereign-card-header">
<div>
<div class="sovereign-card-title">DigiDoot</div>
<div class="sovereign-card-subtitle">Personal AI Agent for Every Citizen</div>
</div>
<div class="sovereign-badge-container">
<span class="sovereign-badge">Citizen-Centric</span>
<span class="sovereign-badge">Local Compute</span>
</div>
</div>
<p class="sovereign-card-desc">
A decentralized, voice-first agent framework giving every citizen a private AI agent to access government and commercial services securely.
</p>
</div>
<div>
<div class="sovereign-card-meta">
<strong>Key Contributors:</strong> Dr. Ramesh Raskar, Srikanth Nadhamuni, Nitin Saxena, Kapil Vaswani
</div>
<div class="sovereign-actions">
<a href="https://digidoot.in/Doot_WhitePaper.pdf" target="_blank" class="sovereign-btn-primary">Whitepaper PDF</a>
<a href="https://digidoot.in/" target="_blank" class="sovereign-btn-secondary">Website</a>
</div>
</div>
</div>

<!-- Card 3: Boston/Massachusetts Initiative -->
<div class="sovereign-card">
<svg class="sovereign-card-globe" viewBox="0 0 100 100" fill="none" stroke="currentColor">
<circle cx="50" cy="50" r="40" stroke-width="1.5" />
<ellipse cx="50" cy="50" rx="40" ry="15" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="40" ry="28" stroke-width="1" />
<line x1="10" y1="50" x2="90" y2="50" stroke-width="1" />
<ellipse cx="50" cy="50" rx="15" ry="40" stroke-width="1" stroke-dasharray="2 2" />
<ellipse cx="50" cy="50" rx="28" ry="40" stroke-width="1" />
<line x1="50" y1="10" x2="50" y2="90" stroke-width="1" />
</svg>
<div>
<div class="sovereign-card-header">
<div>
<div class="sovereign-card-title">AI Agents for all MA</div>
<div class="sovereign-card-subtitle">Public Infrastructure for Private Agents</div>
</div>
<div class="sovereign-badge-container">
<span class="sovereign-badge">MCP Servers</span>
<span class="sovereign-badge">Civic Data</span>
</div>
</div>
<p class="sovereign-card-desc">
A state-wide framework building open public MCP servers to let residents' private AI agents query public datasets and city services.
</p>
</div>
<div>
<div class="sovereign-card-meta">
<strong>Key Contributors:</strong> Santiago Garcés (CIO, Boston), Gabriela Torres, Ashish Bhatia, Dr. Ramesh Raskar
</div>
<div class="sovereign-actions">
<a href="https://www.linkedin.com/pulse/what-every-massachusetts-resident-had-own-ai-agent-ramesh-raskar-nwkqc/?trackingId=9iYeTYVVTPus6xvM%2Bz6l8A%3D%3D" target="_blank" class="sovereign-btn-primary">Read Article</a>
<a href="https://github.com/projnanda" target="_blank" class="sovereign-btn-secondary">GitHub</a>
</div>
</div>
</div>

</div>
</div>

<!-- Get Involved Footer -->
<div class="sovereign-footer">
<h3>Get Involved</h3>
<p>Collaborate with the NANDA community, research labs, and civic leaders to build decentralized sovereign agent networks.</p>
<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
<a href="#/home/9.streams" class="sovereign-btn-secondary">Community Channels</a>
<a href="#/home/5.gettingstarted" class="sovereign-btn-primary">Build with NANDA</a>
</div>
</div>

</div>
