# Dionisio Romero — Portfolio

A personal portfolio website for **Dionisio Romero** — finance professional and Tulane University B.S. in Finance candidate.

🔗 **Live site:** https://dromertulane.github.io/portfolio/

---

## Overview

A fast, fully responsive single-page portfolio built **from scratch — no framework and no build step** — so it deploys directly to GitHub Pages. The site presents professional experience across finance and aviation operations, selected project highlights, education, skills, languages, and community involvement.

## Tech stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom design system (CSS variables, light/dark theming, fluid responsive layout, print styles)
- **Vanilla JavaScript** — theme toggle, mobile navigation, scroll-reveal animations, scroll-spy
- **GitHub Pages** — static hosting, no build step
- **Google Fonts** — Fraunces (display) + Inter (body)

## Features

- Mobile-first, responsive layout
- Light / dark mode that respects the system setting and remembers the visitor's choice
- Accessibility: semantic landmarks, correct heading order, keyboard-navigable menu, skip link, WCAG-AA contrast, and reduced-motion support
- SEO & social: meta description, Open Graph + Twitter cards, schema.org `Person` structured data, `sitemap.xml`, and `robots.txt`
- Progressive enhancement: all content is visible even with JavaScript disabled
- Custom favicon, Apple touch icon, web app manifest, and a styled 404 page

## Project structure

```text
.
├── index.html         # Single-page site (all sections)
├── styles.css         # Design system and all styling
├── script.js          # Theme toggle, navigation, scroll interactions
├── assets/            # Favicon, app icons, and Open Graph share image
├── 404.html           # Custom not-found page
├── site.webmanifest   # Web app manifest
├── robots.txt         # Crawler directives
├── sitemap.xml        # Sitemap for search engines
└── Resume.md          # Source résumé content
```

## Run locally

No dependencies and no build step. Either open `index.html` directly in a browser, or (recommended, so all paths resolve) serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Hosted on **GitHub Pages** from the `main` branch (root folder). Every push to `main` redeploys the site automatically within a minute or two.

## Credits

Design and content by Dionisio Romero — a custom static site, no templates.
