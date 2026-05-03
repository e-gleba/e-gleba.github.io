const I18N = {
  en: {
    nav: { about:'About', projects:'Projects', skills:'Skills', timeline:'Timeline', contact:'Contact' },
    hero: { status:'Open to opportunities', tagline:'Systems Engineer · Game Developer · Reverse Engineer', viewProjects:'View Projects' },
    stats: { years:'Years in Systems', standard:'Latest Standard', repos:'Public Repos', platforms:'Platforms' },
    share: { title:'Share', subtitle:'Spread the word' },
    about: { label:'About',
      philosophy:'// philosophy',
      p1:'Systems programmer shipping cross-platform C++ daily. Build with CMake, profile with Tracy, target Linux, Windows, macOS, iOS, and Android. Write code that runs on bare metal — graphics pipelines, game engines, native mobile apps.',
      p2:"Grew up on Valve engines — Half-Life, Source SDK, Garry's Mod. That ecosystem shaped everything: modularity, modding culture, respect for the community. Still reverse-engineer game binaries for fun and publish open-source tooling.",
      p3:'Static analysis over runtime checks. Contracts over exceptions. Generic programming over hierarchies. Every abstraction must compile down to what you\'d write by hand.',
      p4:'Beyond code — drawn to design, sound, and music. Integrate Wwise audio pipelines into game engines, obsess over UI details, and prototype visual systems for the joy of it. Offline — telescope, Stellaris empires, Sniper Elite headshots, and occasionally breaking things just to understand how they work.'
    },
    timeline: {
      label:'Timeline',
      items:[
        { year:'2018', title:'World Conqueror 4 — Reverse Engineering & Russian Localization', desc:'Reverse-engineered game binaries to build a full Russian localization. Community-driven project that gained traction — featured in a video review.', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'Video review →' },
        { year:'2020', title:'Hearts of Iron IV — Millennium Dawn', desc:'Contributed to the Millennium Dawn mod for HOI4, focusing on gameplay systems and balance tuning.' },
        { year:'2021', title:'BSU RFCT — First Year, Satellite Thermal Sensors', desc:'Started at BSU RFCT (Radio Physics & Computer Technology faculty). Built parsing models for thermal sensors aboard the second BSU CubeSat-2 satellite.' },
        { year:'2022', title:'Higher Flight School & MSU Rocketry', desc:'Developed drones at the Higher Flight School. Competed in rocket engineering with Moscow State University — adult league, real hardware, live launches.' },
        { year:'2023', title:'Advanced C++ — Leonid Chaika', desc:'September 25 — completed Leonid Chaika\'s intensive C++ course. Joined his team at Lesta Games, working on cross-platform C++ game engine internals.' },
        { year:'2023–2025', title:'Military Simulator — ZRK Osa in Godot', desc:'Built a cross-platform ZRK Osa air defense simulator for the military in Godot. Networked multiplayer between different platforms — radar, command center, launch units.' },
        { year:'2025', title:'BSU RFCT — Graduation & Andrei Sakharov Scholarship', desc:'Graduated from BSU RFCT. Named to the university Honor Board. Received the Andrei Sakharov named scholarship for academic excellence.' },
        { year:'2026', title:'Lesta Games — Engine Core, Tanks Blitz', desc:'Engine Core team at Lesta Games, shipping Tanks Blitz. Building open source tools and libraries in parallel.' }
      ]
    },
    projects:{ label:'Projects', noDesc:'No description available', view:'View' },
    skills: { label:'Skills', languages:'Languages', systems:'Systems & Tools', engine:'Engine & Multimedia', mobile:'Mobile', reverse:'Reverse Engineering', practices:'Practices & AI' },
    contact: { label:'Contact', text:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." },
    footer: 'Built with Tailwind CSS & Alpine.js'
  },
  ru: {
    nav: { about:'О себе', projects:'Проекты', skills:'Навыки', timeline:'Путь', contact:'Контакты' },
    hero: { status:'Открыт к предложениям', tagline:'Системный инженер · Разработчик игр · Реверс-инженер', viewProjects:'Проекты' },
    stats: { years:'Лет в системах', standard:'Стандарт', repos:'Репозиториев', platforms:'Платформ' },
    share: { title:'Поделиться', subtitle:'Расскажите друзьям' },
    about: { label:'О себе',
      philosophy:'// философия',
      p1:'Системный программист, ежедневно работающий с кросс-платформенным C++. Сборка через CMake, профилирование через Tracy, целевые платформы — Linux, Windows, macOS, iOS, Android. Пишу код, работающий на голом железе: графические конвейеры, игровые движки, нативные мобильные приложения.',
      p2:"Вырос на движках Valve — Half-Life, Source SDK, Garry's Mod. Эта экосистема сформировала всё: модульность, культура моддинга, уважение к сообществу. До сих пор реверсю бинарники игр ради интереса и публикую open-source инструменты.",
      p3:'Статический анализ вместо рантайм-проверок. Контракты вместо исключений. Обобщённое программирование вместо иерархий. Каждая абстракция должна компилироваться в то, что вы написали бы вручную.',
      p4:'Помимо кода — увлекаюсь дизайном, звуком и музыкой. Интегрирую аудио-пайплайны на Wwise в игровые движки, зацикливаюсь на деталях UI, прототипирую визуальные системы ради удовольствия. Вне экрана — телескоп, империи в Stellaris, хедшоты в Sniper Elite и периодическое разрушение вещей ради понимания, как они работают.'
    },
    timeline: {
      label:'Путь',
      items:[
        { year:'2018', title:'World Conqueror 4 — реверс-инжиниринг и русификация', desc:'Реверсил бинарники игры, чтобы сделать полную русификацию. Комьюнити-проект, который выстрелил — есть видео-обзор.', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'Видео-обзор →' },
        { year:'2020', title:'Hearts of Iron IV — Millennium Dawn', desc:'Участие в моде Millennium Dawn для HOI4, работа над игровыми системами и балансом.' },
        { year:'2021', title:'РФиКТ БГУ — первый курс, спутниковые датчики', desc:'Поступил на РФиКТ БГУ. На первом курсе разрабатывал модели парсинга тепловых датчиков спутника БГУ (CubeSat-2).' },
        { year:'2022', title:'Высшая летная школа и МГУ — ракетостроение', desc:'Разработка дронов в Высшей летной школе. Соревнования с МГУ по ракетостроению. Взрослая лига — серьёзное железо, реальные запуски.' },
        { year:'2023', title:'Продвинутый C++ — Леонид Чайка', desc:'25 сентября — завершил курс продвинутого C++ у Леонида Чайки. Попал в его команду в Lesta Games, работаю над кросс-платформенным C++ движком.' },
        { year:'2023–2025', title:'Военный симулятор ЗРК «Оса» на Godot', desc:'Разработал кросс-платформенный симулятор ЗРК «Оса» для военных на Godot. Сетевая связь между разными платформами — радар, пункт управления, пусковые установки.' },
        { year:'2025', title:'РФиКТ БГУ — выпуск, доска почёта и стипендия Сахарова', desc:'Окончил РФиКТ БГУ. Попал на доску почёта университета. Получил именную стипендию имени Андрея Сахарова за академические успехи.' },
        { year:'2026', title:'Lesta Games — Engine Core, Tanks Blitz', desc:'Отдел Engine Core в Lesta Games, проект Tanks Blitz. Параллельно развиваю собственные open source проекты и инструменты.' }
      ]
    },
    projects:{ label:'Проекты', noDesc:'Описание отсутствует', view:'Смотреть' },
    skills: { label:'Навыки', languages:'Языки', systems:'Системы и инструменты', engine:'Движок и мультимедиа', mobile:'Мобильная', reverse:'Реверс-инжиниринг', practices:'Практики и AI' },
    contact: { label:'Контакты', text:'Всегда открыт к обсуждению новых проектов, идей или возможностей.' },
    footer: 'Tailwind CSS & Alpine.js'
  },
  zh: {
    nav: { about:'关于', projects:'项目', skills:'技能', timeline:'经历', contact:'联系' },
    hero: { status:'接受机会', tagline:'系统工程师 · 游戏开发者 · 逆向工程师', viewProjects:'查看项目' },
    stats: { years:'年系统经验', standard:'最新标准', repos:'公共仓库', platforms:'个平台' },
    share: { title:'分享', subtitle:'分享给好友' },
    about: { label:'关于',
      philosophy:'// 理念',
      p1:'系统程序员，每天编写跨平台C++。使用CMake构建，Tracy分析性能，面向Linux、Windows、macOS、iOS和Android。编写运行在裸机上的代码——图形管线、游戏引擎、原生移动应用。',
      p2:"在Valve引擎上成长——Half-Life、Source SDK、Garry's Mod。这个生态塑造了一切：模块化、模组文化、尊重社区。至今仍为乐趣逆向分析游戏二进制文件并发布开源工具。",
      p3:'静态分析优于运行时检查。契约优于异常。泛型编程优于层次继承。每个抽象都必须编译为你手写的代码。',
      p4:'代码之外——热衷设计、声音与音乐。在游戏引擎中集成Wwise音频管线，痴迷UI细节，纯粹为了乐趣而制作视觉原型。线下——望远镜、Stellaris帝国、Sniper Elite爆头，偶尔拆解东西只为理解其工作原理。'
    },
    timeline: {
      label:'经历',
      items:[
        { year:'2018', title:'World Conqueror 4 — 逆向工程与俄化', desc:'逆向分析游戏二进制文件，完成完整俄化翻译。社区项目，获得关注——有视频报道。', link:'https://www.youtube.com/watch?v=fuOPZzfWoCY', linkText:'视频评测 →' },
        { year:'2020', title:'Hearts of Iron IV — Millennium Dawn', desc:'参与HOI4的Millennium Dawn模组，负责游戏系统和平衡。' },
        { year:'2021', title:'白俄罗斯国立大学射频与计算机技术系 — 大一，卫星热传感器', desc:'入读白俄罗斯国立大学射频与计算机技术系。大一期间为BSU卫星（CubeSat-2）开发热传感器解析模型。' },
        { year:'2022', title:'高级飞行学校与莫斯科国立大学 — 火箭工程', desc:'在高级飞行学校开发无人机。与莫斯科国立大学参加火箭工程竞赛。成人联赛——硬核硬件，真实发射。' },
        { year:'2023', title:'高级C++课程 — Leonid Chaika', desc:'9月25日完成Leonid Chaika的高级C++课程。加入他在Lesta Games的团队，从事跨平台C++游戏引擎开发。' },
        { year:'2023–2025', title:'军事模拟器 — Godot中的ZRK Osa防空系统', desc:'在Godot中为军方开发跨平台ZRK Osa防空模拟器。不同平台之间的网络多人游戏——雷达、指挥中心、发射单元。' },
        { year:'2025', title:'白俄罗斯国立大学毕业 — 荣誉榜与萨哈罗夫奖学金', desc:'毕业于白俄罗斯国立大学射频与计算机技术系。登上大学荣誉榜。获得安德烈·萨哈罗夫命名奖学金以表彰学术卓越。' },
        { year:'2026', title:'Lesta Games — Engine Core, Tanks Blitz', desc:'在Lesta Games Engine Core团队，负责Tanks Blitz项目。同时构建开源工具和库。' }
      ]
    },
    projects:{ label:'项目', noDesc:'暂无描述', view:'查看' },
    skills: { label:'技能', languages:'编程语言', systems:'系统与工具', engine:'引擎与多媒体', mobile:'移动开发', reverse:'逆向工程', practices:'开发实践与AI' },
    contact: { label:'联系方式', text:'随时欢迎讨论新项目、创意或合作机会。' },
    footer: 'Tailwind CSS & Alpine.js'
  }
};
