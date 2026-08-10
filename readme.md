<div align="center">

# e-gleba.github.io

Personal portfolio — multilingual, dark/light, performance-first.

[![deploy](https://github.com/e-gleba/e-gleba.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/e-gleba/e-gleba.github.io/actions/workflows/deploy.yml)
[![license](https://img.shields.io/badge/License-AGPL--3.0-blue?logo=opensourceinitiative)](./license.md)
[![pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://e-gleba.github.io)

**[Live site](https://e-gleba.github.io) · [Contact](mailto:i@egleba.ru) · [GitHub](https://github.com/e-gleba)**

</div>

## Stack

- **Astro 7** — build-time static generation, localized routes, zero client JS framework; self-hosted web fonts via the stable Fonts API (no Google Fonts round-trip, metric-matched fallbacks)
- **Tailwind CSS v4** — `@tailwindcss/vite`, Lightning CSS minification
- **shareon** — share buttons bundled from npm, no CDN dependency
- **GitHub Actions** — build, deploy, dependency updates (Dependabot + Renovate)

## Develop

```bash
npm install        # once — astro + tailwind toolchain
npm run dev        # local dev server
npm run build      # static build -> dist/
npm run preview    # serve the production build locally
```

Push to `main` — CI builds and deploys.

## License

AGPL-3.0 — see [license.md](./license.md)
