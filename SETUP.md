# NANDA Documentation Setup

This documentation site uses [Docsify](https://docsify.js.org/) to create a lightweight, clean documentation experience similar to GitHub's docs.

## Quick Start

1. **Install Docsify CLI**
   ```bash
   npm install -g docsify-cli
   ```

2. **Clone and serve locally**
   ```bash
   git clone <repository-url>
   cd nanda-docs
   docsify serve . --port 3000
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## File Structure

```
.
├── index.html          # Main HTML file with Docsify config
├── README.md           # Home page content
├── _sidebar.md         # Navigation sidebar
├── _navbar.md         # Top navigation bar
├── _coverpage.md      # Landing page cover
├── quickstart.md      # Quick start guide
├── api.md            # API documentation
└── package.json      # Node.js configuration
```

## Customization

### Styling
- Colors and theme are defined in `index.html` within the `<style>` tag
- Current theme uses clean, minimal GitHub-like styling
- Color scheme: `#2c3e50` (dark blue-gray) as primary

### Content
- Main content is in `README.md`
- Additional pages can be added as `.md` files
- Update `_sidebar.md` to add new pages to navigation

### Configuration
- Docsify configuration is in `index.html` within the `window.$docsify` object
- Features enabled: search, auto-scroll, GitHub integration

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source as root directory

### Netlify
1. Connect repository to Netlify
2. Build command: `echo "No build needed"`
3. Publish directory: `.` (root)

### Vercel
1. Import repository to Vercel
2. No build configuration needed
3. Auto-deploys on push

## Features

- ✅ Responsive design
- ✅ Search functionality
- ✅ Syntax highlighting for code blocks
- ✅ GitHub integration
- ✅ Clean, minimal styling
- ✅ Fast loading (no build step)
- ✅ SEO friendly

## Contributing

1. Fork the repository
2. Make changes to `.md` files
3. Test locally with `docsify serve`
4. Submit pull request

For major changes, please open an issue first to discuss.

## License

MIT License - feel free to use this setup for your own documentation projects. 