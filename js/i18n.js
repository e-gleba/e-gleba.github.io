const I18N = {
  en: {
    nav: { about:'About', experience:'Experience', projects:'Projects', skills:'Skills', tools:'Tools', contact:'Contact' },
    hero: { status:'Lesta Games · Engine Core', tagline:'C++ Engineer · Reverse Engineer · Investigator', viewProjects:'View Projects' },
    stats: { years:'Years Production', standard:'C++ Standard', repos:'Open Source', platforms:'Platforms' },
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
        { year:'2023 – now', title:'C++ Software Engineer', company:'Lesta Games, Minsk — Engine Core', desc:'Production game engine development. Cross-platform systems (Linux, Windows, macOS, iOS, Android). Performance optimization, asset streaming, memory management.', tags:['C++20','CMake','SDL3','Android NDK','iOS','OpenGL'] },
        { year:'2022', title:'Military Simulator Developer', company:'Ministry of Defense — ZRK Osa simulator', desc:'Real-time military training simulator. C++ systems programming, hardware integration, performance-critical code for simulation accuracy.', tags:['C++','Systems','Real-time','Hardware'] },
        { year:'2021 – 2022', title:'Embedded Software Engineer', company:'BSU — CubeSat-2', desc:'Satellite onboard software. C for embedded systems, radio communication protocols, power management. Launched and operational.', tags:['C','Embedded','Satellite','Radio'] },
        { year:'2020', title:'C++ Certification', company:'BSU — C++ Advanced Programming', desc:'Advanced C++ programming certification. Template metaprogramming, STL internals, optimization techniques.', tags:['C++','Templates','STL','Optimization'] },
        { year:'2019', title:'Mod Developer', company:'World Conqueror 4 — 42K views', desc:'Game modding and reverse engineering. Memory patching, asset modification, gameplay systems. 42K+ views on YouTube review.', tags:['RE','Modding','Memory','Community'], link:'https://www.youtube.com/watch?v=OaA4l8S8A7w', linkText:'Watch →' }
      ]
    },
    projects: { label:'Projects', view:'View →', noDesc:'No description' },
    skills: {
      label:'Skills',
      languages:'Languages', systems:'Systems & Tooling', engine:'Engine & Graphics',
      mobile:'Mobile & Native', reverse:'Reverse Engineering', practices:'Practices'
    },
    tools: { label:'Tools & Resources', subtitle:'Curated stack — performance-first, no bloat.' },
    contact: { label:'Get in Touch', text:'Open for consulting & collaboration on C++ systems, game engine architecture, and cross-platform tooling.' },
    share: { subtitle:'Share this page' },
    footer:'Built with Alpine.js, Tailwind, and obsessive attention to detail'
  },
  ru: {
    nav: { about:'Обо мне', experience:'Опыт', projects:'Проекты', skills:'Навыки', tools:'Инструменты', contact:'Контакты' },
    hero: { status:'Lesta Games · Engine Core', tagline:'C++ инженер · Реверс-инженер · Исследователь', viewProjects:'Проекты' },
    stats: { years:'лет в продакшене', standard:'стандарт C++', repos:'open source', platforms:'платформ' },
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
        { year:'2023 – наст.', title:'C++ Software Engineer', company:'Lesta Games, Минск — Engine Core', desc:'Разработка игрового движка в продакшене. Кросс-платформенные системы (Linux, Windows, macOS, iOS, Android). Оптимизация производительности, стриминг ассетов, управление памятью.', tags:['C++20','CMake','SDL3','Android NDK','iOS','OpenGL'] },
        { year:'2022', title:'Разработчик военного симулятора', company:'Минобороны — симулятор ЗРК Оса', desc:'Симулятор военной подготовки в реальном времени. Системное программирование на C++, интеграция оборудования, код с критичной производительностью.', tags:['C++','Systems','Real-time','Hardware'] },
        { year:'2021 – 2022', title:'Инженер-программист встроенных систем', company:'БГУ — CubeSat-2', desc:'Бортовое ПО спутника. C для embedded, протоколы радиосвязи, управление питанием. Запущен и работает.', tags:['C','Embedded','Satellite','Radio'] },
        { year:'2020', title:'Сертификация C++', company:'БГУ — Продвинутое программирование на C++', desc:'Сертификация по продвинутому C++. Метапрограммирование шаблонов, внутренности STL, техники оптимизации.', tags:['C++','Templates','STL','Optimization'] },
        { year:'2019', title:'Разработчик модов', company:'World Conqueror 4 — 42K просмотров', desc:'Моддинг и реверс-инжиниринг. Патчинг памяти, модификация ассетов, геймплейные системы. Обзор на YouTube набрал 42K+ просмотров.', tags:['RE','Modding','Memory','Community'], link:'https://www.youtube.com/watch?v=OaA4l8S8A7w', linkText:'Смотреть →' }
      ]
    },
    projects: { label:'Проекты', view:'Смотреть →', noDesc:'Нет описания' },
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
    hero: { status:'Lesta Games · Engine Core', tagline:'C++工程师 · 逆向工程师 · 研究员', viewProjects:'查看项目' },
    stats: { years:'年生产经验', standard:'C++标准', repos:'开源项目', platforms:'平台' },
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
        { year:'2023 – 现在', title:'C++软件工程师', company:'Lesta Games，明斯克 — Engine Core', desc:'生产游戏引擎开发。跨平台系统（Linux、Windows、macOS、iOS、Android）。性能优化、资源流送、内存管理。', tags:['C++20','CMake','SDL3','Android NDK','iOS','OpenGL'] },
        { year:'2022', title:'军事模拟器开发', company:'国防部 — ZRK Osa模拟器', desc:'实时军事训练模拟器。C++系统编程、硬件集成、模拟精度的性能关键代码。', tags:['C++','Systems','Real-time','Hardware'] },
        { year:'2021 – 2022', title:'嵌入式软件工程师', company:'白俄罗斯国立大学 — CubeSat-2', desc:'卫星机载软件。嵌入式C、无线电通信协议、电源管理。已发射并运行。', tags:['C','Embedded','Satellite','Radio'] },
        { year:'2020', title:'C++认证', company:'白俄罗斯国立大学 — C++高级编程', desc:'高级C++编程认证。模板元编程、STL内部、优化技术。', tags:['C++','Templates','STL','Optimization'] },
        { year:'2019', title:'模组开发', company:'World Conqueror 4 — 42K次观看', desc:'游戏模组和逆向工程。内存修补、资源修改、游戏系统。YouTube评论42K+次观看。', tags:['RE','Modding','Memory','Community'], link:'https://www.youtube.com/watch?v=OaA4l8S8A7w', linkText:'观看 →' }
      ]
    },
    projects: { label:'项目', view:'查看 →', noDesc:'无描述' },
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
