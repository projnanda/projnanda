<style>
  .workshop-archive { color: #172b4d; }
  .workshop-archive .archive-hero { position: relative; overflow: hidden; min-height: 360px; border-radius: 18px; background: #10233b; color: #fff; margin: 22px 0 42px; display: flex; align-items: end; box-shadow: 0 18px 38px rgba(17, 35, 59, .2); }
  .workshop-archive .archive-hero::before { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(11, 27, 48, .95) 0%, rgba(11, 27, 48, .72) 48%, rgba(11, 27, 48, .2) 100%); z-index: 1; }
  .workshop-archive .archive-hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .workshop-archive .archive-hero-content { position: relative; z-index: 2; padding: 38px; max-width: 720px; }
  .workshop-archive .archive-kicker { display: inline-block; color: #f6c849; font-size: .78rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 12px; }
  .workshop-archive .archive-hero h1 { color: #fff; font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.05; margin: 0 0 14px; border: 0; padding: 0; }
  .workshop-archive .archive-hero p { color: #e8edf3; font-size: 1.05rem; line-height: 1.6; margin: 0; }
  .workshop-archive .archive-meta { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 20px; }
  .workshop-archive .archive-meta span { border: 1px solid rgba(255,255,255,.35); border-radius: 99px; color: #fff; font-size: .82rem; font-weight: 700; padding: 6px 11px; }
  .workshop-archive .archive-heading { margin: 0 0 18px; color: #172b4d; font-size: 1.65rem; border: 0; padding: 0; }
  .workshop-archive .archive-card { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(230px, .9fr); background: #fff; border: 1px solid #d6e0eb; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 25px rgba(15, 35, 60, .08); margin-bottom: 42px; }
  .workshop-archive .archive-card-body { padding: 30px; }
  .workshop-archive .archive-card-label { color: #4d6480; font-size: .76rem; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
  .workshop-archive .archive-card h3 { margin: 10px 0 12px; color: #172b4d; font-size: 1.35rem; line-height: 1.3; border: 0; padding: 0; }
  .workshop-archive .archive-card p { color: #40536a; line-height: 1.65; margin: 0 0 20px; }
  .workshop-archive .archive-button { display: inline-block; background: #1f3a56; border-radius: 8px; color: #fff !important; font-size: .9rem; font-weight: 700; padding: 10px 16px; text-decoration: none; }
  .workshop-archive .archive-button:hover { background: #102b45; text-decoration: none; }
  .workshop-archive .archive-card-image { min-height: 250px; }
  .workshop-archive .archive-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .workshop-archive .gallery { display: grid; grid-template-columns: repeat(12, 1fr); grid-auto-rows: 120px; gap: 14px; }
  .workshop-archive .gallery figure { position: relative; overflow: hidden; border-radius: 12px; margin: 0; background: #dfe7ef; }
  .workshop-archive .gallery figure:nth-child(1) { grid-column: span 5; grid-row: span 2; }
  .workshop-archive .gallery figure:nth-child(2) { grid-column: span 4; grid-row: span 2; }
  .workshop-archive .gallery figure:nth-child(3) { grid-column: span 3; }
  .workshop-archive .gallery figure:nth-child(4) { grid-column: span 3; }
  .workshop-archive .gallery img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s ease; }
  .workshop-archive .gallery figure:hover img { transform: scale(1.035); }
  .workshop-archive .gallery figcaption { position: absolute; left: 0; right: 0; bottom: 0; padding: 18px 12px 10px; color: #fff; font-size: .78rem; font-weight: 700; background: linear-gradient(transparent, rgba(0,0,0,.72)); }
  @media (max-width: 680px) { .workshop-archive .archive-hero { min-height: 420px; } .workshop-archive .archive-hero-content { padding: 26px; } .workshop-archive .archive-card { grid-template-columns: 1fr; } .workshop-archive .archive-card-image { min-height: 210px; order: -1; } .workshop-archive .gallery { grid-template-columns: 1fr 1fr; grid-auto-rows: 150px; } .workshop-archive .gallery figure, .workshop-archive .gallery figure:nth-child(n) { grid-column: span 1; grid-row: span 1; } }
</style>

<div class="workshop-archive">
  <section class="archive-hero">
    <img src="/assets/workshops/ieeetps26/workshop-room.png" alt="Attendees gathered at the IEEE TPS 2026 NANDA workshop">
    <div class="archive-hero-content">
      <span class="archive-kicker">Workshop archive</span>
      <h1>Workshops</h1>
      <p>Conversations, demonstrations, and research for the open Agentic Web.</p>
      <div class="archive-meta"><span>IEEE TPS 2026</span><span>San Jose, CA</span><span>November 6, 2026</span></div>
    </div>
  </section>

  <h2 class="archive-heading">Featured archive</h2>
  <article class="archive-card">
    <div class="archive-card-body">
      <span class="archive-card-label">Completed workshop</span>
      <h3>1st IEEE Workshop on Networked AI Agents in a Decentralized Architecture</h3>
      <p>Co-located with IEEE TPS 2026, the workshop brought together researchers and practitioners to explore agent discovery, trust, privacy, security, interoperability, and evaluation for decentralized agent networks.</p>
      <a class="archive-button" href="https://projectnanda.org/workshops/ieeetps26/" target="_self">Explore the workshop archive &rarr;</a>
    </div>
    <div class="archive-card-image"><img src="/assets/workshops/ieeetps26/panel.png" alt="Panel discussion at the NANDA workshop"></div>
  </article>

  <h2 class="archive-heading">From the workshop</h2>
  <section class="gallery" aria-label="Photos from the IEEE TPS 2026 NANDA workshop">
    <figure><img src="/assets/workshops/ieeetps26/nandaindex-demo.png" alt="NandaIndex presentation at the workshop"><figcaption>NandaIndex demonstration</figcaption></figure>
    <figure><img src="/assets/workshops/ieeetps26/swarm-talk.png" alt="Who Watches the Swarm presentation"><figcaption>Keynote presentation</figcaption></figure>
    <figure><img src="/assets/workshops/ieeetps26/speaker.png" alt="Workshop speaker presenting"><figcaption>Workshop discussion</figcaption></figure>
    <figure><img src="/assets/workshops/ieeetps26/workshop-room.png" alt="Workshop room and attendees"><figcaption>Community gathering</figcaption></figure>
  </section>
</div>
