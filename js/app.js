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

    fallbackRepos: [
      { name:'airstrike3d-tools', color:'#FF6B9D', stars:17, hot:true, desc:'Toolkit for AirStrike 3D game analysis and APK asset extraction. Reverse engineering for game preservation.', tags:['C','Ghidra','RE'], url:'https://github.com/e-gleba/airstrike3d-tools' },
      { name:'cxx-skeleton', color:'#FF8C42', stars:7, hot:true, desc:'Production-ready C++ project template. Modern standards, cross-platform builds, integrated tooling.', tags:['C++','CMake','Docker'], url:'https://github.com/e-gleba/cxx-skeleton' },
      { name:'euengine', color:'#C792EA', stars:2, hot:false, desc:'3D game engine built on SDL3-GPU with hot reload. Modern C++ architecture.', tags:['C++','SDL3','GPU'], url:'https://github.com/e-gleba/euengine' }
    ],

    skillCategories: [
      { key:'languages', color:'#FF6B9D', icon:'< >', items:[
        { img:'https://cdn.simpleicons.org/cplusplus/FF6B9D', label:'C++' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 19c-1.5 1.5-3.5 2-5.5 2-4.5 0-8-3.5-8-8s3.5-8 8-8c2 0 4 1 5.5 2.5"/></svg>', label:'C17 / C99' },
        { img:'https://cdn.simpleicons.org/python/C792EA', label:'Python 3' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>', label:'Bash / Shell' }
      ]},
      { key:'systems', color:'#FF8C42', icon:'$', items:[
        { img:'https://cdn.simpleicons.org/cmake/FF8C42', label:'CMake 3.16+' },
        { img:'https://cdn.simpleicons.org/linux/C792EA', label:'Linux (Fedora, Alt)' },
        { img:'https://cdn.simpleicons.org/git/FF6B9D', label:'Git / GitHub Actions' },
        { img:'https://cdn.simpleicons.org/docker/FF8C42', label:'Docker' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>', label:'Ninja / Make' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>', label:'Clang / LLVM / Xcode' }
      ]},
      { key:'engine', color:'#C792EA', icon:'◆', items:[
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="4"/><circle cx="12" cy="12" r="2"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>', label:'SDL 3 (GPU, Input, Audio)' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"/></svg>', label:'OpenGL / GLSL' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>', label:'Tracy Profiler' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', label:'Wwise Integration & Mgmt' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>', label:'Hot Reload Systems' }
      ]},
      { key:'mobile', color:'#FF6B9D', icon:'📱', items:[
        { img:'https://cdn.simpleicons.org/android/FF6B9D', label:'Android SDK / NDK' },
        { img:'https://cdn.simpleicons.org/apple/FF8C42', label:'iOS / Obj-C++' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>', label:'Java / Kotlin' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', label:'Cross-platform Native' }
      ]},
      { key:'reverse', color:'#FF8C42', icon:'⌘', items:[
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label:'Ghidra / IDA' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>', label:'Memory Analysis' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>', label:'API Hooking / DLL Inject' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>', label:'Asset Extraction' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', label:'Binary Patching' }
      ]},
      { key:'practices', color:'#C792EA', icon:'✓', items:[
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>', label:'Static Analysis > Runtime' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>', label:'C++ Contracts (P2900)' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>', label:'Generic Programming (Stepanov)' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', label:'constexpr / consteval / [[nodiscard]]' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>', label:'STL / Boost / GSL' },
        { svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9.5 8.5 3 9.5 8 13.5 6.5 20 12 16.5 17.5 20 16 13.5 21 9.5 14.5 8.5 12 2z"/></svg>', label:'Claude Code / AI-Assisted Eng.' }
      ]}
    ],

    contactLinks: [
      { label:'GitHub',   href:'https://github.com/e-gleba',               svg:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
      { label:'X',        href:'https://x.com/e_gleba',                    svg:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
      { label:'Telegram', href:'https://t.me/egleba',                       svg:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' },
      { label:'Email',    href:'mailto:i@egleba.ru',                        svg:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' },
      { label:'VK',       href:'https://vk.ru/e_gleba',                    svg:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/></svg>' },
      { label:'Steam',    href:'https://steamcommunity.com/id/egleba',      svg:'<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>' }
    ],

    t(key) { return key.split('.').reduce((o,k) => o?.[k], this.translations[this.lang]) ?? key; },

    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.langOpen = false;
      this.mobileMenu = false;
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

    init() {
      this.fetchGitHubData();
      window.addEventListener('scroll', () => { this.showTop = window.scrollY > 400; }, { passive: true });
    }
  };
}
