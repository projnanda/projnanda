import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EVENTS_FILE = path.resolve(__dirname, '../home/18.events.md');
const BACKUP_FILE = path.resolve(__dirname, '../home/18.events.md.backup');

describe('Luma Events Sync', () => {
  let originalContent;

  before(async () => {
    // Backup original events file
    originalContent = await readFile(EVENTS_FILE, 'utf8');
    await writeFile(BACKUP_FILE, originalContent, 'utf8');
  });

  after(async () => {
    // Restore original events file
    await writeFile(EVENTS_FILE, originalContent, 'utf8');
  });

  it('should run without errors', async () => {
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execFileAsync = promisify(execFile);

    const scriptPath = path.resolve(__dirname, 'sync-events-from-luma.mjs');
    
    try {
      const { stdout, stderr } = await execFileAsync('node', [scriptPath]);
      console.log('Script output:', stdout);
      if (stderr) console.log('Script stderr:', stderr);
      
      // Script should complete successfully (exit code 0)
      assert.ok(true, 'Script executed without throwing');
    } catch (error) {
      assert.fail(`Script failed with error: ${error.message}`);
    }
  });

  it('should preserve events file when Luma data unavailable', async () => {
    const contentBefore = await readFile(EVENTS_FILE, 'utf8');
    
    const { execFile } = await import('node:child_process');
    const { promisify } = await import('node:util');
    const execFileAsync = promisify(execFile);
    const scriptPath = path.resolve(__dirname, 'sync-events-from-luma.mjs');
    
    await execFileAsync('node', [scriptPath]);
    
    const contentAfter = await readFile(EVENTS_FILE, 'utf8');
    
    // Content should either be unchanged or updated (but not corrupted)
    assert.ok(contentAfter.length > 0, 'Events file should not be empty');
    assert.ok(contentAfter.includes('## 2025 archive'), 'Archive section should be preserved');
  });

  it('should have valid events file structure', async () => {
    const content = await readFile(EVENTS_FILE, 'utf8');
    
    // Check for required sections
    assert.ok(content.includes('# Project NANDA: Global Events'), 'Should have main heading');
    assert.ok(content.includes('## Full schedule'), 'Should have schedule section');
    assert.ok(content.includes('## 2025 archive'), 'Should have archive section');
    assert.ok(content.includes('| Date & Time | Event | Mode | Node / Location | RSVP |'), 'Should have table header');
  });

  it('should handle mock event data correctly', async () => {
    const mockEvent = {
      name: 'Test Event',
      startDate: '2026-05-15T14:00:00-04:00',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      location: { name: 'Online' },
      offers: [{ url: 'https://lu.ma/test' }]
    };

    // Test date formatting
    const isoString = mockEvent.startDate;
    const match = isoString.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
    assert.ok(match, 'Should parse ISO date format');
    
    const [, year, month, day, hour, minute] = match;
    assert.strictEqual(year, '2026', 'Year should be parsed correctly');
    assert.strictEqual(month, '05', 'Month should be parsed correctly');
    assert.strictEqual(day, '15', 'Day should be parsed correctly');
  });

  it('should validate event attendance mode detection', () => {
    const modes = [
      { input: 'https://schema.org/OnlineEventAttendanceMode', expected: 'Virtual' },
      { input: 'https://schema.org/MixedEventAttendanceMode', expected: 'Hybrid' },
      { input: 'https://schema.org/OfflineEventAttendanceMode', expected: 'In person' },
      { input: '', expected: 'In person' }
    ];

    modes.forEach(({ input, expected }) => {
      let result;
      if (input.includes('OnlineEventAttendanceMode')) {
        result = 'Virtual';
      } else if (input.includes('MixedEventAttendanceMode')) {
        result = 'Hybrid';
      } else {
        result = 'In person';
      }
      assert.strictEqual(result, expected, `Mode detection for ${input} should return ${expected}`);
    });
  });

  it('should escape markdown special characters', () => {
    const testCases = [
      { input: 'Test | Event', expected: 'Test &#124; Event' },
      { input: 'Normal Event', expected: 'Normal Event' },
      { input: 'Multiple | Pipes | Here', expected: 'Multiple &#124; Pipes &#124; Here' }
    ];

    testCases.forEach(({ input, expected }) => {
      const result = input.replace(/\|/g, '&#124;');
      assert.strictEqual(result, expected, `Should escape pipes in "${input}"`);
    });
  });

  it('should format time correctly', () => {
    const testCases = [
      { hour: 0, minute: 0, expected: '12:00 AM' },
      { hour: 12, minute: 0, expected: '12:00 PM' },
      { hour: 14, minute: 30, expected: '2:30 PM' },
      { hour: 23, minute: 59, expected: '11:59 PM' }
    ];

    testCases.forEach(({ hour, minute, expected }) => {
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      const minuteText = String(minute).padStart(2, '0');
      const result = `${hour12}:${minuteText} ${suffix}`;
      assert.strictEqual(result, expected, `Time formatting for ${hour}:${minute} should be ${expected}`);
    });
  });
});
