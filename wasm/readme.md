# wasm portfolio

Personal portfolio of [Evgeniy Gleba](https://github.com/e-gleba) written in
C++23, rendered with Dear ImGui, compiled to WebAssembly via Emscripten.
Content is ported 1:1 from the Astro site (`../src/data`).

The whole site is one static binary: `portfolio.html` + `portfolio.js` +
`portfolio.wasm`. No JS framework, no bundler, no runtime deps.

## layout

```
cmake/
  cpm-config.cmake        CPM bootstrap (fetches CPM.cmake, extends prefix path)
  cpm/
    sdl3-config.cmake     SDL3 static, video + OpenGL only
    imgui-config.cmake    Dear ImGui core + SDL3/OpenGL3 backend targets
  toolchains/
    emscripten.cmake      zero-setup: bootstraps pinned emsdk into .emsdk/
src/
  main.cpp                SDL3 callback entry points (thin, no logic)
  shell.html              canvas page template for emcc --shell-file
  app/application.*       window + GL context + ImGui lifecycle, frame pump
  data/portfolio.hpp      all site copy as inline constexpr data
  ui/section.hpp          standard module interface (abstract base)
  ui/theme.hpp            constexpr palette lifted from the Astro site
  ui/widgets.*            shared helpers: hyperlink, tag_list, header, paragraph
  ui/<name>_section.*     one file pair per section (about, experience, ...)
  ui/portfolio_ui.*       layout: sidebar nav + content, talks to `section` only
```

Every section implements `ui::section` (`name()` + `render()`); adding a
section = new file pair + one entry in `portfolio_ui.cpp`. Content edits
touch only `data/portfolio.hpp`.

## build

Requires CMake >= 3.31, Ninja, and python3. No manual emsdk install: the
toolchain downloads and activates a pinned emsdk into `.emsdk/` on first
configure (one-time, ~2 GB). An existing `EMSDK` env var is respected and
used as-is (e.g. CI).

```sh
cmake --preset emscripten
cmake --build --preset emscripten-release
```

Output: `build/emscripten/src/Release/portfolio.{html,js,wasm}`.
Delete `.emsdk/` to reset the SDK.

## run locally

```sh
python3 -m http.server 8000 -d build/emscripten/src/Release
# open http://localhost:8000/portfolio.html
```

## deploy

Copy the three output files to any static host (GitHub Pages, nginx, S3).
No server-side code.

## notes

- Stock ImGui font covers Latin-1 only; copy uses ASCII on purpose. For full
  typography load a TTF with wider glyph ranges in `application.cpp`.
- Links open via `SDL_OpenURL` (new browser tab) - no custom JS glue.
