const I18N = {
  en: {
    nav: { about:'About', experience:'Experience', projects:'Projects', skills:'Skills', tools:'Tools', contact:'Contact' },
    hero: { status:'Open to open source & consulting', tagline:'C++ Engineer · Reverse Engineer · Investigator', viewProjects:'Projects' },
    stats: { years:'Years in Production', repos:'Open Source', platforms:'Platforms' },
    about: {
      label:'About',
      p1:'Systems engineer with 3+ years shipping cross-platform C++ in production game engines. Specialized in performance-critical systems: graphics pipelines, asset streaming, memory management.',
      p2:'At Lesta Games (Engine Core, Tanks Blitz), I work on engine systems that power 10M+ active players. My code runs on Linux servers, Android/iOS devices, and Windows clients — all from a single CMake build tree.',
      p3:'Reverse engineering and game preservation are my long-term passions. Published open-source tooling for asset extraction and binary analysis. 25+ public repositories spanning systems programming, tooling, and experimental engines.',
      philosophy:'Philosophy',
      p4:'Static analysis over runtime debugging. Compile-time safety over runtime checks. Simple, boring, reliable code over clever abstractions. Every line must justify its existence in production.',
      impact:{ label:'Impact', items:['Engine systems serving 10M+ players','Cross-platform: Linux/Win/macOS/iOS/Android','Open-source tooling with active community','Sub-millisecond frame time guarantees'] }
    },
    experience: {
      label:'Experience',
      items:[
        { year:'2023–now', title:'C++ Engine Core Engineer', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'Shipping cross-platform game engine internals. CMake build systems, Tracy profiling, SDL3 integration, Wwise audio pipelines. Performance optimization for mobile and desktop.', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'Simulation Developer · Team Lead', company:'Military Contract — ZRK Osa Air Defense', desc:'Led a student team building a cross-platform simulator in Godot for military training. Managed 4 developers, set milestones, reviewed code, coordinated with military stakeholders. Delivered networked multiplayer between radar, command center, and launch units with real-time coordination across heterogeneous platforms.', tags:['Godot','Networking','Multi-platform','Real-time','Team Lead'] },
        { year:'2021–2025', title:'BSU RFCT — Satellite & Aerospace', company:'Belarusian State University', desc:'Developed thermal sensor parsing models for CubeSat-2 satellite. Competed in rocket engineering with Moscow State University — adult league, live launches, drone development.', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'Advanced C++ Certification', company:'Leonid Chaika Intensive Program', desc:'Completed intensive C++ & rendering creating crossplatform engines course. Joined Lesta Games. Focus: modern standards, generic programming, performance optimization.', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'Game Modding & RE · Project Manager', company:'Community Projects', desc:'Reverse-engineered game binaries for full Russian localization of World Conqueror 4. Managed translation workflow, coordinated with voice actors, integrated audio assets. Built monetization strategy via Patreon and community donations. Video review by popular YouTuber — 42K+ views. Published open-source extraction toolkit.', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'Video review →', tags:['Reverse Engineering','Project Management','Audio Integration','Monetization','Community'] }
      ]
    },
    projects: { label:'Projects', view:'View', noDesc:'No description' },
    skills: {
      label:'Skills',
      languages:'Languages', systems:'Systems & Tooling', engine:'Engine & Graphics',
      mobile:'Mobile & Native', reverse:'Reverse Engineering', practices:'Practices'
    },
    tools: { label:'Tools & Resources', subtitle:'Curated stack — performance-first, no bloat.' },
    contact: { label:'Get in Touch', text:'Open to consulting & collaboration on C++ systems, game engine architecture, and cross-platform tooling.' },
    share: { subtitle:'Share this page' },
    footer:'Built with Alpine.js, Tailwind, and obsessive attention to detail'
  },
  ru: {
    nav: { about:'Обо мне', experience:'Опыт', projects:'Проекты', skills:'Навыки', tools:'Инструменты', contact:'Контакты' },
    hero: { status:'Открыт к open source и консалтингу', tagline:'C++ инженер · Реверс-инженер · Исследователь', viewProjects:'Проекты' },
    stats: { years:'лет в продакшене', repos:'open source', platforms:'платформ' },
    about: {
      label:'Обо мне',
      p1:'Системный инженер с 3+ годами разработки кросс-платформенного C++ в игровых движках. Специализация — системы, критичные к производительности: графические пайплайны, стриминг ассетов, управление памятью.',
      p2:'В Lesta Games (Engine Core, Tanks Blitz) работаю над движковыми системами для 10M+ активных игроков. Код работает на Linux-серверах, Android/iOS устройствах и Windows-клиентах — всё из единого дерева сборки CMake.',
      p3:'Реверс-инжиниринг и сохранение игр — давние увлечения. Опубликовал open-source инструменты для извлечения ассетов и бинарного анализа. 25+ публичных репозиториев: системное программирование, тулинг, экспериментальные движки.',
      philosophy:'Философия',
      p4:'Статический анализ вместо отладки в рантайме. Безопасность на этапе компиляции вместо рантайм-проверок. Простой, скучный, надёжный код вместо умных абстракций. Каждая строка должна оправдывать своё существование в продакшене.',
      impact:{ label:'Результаты', items:['Движковые системы для 10M+ игроков','Кросс-платформа: Linux/Win/macOS/iOS/Android','Open-source инструменты с активным сообществом','Гарантии frame time < 1 мс'] }
    },
    experience: {
      label:'Опыт',
      items:[
        { year:'2023–сейчас', title:'C++ Engine Core Engineer', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'Разработка внутренних систем игрового движка. Системы сборки CMake, профилирование Tracy, интеграция SDL3, аудио-пайплайны Wwise. Оптимизация производительности для мобильных и десктопных платформ.', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'Разработчик симулятора · Team Lead', company:'Военный контракт — ЗРК Оса', desc:'Руководил студенческой командой, создававшей кросс-платформенный симулятор на Godot для военной подготовки. Управлял 4 разработчиками, ставил вехи, проверял код, координировал с военными. Реализовал сетевой мультиплеер между радаром, командным центром и пусковыми установками.', tags:['Godot','Networking','Multi-platform','Real-time','Team Lead'] },
        { year:'2021–2025', title:'BSU RFCT — Спутник и аэрокосмос', company:'Белорусский государственный университет', desc:'Разрабатывал модели парсинга термальных сенсоров для спутника CubeSat-2. Участвовал в ракетных соревнованиях с МГУ — взрослая лига, живые запуски, разработка дронов.', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'Продвинутая сертификация C++', company:'Интенсив Леонида Чайки', desc:'Закончил интенсивный курс по C++ и рендерингу с созданием кросс-платформенных движков. Присоединился к Lesta Games. Фокус: современные стандарты, обобщённое программирование, оптимизация.', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'Моддинг и RE · Project Manager', company:'Community Projects', desc:'Реверс-инжиниринг бинарных файлов игры для полной русской локализации World Conqueror 4. Управлял процессом перевода, координировал работу актёров озвучки, интегрировал аудио-ассеты. Монетизация через Patreon. Видео-обзор от популярного ютубера — 42K+ просмотров.', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'Видео-обзор →', tags:['Reverse Engineering','Project Management','Audio Integration','Monetization','Community'] }
      ]
    },
    projects: { label:'Проекты', view:'Смотреть', noDesc:'Нет описания' },
    skills: {
      label:'Навыки',
      languages:'Языки', systems:'Системы и инструменты', engine:'Движок и графика',
      mobile:'Мобильная и нативная разработка', reverse:'Реверс-инжиниринг', practices:'Практики'
    },
    tools: { label:'Инструменты', subtitle:'Отборный стек — производительность прежде всего, без раздутия.' },
    contact: { label:'Контакты', text:'Открыт к консалтингу и коллаборации в области C++ систем, архитектуры игровых движков и кросс-платформенного тулинга.' },
    share: { subtitle:'Поделиться страницей' },
    footer:'Сделано на Alpine.js, Tailwind и навязчивом внимании к деталям'
  },
  zh: {
    nav: { about:'关于', experience:'经验', projects:'项目', skills:'技能', tools:'工具', contact:'联系' },
    hero: { status:'开放开源与咨询', tagline:'C++工程师 · 逆向工程师 · 研究员', viewProjects:'项目' },
    stats: { years:'年生产经验', repos:'开源项目', platforms:'平台' },
    about: {
      label:'关于',
      p1:'拥有3年以上跨平台C++游戏引擎生产经验的系统工程师。专注于性能关键系统：图形管线、资源流送、内存管理。',
      p2:'在Lesta Games（Engine Core，Tanks Blitz），我致力于为1000万+活跃玩家提供动力的引擎系统。我的代码运行在Linux服务器、Android/iOS设备和Windows客户端上——全部来自单个CMake构建树。',
      p3:'逆向工程和游戏保护是我的长期热情。发布了用于资源提取和二进制分析的开源工具。25+个公共仓库，涵盖系统编程、工具化和实验性引擎。',
      philosophy:'理念',
      p4:'静态分析优于运行时调试。编译时安全优于运行时检查。简单、无聊、可靠的代码优于聪明的抽象。每一行代码都必须在生产环境中证明其存在的合理性。',
      impact:{ label:'影响', items:['服务1000万+玩家的引擎系统','跨平台：Linux/Win/macOS/iOS/Android','具有活跃社区的开源工具','亚毫秒帧时间保证'] }
    },
    experience: {
      label:'经验',
      items:[
        { year:'2023–现在', title:'C++ Engine Core Engineer', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'交付跨平台游戏引擎内部系统。CMake构建系统、Tracy性能分析、SDL3集成、Wwise音频管线。移动端和桌面端的性能优化。', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'模拟开发者 · Team Lead', company:'军事合同 — ZRK Osa防空系统', desc:'领导学生团队使用Godot构建跨平台军事训练模拟器。管理4名开发者，设定里程碑，审查代码，与军事利益相关者协调。在雷达、指挥中心和发射单元之间实现网络多人游戏。', tags:['Godot','Networking','Multi-platform','Real-time','Team Lead'] },
        { year:'2021–2025', title:'BSU RFCT — 卫星与航空航天', company:'白俄罗斯国立大学', desc:'为CubeSat-2卫星开发热传感器解析模型。与莫斯科国立大学在火箭工程领域竞赛——成人联赛、现场发射、无人机开发。', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'高级C++认证', company:'Leonid Chaika强化课程', desc:'完成C++和渲染创建跨平台引擎强化课程。加入Lesta Games。专注：现代标准、泛型编程、性能优化。', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'游戏模组与逆向 · 项目经理', company:'社区项目', desc:'逆向工程游戏二进制文件，完成World Conqueror 4的完整俄语本地化。管理翻译工作流，协调配音演员，集成音频资源。通过Patreon和社区捐赠建立盈利策略。热门YouTuber视频评测 — 42K+观看。', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'视频评测 →', tags:['Reverse Engineering','Project Management','Audio Integration','Monetization','Community'] }
      ]
    },
    projects: { label:'项目', view:'查看', noDesc:'无描述' },
    skills: {
      label:'技能',
      languages:'语言', systems:'系统与工具', engine:'引擎与图形',
      mobile:'移动与原生', reverse:'逆向工程', practices:'实践'
    },
    tools: { label:'工具与资源', subtitle:'精选工具栈 — 性能优先，无冗余。' },
    contact: { label:'联系', text:'开放C++系统、游戏引擎架构和跨平台工具方面的咨询与合作。' },
    share: { subtitle:'分享此页面' },
    footer:'使用 Alpine.js、Tailwind 和对细节的执着关注构建'
  }
};