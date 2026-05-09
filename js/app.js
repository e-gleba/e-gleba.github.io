function app() {
 return {
 theme: Alpine.$persist(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light').as('theme'),
 lang: Alpine.$persist('en').as('language'),
 langOpen: false,
 mobileMenu: false,
 showTop: false,
 repos: [],
 loading: true,
 rateLimited: false,

 langs: [
 { code:'en', flag:'🇬🇧', label:'English' },
 { code:'ru', flag:'🇷🇺', label:'Русский' },
 { code:'zh', flag:'🇨🇳', label:'中文' }
 ],

 translations: I18N,

 techBadges: [
 { label:'C++', icon:'https://cdn.simpleicons.org/cplusplus/FF6B9D', dark:true },
 { label:'Python', icon:'https://cdn.simpleicons.org/python/FF8C42', dark:true },
 { label:'Linux', icon:'https://cdn.simpleicons.org/linux/FF8C42', dark:false },
 { label:'Android NDK', icon:'https://cdn.simpleicons.org/android/FF6B9D', dark:true },
 { label:'iOS Native', icon:'https://cdn.simpleicons.org/apple/FF8C42', dark:false },
 { label:'macOS Native', icon:'https://cdn.simpleicons.org/apple/FF6B9D', dark:false },
 { label:'Windows Native', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#0078D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 12h20"/><path d="M12 3v18"/></svg>', dark:false },
 { label:'CMake', icon:'https://cdn.simpleicons.org/cmake/C792EA', dark:true },
 ],

 projects: [
 {
 name:'cmake_template',
 url:'https://github.com/e-gleba/cmake_template',
 desc:'Production C++ template. Android NDK + Linux→Win cross-compile + GMD. CMake Presets, CPack, Docker.',
 tags:['C++','CMake','Android NDK','Cross-compile'],
 pdf: true
 },
 {
 name:'airstrike3d-tools',
 url:'https://github.com/e-gleba/airstrike3d-tools',
 desc:'Toolkit for AirStrike 3D game analysis and APK asset extraction. Reverse engineering for game preservation.',
 tags:['C','Ghidra','RE'],
 pdf: false
 },
 {
 name:'euengine',
 url:'https://github.com/e-gleba/euengine',
 desc:'3D game engine built on SDL3 with hot reload. Modern C++ architecture.',
 tags:['C++','SDL3','GPU'],
 pdf: false
 }
 ],

 tools: [
 { cat:'editor', label:'Editor', items:[
 { name:'Neovim (LazyVim)', desc:'Primary editor. LazyVim distro — fast, modal, Lua-configured.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4L3 9l5 5"/><path d="M16 4l5 5-5 5"/><path d="M3 9h18"/></svg>', url:'https://www.lazyvim.org' },
 { name:'CLion', desc:'Heavy refactoring, CMake debugging, profiler integration.', icon:'https://cdn.simpleicons.org/jetbrains/C792EA', url:'https://jetbrains.com/clion' },
 { name:'Qt Creator', desc:'Qt projects, visual debugging.', icon:'https://cdn.simpleicons.org/qt/FF8C42', url:'https://qt.io' },
 { name:'Visual Studio', desc:'MSVC toolchain, Windows debugging.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="4 2 20 12 4 22 4 2"/></svg>', url:'https://visualstudio.microsoft.com' }
 ]},
 { cat:'build', label:'Build & CI', items:[
 { name:'CMake 3.31+', desc:'Presets, FetchContent, CPM, CPack.', icon:'https://cdn.simpleicons.org/cmake/FF8C42', url:'https://cmake.org' },
 { name:'Ninja', desc:'Fast parallel builds. Multi-Config.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', url:'https://ninja-build.org' },
 { name:'GitHub Actions', desc:'Multi-platform CI matrix.', icon:'https://cdn.simpleicons.org/githubactions/FF6B9D', url:'https://github.com/features/actions' },
 { name:'TeamCity', desc:'On-prem CI/CD pipelines.', icon:'https://cdn.simpleicons.org/teamcity/C792EA', url:'https://jetbrains.com/teamcity' },
 { name:'Docker', desc:'Reproducible build containers.', icon:'https://cdn.simpleicons.org/docker/FF8C42', url:'https://docker.com' },
 { name:'Ansible', desc:'Infra-as-code, dotfiles, server mgmt.', icon:'https://cdn.simpleicons.org/ansible/FF6B9D', url:'https://ansible.com' }
 ]},
 { cat:'analysis', label:'Debug & Analysis', items:[
 { name:'clang-tidy', desc:'Static analysis, modernize checks.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', url:'https://clang.llvm.org/extra/clang-tidy' },
 { name:'GDB', desc:'GNU Debugger — native Linux debugging.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>', url:'https://sourceware.org/gdb' },
 { name:'LLDB', desc:'LLVM debugger — macOS/iOS.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>', url:'https://lldb.llvm.org' },
 { name:'Tracy', desc:'Real-time frame profiler for games.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', url:'https://github.com/wolfpld/tracy' },
 { name:'Ghidra', desc:'NSA reverse engineering framework.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>', url:'https://ghidra-sre.org' },
 { name:'IDA Pro', desc:'Industry-standard disassembler/debugger.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>', url:'https://hex-rays.com/ida-pro' },
 { name:'cutter-re', desc:'GUI for Rizin — open-source RE.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>', url:'https://cutter.re' }
 ]},
 { cat:'engine', label:'Engine & GFX', items:[
 { name:'SDL3', desc:'Cross-platform windowing, input, GPU.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M6 3v18"/><path d="M18 3v18"/><path d="M2 7h20"/><path d="M2 17h20"/></svg>', url:'https://libsdl.org' },
 { name:'OpenGL / GLSL', desc:'Graphics API and shader language.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', url:'https://opengl.org' },
 { name:'RenderDoc', desc:'Graphics debugger, frame capture.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 3v6h-6"/></svg>', url:'https://renderdoc.org' },
 { name:'Wwise', desc:'AAA audio middleware integration.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', url:'https://audiokinetic.com' }
 ]},
 { cat:'misc', label:'Daily Stack', items:[
 { name:'Fedora', desc:'Primary Linux — bleeding-edge toolchain.', icon:'https://cdn.simpleicons.org/fedora/FF6B9D', url:'https://fedoraproject.org' },
 { name:'ALT Linux', desc:'RPM-based, enterprise stable.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>', url:'https://altlinux.org' },
 { name:'Windows 11', desc:'MSVC builds, game testing.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#0078D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 12h20"/><path d="M12 3v18"/></svg>', url:'https://microsoft.com/windows' },
 { name:'Zsh + Starship', desc:'Modern shell with prompt.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>', url:'https://starship.rs' },
 { name:'Vanilla Terminal', desc:'No bling — alacritty, foot, or Windows Terminal.', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 9 6 6 6-6"/></svg>', url:'#' }
 ]}
 ],

 skillCategories: [
 { key:'languages', color:'#FF6B9D', icon:'code', items:[
 { img:'https://cdn.simpleicons.org/cplusplus/FF6B9D', label:'C++' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>', label:'C17 / C99' },
 { img:'https://cdn.simpleicons.org/python/C792EA', label:'Python 3' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>', label:'Bash / Shell' }
 ]},
 { key:'systems', color:'#FF8C42', icon:'terminal', items:[
 { img:'https://cdn.simpleicons.org/cmake/FF8C42', label:'CMake 3.31+' },
 { img:'https://cdn.simpleicons.org/linux/C792EA', label:'Linux (Fedora, ALT)' },
 { img:'https://cdn.simpleicons.org/git/FF6B9D', label:'Git / GitHub Actions' },
 { img:'https://cdn.simpleicons.org/docker/FF8C42', label:'Docker' },
 { img:'https://cdn.simpleicons.org/ansible/FF6B9D', label:'Ansible / IaC' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>', label:'Ninja / Make' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>', label:'Clang / LLVM / Xcode' }
 ]},
 { key:'engine', color:'#C792EA', icon:'view_in_ar', items:[
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M6 3v18"/><path d="M18 3v18"/><path d="M2 7h20"/><path d="M2 17h20"/></svg>', label:'SDL 3 (GPU, Input, Audio)' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>', label:'OpenGL / GLSL' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', label:'Tracy Profiler' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', label:'Wwise Integration & Mgmt' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9"/><path d="M21 3v6h-6"/></svg>', label:'Hot Reload Systems' }
 ]},
 { key:'mobile', color:'#FF6B9D', icon:'smartphone', items:[
 { img:'https://cdn.simpleicons.org/android/FF6B9D', label:'Android SDK / NDK' },
 { img:'https://cdn.simpleicons.org/apple/FF8C42', label:'iOS / Obj-C++' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>', label:'Java / Kotlin' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M6 3v18"/><path d="M18 3v18"/></svg>', label:'Cross-platform Native' }
 ]},
 { key:'reverse', color:'#FF8C42', icon:'security', items:[
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>', label:'Ghidra / IDA Pro' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>', label:'Memory Analysis' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>', label:'API Hooking / DLL Inject' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', label:'Asset Extraction' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', label:'Binary Patching' }
 ]},
 { key:'practices', color:'#C792EA', icon:'check_circle', items:[
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>', label:'Static Analysis > Runtime' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>', label:'C++ Contracts (P2900)' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M6 3v18"/></svg>', label:'Generic Programming' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', label:'constexpr / consteval' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>', label:'STL / Boost / GSL' },
 { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="#C792EA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', label:'Claude Code / AI-Assisted Eng.' }
 ]}
 ],

 experience: {
 label:'Experience',
 items:[
 { year:'2023–now', title:'C++ Engine Core Engineer', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'Shipping cross-platform game engine internals. CMake build systems, Tracy profiling, SDL3 integration, Wwise audio pipelines. Performance optimization for mobile and desktop.', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
 { year:'2023–2025', title:'Simulation Developer · Team Lead', company:'Military Contract — ZRK Osa Air Defense', desc:'Led a team of 4 developers building a cross-platform simulator in Godot for military training. Managed milestones, reviewed code, coordinated with military stakeholders. Delivered networked multiplayer between radar, command center, and launch units with real-time coordination across heterogeneous platforms.', tags:['Godot','Networking','Multi-platform','Real-time','Team Lead'] },
 { year:'2021–2025', title:'BSU RFCT — Satellite & Aerospace', company:'Belarusian State University', desc:'Developed thermal sensor parsing models for CubeSat-2 satellite. Competed in rocket engineering with Moscow State University — adult league, live launches, drone development.', tags:['C++','Embedded','Hardware','Space'] },
 { year:'2023', title:'Advanced C++ Certification', company:'Leonid Chaika Intensive Program', desc:'Completed intensive C++ & rendering creating crossplatform engines course. Joined Lesta Games. Focus: modern standards, generic programming, performance optimization.', tags:['C++20','Generic Programming','Performance'] },
 { year:'2018–2020', title:'Game Modding & RE · Project Manager', company:'Community Projects', desc:'Reverse-engineered game binaries for full Russian localization of World Conqueror 4. Managed translation workflow, coordinated with voice actors, integrated audio assets. Built monetization strategy via Patreon and community donations. Video review by popular YouTuber — 42K+ views. Published open-source extraction toolkit.', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'Video review →', tags:['Reverse Engineering','Project Management','Audio Integration','Monetization','Community'] }
 ]
 },

 contactLinks: [
 { label:'GitHub', href:'https://github.com/e-gleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>' },
 { label:'X', href:'https://x.com/e_gleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4"/></svg>' },
 { label:'Telegram', href:'https://t.me/egleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.63l-13.5 12.562c-.294.274-.53.602-.688.97L3.711 23.06a.535.535 0 0 0 .736.601l6.487-3.036c.37-.168.693-.41.945-.694L23.72 6.396a2.243 2.243 0 0 0-2.522-3.963Z"/><path d="M15.17 4.102a2.25 2.25 0 0 1 3.062-.106l1.953 1.9a2.25 2.25 0 0 1-.043 3.22l-10.76 10.006c-.061.058-.127.11-.196.152l-0.15.102"/></svg>' },
 { label:'Email', href:'mailto:i@egleba.ru', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' },
 { label:'VK', href:'https://vk.ru/e_gleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.3 20.1c-7.61 0-11.96-5.22-12.14-13.9h3.81c.12 6.38 2.94 9.08 5.17 9.63V6.2h3.59v5.5c2.19.24 3.84-2.03 4.5-5.5h3.59c-.51 2.89-2.63 7.02-5.13 8.24 1.91.92 4.96 3.33 6.16 7.66h-3.95c-.92-2.87-3.22-5.08-6.23-5.39v5.39Z"/></svg>' },
 { label:'Steam', href:'https://steamcommunity.com/id/egleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01"/><path d="M12 8v8"/><path d="M16 12h.01"/></svg>' },
 { label:'LinkedIn', href:'https://linkedin.com/in/egleba', svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>' }
 ],

 t(key) { return key.split('.').reduce((o,k) => o?.[k], this.translations[this.lang]) ?? key; },

 toggleTheme() {
 const btn = document.querySelector('.theme-toggle-btn');
 if (btn) {
 const rect = btn.getBoundingClientRect();
 const ripple = document.createElement('div');
 ripple.className = 'theme-ripple';
 ripple.style.cssText = `position:fixed;top:${rect.top+rect.height/2}px;left:${rect.left+rect.width/2}px;width:10px;height:10px;border-radius:50%;background:rgba(255,107,157,0.3);pointer-events:none;z-index:99999;animation:themeRipple 0.6s ease-out forwards;`;
 document.body.appendChild(ripple);
 setTimeout(() => ripple.remove(), 700);
 }
 document.body.classList.add('theme-transitioning');
 this.theme = this.theme === 'dark' ? 'light' : 'dark';
 this.langOpen = false;
 this.mobileMenu = false;
 setTimeout(() => document.body.classList.remove('theme-transitioning'), 500);
 },

 isHot(repo) {
 return !repo.fork && !repo.archived && repo.stargazers_count >= 5;
 },

 async fetchGitHubData() {
 const ctrl = new AbortController();
 const tid = setTimeout(() => ctrl.abort(), 5000);
 try {
 const res = await fetch('https://api.github.com/users/e-gleba/repos?sort=stars&direction=desc&per_page=30', {
 headers: { Accept:'application/vnd.github.v3+json' }, signal: ctrl.signal
 });
 if (res.status === 403 || res.status === 429) {
 this.rateLimited = true;
 this.repos = [];
 } else if (res.ok) {
 const data = await res.json();
 if (!Array.isArray(data)) { this.repos = []; return; }
 this.repos = data
 .filter(r => !r.fork)
 .sort((a, b) => (b.stargazers_count + b.forks_count * 2) - (a.stargazers_count + a.forks_count * 2))
 .slice(0, 6);
 const rl = res.headers.get('x-ratelimit-remaining');
 if (rl !== null && parseInt(rl, 10) <= 5) this.rateLimited = true;
 } else {
 this.repos = [];
 }
 } catch(e) {
 console.warn('github api unavailable:', e.message);
 this.repos = [];
 } finally {
 clearTimeout(tid);
 this.loading = false;
 }
 },

 observeReveal() {
 const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.classList.add('visible');
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

 document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
 },

 init() {
 this.fetchGitHubData();
 window.addEventListener('scroll', () => { this.showTop = window.scrollY > 400; }, { passive: true });
 this.$nextTick(() => this.observeReveal());
 }
 };
}
