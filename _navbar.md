<nav class="top-nav">
  <a class="nav-logo" href="/"><img src="assets/Golden + Black Text Logo.svg" alt="NANDA" /></a>
  <a class="nav-link" href="/">Home</a>

  <div class="nav-group">
    <span class="nav-label">Research & Standards</span>
    <div class="nav-dropdown">
      <a href="./home/8.nandapapers">Research Lab</a>
      <a href="./home/3.protocol%20interoperability.md">Protocols</a>
      <a href="./home/13.NANDAIndex.md">NANDA Index</a>
    </div>
  </div>

  <div class="nav-group">
    <span class="nav-label">Build & Community</span>
    <div class="nav-dropdown">
      <a href="./home/5.gettingstarted.md">Build with NANDA</a>
      <a href="./home/9.streams.md">Community</a>
      <a href="./home/18.events.md">Events</a>
      <a href="./home/nic.md">Global Chapters</a>
      <a href="./home/nyc.md">Youth Chapter</a>
      <a href="./home/osd.md">Open Source Developers</a>
    </div>
  </div>

  <div class="nav-group">
    <span class="nav-label">People & Talent</span>
    <div class="nav-dropdown">
      <a href="./home/fellowship.md">FAN Fellowships</a>
      <a href="./home/10.speakers.md">Featured Speakers</a>
      <a href="./home/7.researchcontribution.md">Contribution</a>
    </div>
  </div>

  <div class="nav-group">
    <span class="nav-label">Resources</span>
    <div class="nav-dropdown">
      <a href="./home/6.faq.md">FAQ</a>
      <a href="https://opensource.org/licenses/MIT">MIT License</a>
      <a href="https://github.com/projnanda">GitHub</a>
    </div>
  </div>

  <a class="nav-cta" href="https://docs.google.com/forms/d/e/1FAIpQLScoYg90Ex5IOpBzuSxbnjwjSssJD4rw5U2GpShxACE5t0N4Lw/viewform">Apply for FAN Fellowship -></a>
</nav>

<style>
  .top-nav {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 16px;
    border-bottom: 2px solid #f8db04;
    background: #fff;
    flex-wrap: wrap;
  }
  .top-nav img { height: 26px; vertical-align: middle; }
  .nav-link, .nav-label, .nav-cta, .top-nav a {
    font-weight: 700;
    color: #0c0c0c;
    text-decoration: none;
  }
  .nav-link:hover { color: #c79a00; }
  .nav-group { position: relative; }
  .nav-label { cursor: pointer; padding: 8px 10px; display: inline-block; }
  .nav-label:hover { color: #c79a00; }
  .nav-dropdown {
    display: none;
    position: absolute;
    top: 36px;
    left: 0;
    background: #ffffff;
    border: 1px solid #f8db04;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    min-width: 200px;
    padding: 8px 10px;
    z-index: 20;
  }
  .nav-group:hover .nav-dropdown { display: block; }
  .nav-dropdown a {
    display: block;
    padding: 6px 8px;
    color: #0c0c0c;
    border-radius: 8px;
  }
  .nav-dropdown a:hover {
    background: #fff7cf;
    color: #000;
  }
  .nav-cta {
    margin-left: auto;
    background: linear-gradient(135deg, #ffd700, #f8db04);
    padding: 10px 14px;
    border-radius: 10px;
    border: 2px solid #000;
    box-shadow: 0 6px 14px rgba(248, 219, 4, 0.35);
  }
  .nav-cta:hover { transform: translateY(-1px); color: #000; }
</style>
