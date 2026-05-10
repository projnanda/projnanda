# Scripts

## Luma Events Sync

Automatically syncs events from Luma calendar to the events page.

### Usage

```bash
# Run sync manually
npm run sync:events

# Run tests
npm test
```

### How it works

1. Fetches the Luma calendar page (https://luma.com/nanda)
2. Extracts structured event data from multiple possible sources:
   - `application/ld+json` scripts
   - Next.js `__NEXT_DATA__` scripts
   - Various nested data structures
3. Updates `home/18.events.md` with latest events
4. Preserves the archive section

### Error Handling

The script is designed to be resilient:
- **Graceful degradation**: If Luma data is unavailable, existing events are preserved
- **Multiple patterns**: Tries different scraping patterns to find event data
- **No failures**: Returns success even when data unavailable (logs warning instead)

### Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- ✅ Script execution without errors
- ✅ Events file preservation when Luma unavailable
- ✅ Valid file structure maintenance
- ✅ Date/time formatting
- ✅ Event mode detection (Virtual/Hybrid/In-person)
- ✅ Markdown escaping

### Automation

The sync runs automatically via GitHub Actions:
- **Schedule**: Every hour (`0 * * * *`)
- **Trigger**: Manual via workflow_dispatch
- **Node version**: 24

See `.github/workflows/sync-luma-events.yml` for configuration.
