const I18N = {
  en: {
    nav: { about:'About', projects:'Projects', skills:'Skills', experience:'Experience', contact:'Contact' },
    hero: { status:'Lesta Games · Engine Core', tagline:'C++ Systems Engineer shipping cross-platform game engines. Performance-first. Bare metal to UI.', viewProjects:'View Projects' },
    stats: { years:'Years Production', standard:'C++ Standard', repos:'Open Source', platforms:'Platforms' },
    share: { title:'Share', subtitle:'Spread the word' },
    about: { label:'About',
      philosophy:'Engineering Philosophy',
      p1:'Systems engineer with 3+ years in production game development. Currently at Lesta Games, Engine Core team — shipping Tanks Blitz across Linux, Windows, macOS, iOS, and Android.',
      p2:'Deep expertise in performance-critical C++: graphics pipelines, asset streaming, memory management, hot reload systems. Profile with Tracy, build with CMake, target bare metal.',
      p3:'Reverse engineering background — published open-source tools for binary analysis, APK extraction, game preservation. 25+ repositories, community-driven projects with measurable traction.',
      p4:'Static analysis over runtime checks. Contracts over exceptions. Generic programming over inheritance hierarchies. Every abstraction must compile to what you would write by hand.',
      impact: { label:'Key Impact',
        items: [
          'Cross-platform engine internals: 5 OS, unified build system',
          'Military simulator: networked multi-platform Godot deployment',
          'CubeSat-2: thermal sensor parsing models, space hardware',
          'Open source: 17-star RE toolkit, production C++ template'
        ]
      }
    },
    experience: {
      label:'Experience',
      items:[
        { year:'2023–now', title:'C++ Systems Engineer', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'Shipping cross-platform game engine internals. CMake build systems, Tracy profiling, SDL3-GPU integration, Wwise audio pipelines. Performance optimization for mobile and desktop.', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'Simulation Developer', company:'Military Contract — ZRK Osa Air Defense', desc:'Built cross-platform simulator in Godot for military training. Networked multiplayer between radar, command center, and launch units. Real-time coordination across heterogeneous platforms.', tags:['Godot','Networking','Multi-platform','Real-time'] },
        { year:'2021–2025', title:'BSU RFCT — Satellite & Aerospace', company:'Belarusian State University', desc:'Developed thermal sensor parsing models for CubeSat-2 satellite. Competed in rocket engineering with Moscow State University — adult league, live launches, drone development.', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'Advanced C++ Certification', company:'Leonid Chaika Intensive Program', desc:'Completed intensive C++ course. Joined Lesta Games through program alumni network. Focus: modern standards, generic programming, performance optimization.', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'Game Modding & RE', company:'Community Projects', desc:'Reverse-engineered game binaries for Russian localization (World Conqueror 4). Contributed to Millennium Dawn mod for Hearts of Iron IV. Published open-source tooling.', tags:['Reverse Engineering','Modding','Community'] }
      ]
    },
    projects:{ label:'Projects', noDesc:'No description available', view:'View' },
    skills: { label:'Skills', languages:'Languages', systems:'Systems & Tools', engine:'Engine & Multimedia', mobile:'Mobile', reverse:'Reverse Engineering', practices:'Practices & AI' },
    contact: { label:'Contact', text:'Open to senior C++ roles, engine architecture consulting, and reverse engineering contracts.' },
    footer: 'Built with Tailwind CSS & Alpine.js'
  },
  ru: {
    nav: { about:'О себе', projects:'Проекты', skills:'Навыки', experience:'Опыт', contact:'Контакты' },
    hero: { status:'Lesta Games · Engine Core', tagline:'Системный инженер C++. Кросс-платформенные игровые движки. Производительность прежде всего.', viewProjects:'Проекты' },
    stats: { years:'Лет в продакшене', standard:'Стандарт C++', repos:'Open Source', platforms:'Платформ' },
    share: { title:'Поделиться', subtitle:'Расскажите друзьям' },
    about: { label:'О себе',
      philosophy:'Философия разработки',
      p1:'Системный инженер с 3+ годами в игровом продакшене. Сейчас в Lesta Games, команда Engine Core — проект Tanks Blitz. Платформы: Linux, Windows, macOS, iOS, Android.',
      p2:'Глубокая экспертиза в performance-critical C++: графические конвейеры, стриминг ассетов, управление памятью, системы hot reload. Профилирование через Tracy, сборка через CMake.',
      p3:'Бэкграунд в reverse engineering — опубликованы open-source инструменты для бинарного анализа, экстракции APK, preservation игр. 25+ репозиториев, проекты с измеримой traction.',
      p4:'Статический анализ вместо рантайм-проверок. Контракты вместо исключений. Обобщённое программирование вместо иерархий наследования. Каждая абстракция должна компилироваться в код, который вы написали бы вручную.',
      impact: { label:'Ключевой вклад',
        items: [
          'Кросс-платформенные internals движка: 5 ОС, единая система сборки',
          'Военный симулятор: сетевая мультиплатформенная деплойка на Godot',
          'CubeSat-2: модели парсинга тепловых датчиков, космическое железо',
          'Open source: RE-инструментарий 17★, production C++ шаблон'
        ]
      }
    },
    experience: {
      label:'Опыт работы',
      items:[
        { year:'2023–н.в.', title:'Системный инженер C++', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'Разработка кросс-платформенных internals игрового движка. Системы сборки CMake, профилирование Tracy, интеграция SDL3-GPU, аудио-пайплайны Wwise. Оптимизация производительности под мобильные и десктопные платформы.', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'Разработчик симуляторов', company:'Военный контракт — ЗРК «Оса»', desc:'Кросс-платформенный симулятор на Godot для военной подготовки. Сетевое взаимодействие между радаром, пунктом управления и пусковыми установками. Реальное время, гетерогенные платформы.', tags:['Godot','Networking','Multi-platform','Real-time'] },
        { year:'2021–2025', title:'РФиКТ БГУ — спутники и аэрокосмика', company:'Белорусский государственный университет', desc:'Модели парсинга тепловых датчиков для спутника CubeSat-2. Соревнования по ракетостроению с МГУ — взрослая лига, реальные запуски, разработка дронов.', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'Сертификация Advanced C++', company:'Интенсив Леонида Чайки', desc:'Завершил интенсивный курс C++. Попал в Lesta Games через alumni-нетворкинг. Фокус: современные стандарты, generic programming, оптимизация производительности.', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'Моддинг и реверс-инжиниринг', company:'Комьюнити-проекты', desc:'Реверсинг бинарников для русификации игр (World Conqueror 4). Участие в моде Millennium Dawn для Hearts of Iron IV. Публикация open-source инструментов.', tags:['Reverse Engineering','Modding','Community'] }
      ]
    },
    projects:{ label:'Проекты', noDesc:'Описание отсутствует', view:'Смотреть' },
    skills: { label:'Навыки', languages:'Языки', systems:'Системы и инструменты', engine:'Движок и мультимедиа', mobile:'Мобильная', reverse:'Реверс-инжиниринг', practices:'Практики и AI' },
    contact: { label:'Контакты', text:'Открыт к senior C++ позициям, консалтингу архитектуры движков и контрактам на реверс-инжиниринг.' },
    footer: 'Tailwind CSS & Alpine.js'
  },
  zh: {
    nav: { about:'关于', projects:'项目', skills:'技能', experience:'经历', contact:'联系' },
    hero: { status:'Lesta Games · Engine Core', tagline:'C++系统工程师。跨平台游戏引擎。性能优先。', viewProjects:'查看项目' },
    stats: { years:'生产经验', standard:'C++标准', repos:'开源项目', platforms:'平台数' },
    share: { title:'分享', subtitle:'分享给好友' },
    about: { label:'关于',
      philosophy:'工程哲学',
      p1:'拥有3年以上游戏生产环境经验的系统工程师。现任Lesta Games Engine Core团队——负责Tanks Blitz跨平台开发。支持Linux、Windows、macOS、iOS、Android。',
      p2:'深度性能优化C++专长：图形管线、资源流送、内存管理、热重载系统。使用Tracy分析性能，CMake构建，面向裸机优化。',
      p3:'逆向工程背景——发布开源二进制分析工具、APK提取工具、游戏保存工具。25+仓库，具有可衡量影响力的社区驱动项目。',
      p4:'静态分析优于运行时检查。契约优于异常。泛型编程优于继承层次。每个抽象必须编译为你手写代码的效率。',
      impact: { label:'核心成就',
        items: [
          '跨平台引擎内部：5个操作系统，统一构建系统',
          '军事模拟器：Godot网络多平台部署',
          'CubeSat-2：热传感器解析模型，太空硬件',
          '开源：17星RE工具集，生产级C++模板'
        ]
      }
    },
    experience: {
      label:'工作经历',
      items:[
        { year:'2023–至今', title:'C++系统工程师', company:'Lesta Games — Engine Core, Tanks Blitz', desc:'跨平台游戏引擎内部开发。CMake构建系统，Tracy性能分析，SDL3-GPU集成，Wwise音频管线。移动端和桌面端性能优化。', tags:['C++','CMake','SDL3','Tracy','Wwise'] },
        { year:'2023–2025', title:'模拟器开发工程师', company:'军方合同 — ZRK Osa防空系统', desc:'使用Godot开发跨平台军事训练模拟器。雷达、指挥中心、发射单元之间的网络多人协作。异构平台实时协调。', tags:['Godot','Networking','Multi-platform','Real-time'] },
        { year:'2021–2025', title:'白俄罗斯国立大学 — 卫星与航天', company:'白俄罗斯国立大学', desc:'为CubeSat-2卫星开发热传感器解析模型。与莫斯科国立大学参加火箭工程竞赛——成人联赛，实弹发射，无人机开发。', tags:['C++','Embedded','Hardware','Space'] },
        { year:'2023', title:'高级C++认证', company:'Leonid Chaika强化课程', desc:'完成强化C++课程。通过校友网络加入Lesta Games。重点：现代标准、泛型编程、性能优化。', tags:['C++20','Generic Programming','Performance'] },
        { year:'2018–2020', title:'游戏修改与逆向工程', company:'社区项目', desc:'逆向分析游戏二进制文件完成俄化翻译（World Conqueror 4）。参与Hearts of Iron IV的Millennium Dawn模组。发布开源工具。', tags:['Reverse Engineering','Modding','Community'] }
      ]
    },
    projects:{ label:'项目', noDesc:'暂无描述', view:'查看' },
    skills: { label:'技能', languages:'编程语言', systems:'系统与工具', engine:'引擎与多媒体', mobile:'移动开发', reverse:'逆向工程', practices:'开发实践与AI' },
    contact: { label:'联系方式', text:'开放高级C++职位、引擎架构咨询和逆向工程合同。' },
    footer: 'Tailwind CSS & Alpine.js'
  }
};
