/* ===== i18n translations ===== */
const I18N = {
  en: {
    nav: { about:'About', experience:'Experience', projects:'Projects', skills:'Skills', tools:'Tools', contact:'Contact' },
    hero: { status:'Available for freelance & contract', tagline:'Systems engineer. Cross-platform C++. Game engines, reverse engineering, performance-critical systems.', viewProjects:'View Projects' },
    stats: { years:'Years Engineering', standard:'Latest Standard', repos:'Public Repositories', platforms:'Platforms' },
    about: { label:'About', p1:'I build the layer between hardware and gameplay — engine core systems, graphics pipelines, asset streaming, memory management. My code runs on game consoles, mobile devices, and desktop GPUs.', p2:'At Lesta Games, I shipped engine features for Tanks Blitz used by millions. I write C++ that respects the cache, the optimizer, and the person maintaining it three years later.', p3:'I also reverse engineer legacy games to preserve them. My open-source tooling extracts assets, analyzes binaries, and documents undocumented formats. 25+ public repositories spanning game engines, build systems, and RE toolkits.', p4:'I believe great software comes from deep understanding — of the metal, the compiler, and the problem domain. Static analysis over runtime surprises. Generic code over copy-paste. Ship early, profile always.', philosophy:'Philosophy', impact:{ label:'Impact', items:['Engine Core at Lesta Games (Tanks Blitz)','25+ open-source repositories','5-platform deployment pipeline','Published RE tools for game preservation'] } },
    experience: { label:'Experience', items:[
      { year:'2024–Now', title:'C++ Systems Engineer (Freelance)', company:'Self-employed · Remote', desc:'Android NDK cross-compilation pipelines. CMake templates with CI/CD, CPack, GMD. Reverse engineering toolkits for classic games. Consulting on build engineering and cross-platform C++.', tags:['C++23','CMake','Android NDK','Reverse Engineering','SDL3'], link:null },
      { year:'2025–2025', title:'Engine Programmer, Engine Core Team', company:'Lesta Games · Saint Petersburg', desc:'Developed engine features for Tanks Blitz. Asset streaming optimizations, memory allocator improvements, cross-platform shader pipeline. Profiled and optimized hot paths across iOS, Android, Windows, and macOS targets.', tags:['C++','Game Engine','Performance','Cross-platform'], link:null },
      { year:'2020–2025', title:'Open Source Developer', company:'github.com/e-gleba', desc:'Published 25+ repositories: game engines, reverse engineering tools, CMake build systems, and cross-platform libraries. Maintained cxx-skeleton and airstrike3d-tools projects.', tags:['Open Source','CMake','Game Dev','RE'], link:'https://github.com/e-gleba' }
    ]},
    projects: { label:'Projects', view:'View', noDesc:'No description — check the repo for details' },
    skills: { label:'Skills & Expertise', languages:'Languages', systems:'Systems & Tooling', engine:'Engine & Graphics', mobile:'Mobile & Cross-Platform', reverse:'Reverse Engineering', practices:'Practices & Values' },
    tools: { label:'Tools & Resources', subtitle:'The tools I use daily — curated, performance-first, no bloat.' },
    contact: { label:'Contact', text:'Open to freelance, contract work, and interesting collaborations. Reach out via any channel below — I respond fastest on Telegram and Email.' },
    share: { subtitle:'Share this page' },
    footer: 'Built with Alpine.js & Tailwind CSS'
  },
  ru: {
    nav: { about:'О себе', experience:'Опыт', projects:'Проекты', skills:'Навыки', tools:'Инструменты', contact:'Контакты' },
    hero: { status:'Открыт для фриланса и контрактов', tagline:'Системный инженер. Кроссплатформенный C++. Игровые движки, реверс-инжиниринг, высоконагруженные системы.', viewProjects:'Проекты' },
    stats: { years:'Лет в инженерии', standard:'Стандарт C++', repos:'Открытых репозиториев', platforms:'Платформ' },
    about: { label:'О себе', p1:'Я строю слой между железом и геймплеем — системы ядра движка, графические пайплайны, потоковую загрузку ассетов, управление памятью. Мой код работает на консолях, мобильных устройствах и десктопных GPU.', p2:'В Lesta Games я разрабатывал функции движка для Tanks Blitz, которыми пользуются миллионы игроков. Я пишу C++, который уважает кэш, оптимизатор и того, кто будет поддерживать его через три года.', p3:'Я также занимаюсь обратной разработкой старых игр для их сохранения. Мои open-source инструменты извлекают ассеты, анализируют бинарные файлы и документируют недокументированные форматы. 25+ публичных репозиториев — от игровых движков до систем сборки и RE-инструментов.', p4:'Я верю, что отличный софт рождается из глубокого понимания — железа, компилятора и предметной области. Статический анализ вместо сюрпризов в рантайме. Обобщённый код вместо копипасты. Релизить рано, профилировать всегда.', philosophy:'Философия', impact:{ label:'Результаты', items:['Ядро движка в Lesta Games (Tanks Blitz)','25+ open-source репозиториев','Пайплайн сборки на 5 платформ','RE-инструменты для сохранения игр'] } },
    experience: { label:'Опыт', items:[
      { year:'2024–сейчас', title:'C++ Systems Engineer (Фриланс)', company:'Самозанятый · Удалённо', desc:'Кроссплатформенные пайплайны Android NDK. CMake-шаблоны с CI/CD, CPack, GMD. Инструменты реверс-инжиниринга классических игр. Консалтинг по системам сборки и кроссплатформенному C++.', tags:['C++23','CMake','Android NDK','Reverse Engineering','SDL3'], link:null },
      { year:'2025–2025', title:'Engine Programmer, Engine Core Team', company:'Lesta Games · Санкт-Петербург', desc:'Разработка функций движка для Tanks Blitz. Оптимизация потоковой загрузки ассетов, улучшение аллокаторов памяти, кроссплатформенный шейдерный пайплайн. Профилирование и оптимизация hot paths на iOS, Android, Windows и macOS.', tags:['C++','Game Engine','Performance','Cross-platform'], link:null },
      { year:'2020–2025', title:'Open Source Developer', company:'github.com/e-gleba', desc:'Опубликовано 25+ репозиториев: игровые движки, инструменты реверс-инжиниринга, системы сборки CMake и кроссплатформенные библиотеки. Поддержка проектов cxx-skeleton и airstrike3d-tools.', tags:['Open Source','CMake','Game Dev','RE'], link:'https://github.com/e-gleba' }
    ]},
    projects: { label:'Проекты', view:'Открыть', noDesc:'Нет описания — смотрите код в репозитории' },
    skills: { label:'Навыки и экспертиза', languages:'Языки', systems:'Системы и инструменты', engine:'Движок и графика', mobile:'Мобильная разработка', reverse:'Реверс-инжиниринг', practices:'Практики и ценности' },
    tools: { label:'Инструменты', subtitle:'Мой ежедневный стек — curated, performance-first, zero bloat.' },
    contact: { label:'Контакты', text:'Открыт для фриланса, контрактов и интересных проектов. Пишите в любой канал — быстрее всего отвечаю в Telegram и на Email.' },
    share: { subtitle:'Поделиться страницей' },
    footer: 'Собрано на Alpine.js и Tailwind CSS'
  },
  zh: {
    nav: { about:'关于', experience:'经历', projects:'项目', skills:'技能', tools:'工具', contact:'联系' },
    hero: { status:'开放自由职业和合同工作', tagline:'系统工程师。跨平台 C++。游戏引擎，逆向工程，高性能系统。', viewProjects:'查看项目' },
    stats: { years:'年工程经验', standard:'最新标准', repos:'公开仓库', platforms:'平台' },
    about: { label:'关于', p1:'我构建硬件与游戏之间的中间层——引擎核心系统、图形管线、资产流式加载、内存管理。我的代码运行在游戏主机、移动设备和桌面 GPU 上。', p2:'在 Lesta Games，我为 Tanks Blitz 开发了数百万玩家使用的引擎功能。我写的 C++ 尊重缓存、优化器和三年后的维护者。', p3:'我还逆向工程经典游戏以保存它们。我的开源工具可以提取资源、分析二进制文件并记录未公开的格式。25+ 个公开仓库，涵盖游戏引擎、构建系统和逆向工程工具。', p4:'我相信优秀的软件来自深刻的理解——对硬件、编译器和问题领域的理解。静态分析优于运行时意外。泛型代码优于复制粘贴。尽早发布，始终分析。', philosophy:'理念', impact:{ label:'影响', items:['Lesta Games 引擎核心 (Tanks Blitz)','25+ 开源仓库','5 平台部署管线','游戏保存的逆向工具'] } },
    experience: { label:'经历', items:[
      { year:'2024–至今', title:'C++ 系统工程师 (自由职业)', company:'自由职业 · 远程', desc:'Android NDK 跨平台编译管线。CMake 模板 CI/CD、CPack、GMD。经典游戏逆向工程工具。构建工程和跨平台 C++ 咨询。', tags:['C++23','CMake','Android NDK','逆向工程','SDL3'], link:null },
      { year:'2025–2025', title:'引擎程序员，引擎核心团队', company:'Lesta Games · 圣彼得堡', desc:'为 Tanks Blitz 开发引擎功能。资产流式加载优化、内存分配器改进、跨平台着色器管线。在 iOS、Android、Windows 和 macOS 上分析和优化热路径。', tags:['C++','游戏引擎','性能优化','跨平台'], link:null },
      { year:'2020–2025', title:'开源开发者', company:'github.com/e-gleba', desc:'发布 25+ 个仓库：游戏引擎、逆向工程工具、CMake 构建系统和跨平台库。维护 cxx-skeleton 和 airstrike3d-tools 项目。', tags:['开源','CMake','游戏开发','逆向工程'], link:'https://github.com/e-gleba' }
    ]},
    projects: { label:'项目', view:'查看', noDesc:'无描述——查看仓库了解详情' },
    skills: { label:'技能与专长', languages:'语言', systems:'系统与工具', engine:'引擎与图形', mobile:'移动与跨平台', reverse:'逆向工程', practices:'实践与价值观' },
    tools: { label:'工具与资源', subtitle:'我日常使用的工具——精选、性能优先、无冗余。' },
    contact: { label:'联系', text:'开放自由职业、合同工作和有趣的项目。通过以下任何渠道联系——我在 Telegram 和 Email 上回复最快。' },
    share: { subtitle:'分享此页面' },
    footer: '使用 Alpine.js 和 Tailwind CSS 构建'
  }
};
