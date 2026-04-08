import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EVENTS_FILE = path.resolve(__dirname, '../home/18.events.md');
const LUMA_URL = 'https://luma.com/nanda';
const ARCHIVE_HEADING = '## 2025 archive (Jan-Nov)';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeMarkdownCell(value = '') {
  return String(value).replace(/\|/g, '&#124;');
}

function parseIsoParts(isoString) {
  const match = String(isoString).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) {
    throw new Error(`Unable to parse ISO date: ${isoString}`);
  }

  const [, year, month, day, hour, minute] = match;
  return {
    year: Number(year),
    month: Number(month),
    day: Number(day),
    hour: Number(hour),
    minute: Number(minute),
  };
}

function formatTime(hour24, minute) {
  const suffix = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 || 12;
  const minuteText = String(minute).padStart(2, '0');
  return `${hour12}:${minuteText} ${suffix}`;
}

function formatCardDate(isoString) {
  const { month, day } = parseIsoParts(isoString);
  return {
    month: MONTHS[month - 1],
    day: String(day).padStart(2, '0'),
  };
}

function formatCardTime(isoString) {
  const { month, day, hour, minute } = parseIsoParts(isoString);
  return `${MONTHS[month - 1]} ${day} @ ${formatTime(hour, minute)}`;
}

function formatTableDateTime(isoString) {
  const { year, month, day, hour, minute } = parseIsoParts(isoString);
  return `${MONTHS[month - 1]} ${String(day).padStart(2, '0')}, ${year} ${formatTime(hour, minute)}`;
}

function getMode(attendanceMode = '') {
  if (attendanceMode.includes('OnlineEventAttendanceMode')) {
    return { label: 'Virtual', className: 'pill-virtual' };
  }
  if (attendanceMode.includes('MixedEventAttendanceMode')) {
    return { label: 'Hybrid', className: 'pill-hybrid' };
  }
  return { label: 'In person', className: 'pill-live' };
}

function getLocation(event) {
  const location = event.location || {};
  const address = location.address;

  if (event.eventAttendanceMode?.includes('OnlineEventAttendanceMode')) {
    return 'Online';
  }

  if (typeof location.name === 'string' && location.name && location.name !== 'Register to See Address') {
    return location.name;
  }

  if (address && typeof address === 'object') {
    const locality = address.addressLocality;
    const region = address.addressRegion;
    const country = typeof address.addressCountry === 'object' ? address.addressCountry.name : address.addressCountry;
    const parts = [locality, region, country].filter(Boolean);
    if (parts.length > 0) {
      return parts.join(', ');
    }
  }

  if (typeof address === 'string' && address && address !== 'Register to See Address') {
    return address;
  }

  return 'TBA';
}

async function fetchEvents() {
  const response = await fetch(LUMA_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; NANDA Events Sync/1.0)',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Luma page: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const matches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];

  for (const match of matches) {
    try {
      const json = JSON.parse(match[1]);
      const events = Array.isArray(json?.events) ? json.events : Array.isArray(json) ? json.flatMap((item) => item?.events || []) : [];
      if (events.length > 0) {
        return events
          .filter((event) => event?.startDate && event?.name)
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      }
    } catch {
      continue;
    }
  }

  throw new Error('Could not find structured event data on the Luma page.');
}

function renderTable(events) {
  const rows = events
    .map((event) => {
      const mode = getMode(event.eventAttendanceMode);
      const location = getLocation(event);
      const rsvpUrl = event.offers?.[0]?.url || event['@id'] || LUMA_URL;
      return `| ${escapeMarkdownCell(formatTableDateTime(event.startDate))} | ${escapeMarkdownCell(event.name)} | ${escapeMarkdownCell(mode.label)} | ${escapeMarkdownCell(location)} | [RSVP](${rsvpUrl}) |`;
    })
    .join('\n');

  return `## Full schedule (live from Luma)\n<div class="events-table">\n\n| Date & Time | Event | Mode | Node / Location | RSVP |\n| :--- | :--- | :--- | :--- | :--- |\n${rows}\n\n</div>`;
}

function renderPrefix(events) {
  return [
    '# Project NANDA: Global Events',
    '',
    '<div class="events-hero">',
    '  <div class="hero-text">',
    '    <p class="eyebrow">Global Operations Log</p>',
    '    <h2>Coordinating research, build sprints, and summits across MIT, Stanford, London, India, and Dubai</h2>',
    '    <p>Every node runs in local time. Mix of in-person, hybrid, and virtual gatherings so anyone can plug in.</p>',
    '    <div class="hero-actions">',
    '      <a class="btn primary" href="https://luma.com/nanda?k=c" target="_blank" rel="noopener">Register & RSVP</a>',
    '      <a class="btn ghost" href="https://discord.gg/BxnPBEqd88" target="_blank" rel="noopener">Join the build chat</a>',
    '    </div>',
    '    <p class="hero-meta">Auto-synced from the public Luma calendar.</p>',
    '  </div>',
    '  <div class="hero-stats">',
    '    <div class="stat-card">',
    `      <div class="stat-number">${events.length}</div>`,
    '      <div class="stat-label">Upcoming on Luma</div>',
    '    </div>',
    '    <div class="stat-card">',
    '      <div class="stat-number">Global</div>',
    '      <div class="stat-label">Cambridge / SF Bay / London / India / Dubai</div>',
    '    </div>',
    '    <div class="stat-card">',
    '      <div class="stat-number">Open</div>',
    '      <div class="stat-label">Workshops, office hours, and hackathons</div>',
    '    </div>',
    '  </div>',
    '</div>',
    '',
    '---',
    '',
    renderTable(events),
    '',
    '---',
    '',
  ].join('\n');
}

async function main() {
  const [events, currentFile] = await Promise.all([
    fetchEvents(),
    readFile(EVENTS_FILE, 'utf8'),
  ]);

  const archiveIndex = currentFile.indexOf(ARCHIVE_HEADING);
  if (archiveIndex === -1) {
    throw new Error(`Could not find archive heading: ${ARCHIVE_HEADING}`);
  }

  const suffix = currentFile.slice(archiveIndex);
  const nextContent = renderPrefix(events) + suffix;

  if (nextContent !== currentFile) {
    await writeFile(EVENTS_FILE, nextContent, 'utf8');
    console.log(`Updated ${EVENTS_FILE} with ${events.length} events from Luma.`);
  } else {
    console.log('No changes needed.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
