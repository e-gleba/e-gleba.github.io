<div align="center">

# e-gleba.github.io

Personal portfolio — multilingual, dark/light, performance-first.

[![deploy](https://github.com/e-gleba/e-gleba.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/e-gleba/e-gleba.github.io/actions/workflows/deploy.yml)
[![license](https://img.shields.io/badge/License-AGPL--3.0-blue?logo=opensourceinitiative)](./license.md)
[![pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?logo=github)](https://e-gleba.github.io)

**[Live site](https://e-gleba.github.io) · [Contact](mailto:i@egleba.ru) · [GitHub](https://github.com/e-gleba)**

</div>

## Stack

- **Alpine.js** — reactivity, i18n, theme persistence
- **Tailwind CSS v4** — precompiled in CI, zero runtime CSS generation
- **GitHub Actions** — build, deploy, dependency updates (Dependabot + Renovate)

## Develop

```bash
npm install                   # once — tailwind toolchain
npm run build:css             # css/src.css -> css/app.css
python3 -m http.server 8000   # any static server works
```

Push to `main` — CI builds and deploys.

## License

AGPL-3.0 — see [license.md](./license.md)
