# e-gleba.github.io

[![pages](https://img.shields.io/badge/github%20pages-live-brightgreen?logo=github)](https://e-gleba.github.io)
[![license](https://img.shields.io/badge/license-MIT-blue?logo=opensourceinitiative)](./license.md)
[![html5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![tailwindcss](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![alpine.js](https://img.shields.io/badge/alpine.js-%238BC0D0.svg?logo=alpine.js&logoColor=black)](https://alpinejs.dev)

> personal portfolio & digital business card. multilingual, zero-build, performance-first.

## overview

static portfolio site deployed on github pages. no build step, no node_modules, no webpack. vanilla html with alpine.js for reactivity, tailwind css via cdn, and aos for scroll animations.

- **live:** [https://e-gleba.github.io](https://e-gleba.github.io)
- **stack:** html5, alpine.js, tailwind css, aos
- **languages:** english, russian, chinese
- **theme:** dark / light toggle with persistent preference

## features

- **fully static** — single `index.html`, loads in < 100 kb first paint
- **multilingual** — runtime i18n with 3 languages, no external json
- **github api integration** — auto-fetches public repos with rate-limit aware fallback
- **responsive** — mobile-first, sticky nav, hamburger menu, reduced-motion support
- **theming** — dark / light mode with css custom properties and alpine.js persist
- **accessibility** — semantic html, aria labels, focus-visible, prefers-reduced-motion
- **zero build** — clone and serve, or just open the file

## quick start

```bash
# clone
git clone https://github.com/e-gleba/e-gleba.github.io.git
cd e-gleba.github.io

# serve (any static server works)
python3 -m http.server 8000
# or: npx serve ., or simply open index.html
```

## deployment

pushes to `main` auto-deploy via github pages. no ci/cd required.

```bash
git push origin main
```

## project structure

```
e-gleba.github.io/
├── index.html          # single-page app (html + inline css + js)
├── license.md          # agpl-3.0 license
└── readme.md           # this file
```

## contributing

see [contributing.md](./.github/contributing.md).

## security

see [security.md](./.github/security.md).
