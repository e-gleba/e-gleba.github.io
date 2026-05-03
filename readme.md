# e-gleba.github.io

[![pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://e-gleba.github.io)
[![license](https://img.shields.io/badge/License-AGPL--3.0-blue?logo=opensourceinitiative)](./license.md)
[![html5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![tailwindcss](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![alpinejs](https://img.shields.io/badge/Alpine.js-%238BC0D0.svg?logo=alpine.js&logoColor=black)](https://alpinejs.dev)

> Personal portfolio & digital business card. Multilingual, zero-build, performance-first.

## Overview

Static portfolio site deployed on [GitHub Pages](https://pages.github.com). No build step, no `node_modules`, no webpack. Vanilla HTML with [Alpine.js](https://alpinejs.dev) for reactivity, [Tailwind CSS](https://tailwindcss.com) via CDN, and [AOS](https://michalsnik.github.io/aos/) for scroll animations.

- **Live:** [https://e-gleba.github.io](https://e-gleba.github.io)
- **Stack:** HTML5, Alpine.js, Tailwind CSS, AOS
- **Languages:** English, Russian, Chinese
- **Theme:** Dark / light toggle with persistent preference

## Features

- **Fully Static** — Single `index.html`, loads in < 100 KB first paint
- **Multilingual** — Runtime i18n with 3 languages, no external JSON
- **GitHub API Integration** — Auto-fetches public repos with rate-limit aware fallback
- **Responsive** — Mobile-first, sticky nav, hamburger menu, reduced-motion support
- **Theming** — Dark / light mode with CSS custom properties and Alpine.js persist
- **Accessibility** — Semantic HTML, ARIA labels, focus-visible, prefers-reduced-motion
- **Zero Build** — Clone and serve, or just open the file

## Quick Start

```bash
# Clone
git clone https://github.com/e-gleba/e-gleba.github.io.git
cd e-gleba.github.io

# Serve (any static server works)
python3 -m http.server 8000
# Or: npx serve ., or simply open index.html
```

## Deployment

Pushes to `main` auto-deploy via GitHub Pages. No CI/CD required.

```bash
git push origin main
```

## Project Structure

```
e-gleba.github.io/
├── index.html          # Single-page app (HTML + inline CSS + JS)
├── license.md          # AGPL-3.0 license
└── readme.md           # This file
```

## Contributing

See [Contributing Guidelines](./.github/contributing.md).

## Security

See [Security Policy](./.github/security.md).
