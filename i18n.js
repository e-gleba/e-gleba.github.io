const I18N = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      timeline: "Timeline",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Makar Klochko",
      role: "Software Engineer",
      tagline: "Building high-performance systems, games & tools",
      cta: "View Projects",
      scroll: "Scroll",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a software engineer with a deep focus on systems programming, game development, and cross-platform tools. I enjoy working close to the metal — C++, engine architecture, and performance-critical code.",
        "My experience spans from reverse-engineering game binaries and building military simulation systems in Godot, to working on a production C++ cross-platform game engine at Lesta Games (Tanks Blitz).", 
        "I care about clean architecture, fast iteration, and shipping things that work reliably across platforms."
      ],
    },
    timeline: {
      title: "Timeline",
      items: [
        {
          year: "2018",
          title: "World Conqueror 4 — Reverse Engineering & Russian Localization",
          desc: "Reverse-engineered game binaries, built a full Russian localization patch. Community project that gained traction — reviewed by Tim with 42K views.",
          link: "https://www.youtube.com/watch?v=fuOPZzfWoCY",
          linkText: "Video review →"
        },
        {
          year: "2020",
          title: "Hearts of Iron IV — Millennium Dawn",
          desc: "Contributed to the Millennium Dawn mod for Hearts of Iron IV. Worked on gameplay systems and balance."
        },
        {
          year: "2021",
          title: "BSU RFCT — First Year, Satellite Thermal Sensors",
          desc: "First year at BSU RFCT. Developed thermal sensor parsing models for the CubeSat-2 satellite project."
        },
        {
          year: "2022",
          title: "Higher Flight School & MSU Rocketry",
          desc: "Worked on drone systems at the Higher Flight School. Participated in MSU rocketry league — adult division, building and launching rockets."
        },
        {
          year: "2023",
          title: "Advanced C++ — Leonid Chaika",
          desc: "September 25: Completed Leonid Chaika's advanced C++ course. Joined his team at Lesta Games."
        },
        {
          year: "2023–2025",
          title: "Military Simulator — ZRK Osa in Godot",
          desc: "Built a cross-platform air defense simulator for military use in Godot. Networked multiplayer across platforms — radar, command center, and launch unit modules."
        },
        {
          year: "2025",
          title: "BSU RFCT — Graduation & Andrei Sakharov Scholarship",
          desc: "Graduated from BSU RFCT. Named to the Honor Board and received the Andrei Sakharov named scholarship."
        },
        {
          year: "2026",
          title: "Lesta Games — Engine Core, Tanks Blitz",
          desc: "Engine Core team at Lesta Games, shipping Tanks Blitz. Building open source tools and libraries in parallel."
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Languages",
          items: ["C++", "C", "Python", "Lua", "GDScript", "JavaScript", "TypeScript", "Rust"],
        },
        {
          name: "Engine & Systems",
          items: ["Custom C++ Engine", "Godot", "Unreal Engine", "SDL2", "OpenGL", "Vulkan", "WebGPU"],
        },
        {
          name: "Tools & DevOps",
          items: ["Git", "CMake", "Ninja", "Docker", "CI/CD", "Linux", "Windows", "macOS"],
        },
        {
          name: "Game Dev",
          items: ["Gameplay Programming", "Engine Architecture", "Networking", "Physics", "Shaders", "UI Systems"],
        },
      ],
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "e-gleba.github.io",
          desc: "Personal website built with Alpine.js, Tailwind CSS, and modern web technologies.",
          tech: ["Alpine.js", "Tailwind CSS", "HTML5"],
          links: {
            demo: "https://e-gleba.github.io",
            source: "https://github.com/e-gleba/e-gleba.github.io",
          },
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open for collaborations, opportunities, and interesting projects.",
      email: "makar.klochko@gmail.com",
      social: [
        { name: "GitHub", url: "https://github.com/e-gleba", icon: "github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/makar-klochko", icon: "linkedin" },
        { name: "Telegram", url: "https://t.me/e_gleba", icon: "telegram" },
      ],
    },
    footer: {
      copyright: "© 2024 Makar Klochko. Built with Alpine.js & Tailwind.",
    },
    resume: {
      title: "Makar Klochko — Resume",
      role: "Software Engineer",
      summary: "Software engineer specializing in systems programming, game engines, and cross-platform development. Experience in C++, engine architecture, and game development from indie mods to production engine teams.",
      experience: [
        {
          company: "Lesta Games",
          role: "C++ Engineer — Engine Core",
          period: "2023 — Present",
          points: [
            "Cross-platform C++ engine development",
            "Performance optimization and systems architecture",
            "Tools and pipeline development",
          ],
        },
      ],
      education: [
        {
          school: "Belarusian State University (RFCT)",
          degree: "Bachelor's Degree",
          period: "2021 — 2025",
          honors: "Student of the Year, Honor Board, Andrei Sakharov Scholarship",
        },
      ],
      skills: ["C++", "C", "Python", "Lua", "Engine Architecture", "Godot", "Unreal Engine", "Networking", "Cross-Platform"],
      links: {
        github: "https://github.com/e-gleba",
        linkedin: "https://linkedin.com/in/makar-klochko",
        website: "https://e-gleba.github.io",
      },
    },
  },

  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      timeline: "Таймлайн",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
      resume: "Резюме",
    },
    hero: {
      greeting: "Привет, я",
      name: "Макар Клочко",
      role: "Инженер-программист",
      tagline: "Разрабатываю высокопроизводительные системы, игры и инструменты",
      cta: "Смотреть проекты",
      scroll: "Листай",
    },
    about: {
      title: "Обо мне",
      paragraphs: [
        "Инженер-программист с фокусом на системное программирование, разработку игр и кроссплатформенные инструменты. Люблю работать близко к железу — C++, архитектура движков, перформанс-критичный код.",
        "Опыт от реверс-инжиниринга игровых бинарников и военных симуляторов на Godot до продакшен C++ движка в Lesta Games (Tanks Blitz).",
        "Ценю чистую архитектуру, быструю итерацию и надёжные решения на всех платформах."
      ],
    },
    timeline: {
      title: "Таймлайн",
      items: [
        {
          year: "2018",
          title: "World Conqueror 4 — Реверс-инжиниринг и русификация",
          desc: "Реверс-инжиниринг бинарников, полная русификация. Проект взлетел в комьюнити — обзор от Тима, 42K просмотров.",
          link: "https://www.youtube.com/watch?v=fuOPZzfWoCY",
          linkText: "Видео-обзор →"
        },
        {
          year: "2020",
          title: "Hearts of Iron IV — Millennium Dawn",
          desc: "Контрибьютор мода Millennium Dawn для Hearts of Iron IV. Геймплейные системы и баланс."
        },
        {
          year: "2021",
          title: "БГУ РФиКТ — Первый курс, тепловые датчики спутника",
          desc: "Первый курс на РФиКТ БГУ. Модели парсинга тепловых датчиков для проекта CubeSat-2."
        },
        {
          year: "2022",
          title: "Высшая летная школа и МГУ — ракетостроение",
          desc: "Разработка дронов в Высшей лётной школе. Лига ракетостроения МГУ — взрослый дивизион, конструирование и запуск ракет."
        },
        {
          year: "2023",
          title: "Продвинутый C++ — Леонид Чайка",
          desc: "25 сентября: завершил курс продвинутого C++ Леонида Чайки. Присоединился к его команде в Lesta Games."
        },
        {
          year: "2023–2025",
          title: "Военный симулятор — ЗРК Оса на Godot",
          desc: "Кроссплатформенный симулятор ЗРК Оса для военных на Godot. Сетевая игра между платформами — радар, пункт управления, пусковые установки."
        },
        {
          year: "2025",
          title: "БГУ РФиКТ — Выпуск и стипендия имени Андрея Сахарова",
          desc: "Окончил РФиКТ БГУ. Попал на доску почёта. Получил именную стипендию имени Андрея Сахарова."
        },
        {
          year: "2026",
          title: "Lesta Games — Engine Core, Tanks Blitz",
          desc: "Отдел Engine Core в Lesta Games, проект Tanks Blitz. Параллельно развиваю собственные open source проекты и инструменты."
        },
      ],
    },
    skills: {
      title: "Навыки",
      categories: [
        {
          name: "Языки",
          items: ["C++", "C", "Python", "Lua", "GDScript", "JavaScript", "TypeScript", "Rust"],
        },
        {
          name: "Движки и системы",
          items: ["Custom C++ Engine", "Godot", "Unreal Engine", "SDL2", "OpenGL", "Vulkan", "WebGPU"],
        },
        {
          name: "Инструменты и DevOps",
          items: ["Git", "CMake", "Ninja", "Docker", "CI/CD", "Linux", "Windows", "macOS"],
        },
        {
          name: "Геймдев",
          items: ["Gameplay Programming", "Engine Architecture", "Networking", "Physics", "Shaders", "UI Systems"],
        },
      ],
    },
    projects: {
      title: "Проекты",
      items: [
        {
          name: "e-gleba.github.io",
          desc: "Персональный сайт на Alpine.js, Tailwind CSS и современных веб-технологиях.",
          tech: ["Alpine.js", "Tailwind CSS", "HTML5"],
          links: {
            demo: "https://e-gleba.github.io",
            source: "https://github.com/e-gleba/e-gleba.github.io",
          },
        },
      ],
    },
    contact: {
      title: "Связаться",
      subtitle: "Открыт к сотрудничеству, предложениям и интересным проектам.",
      email: "makar.klochko@gmail.com",
      social: [
        { name: "GitHub", url: "https://github.com/e-gleba", icon: "github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/makar-klochko", icon: "linkedin" },
        { name: "Telegram", url: "https://t.me/e_gleba", icon: "telegram" },
      ],
    },
    footer: {
      copyright: "© 2024 Макар Клочко. Сделано на Alpine.js и Tailwind.",
    },
    resume: {
      title: "Макар Клочко — Резюме",
      role: "Инженер-программист",
      summary: "Инженер-программист, специализирующийся на системном программировании, игровых движках и кроссплатформенной разработке. Опыт в C++, архитектуре движков и геймдеве от инди-модов до продакшен-команд.",
      experience: [
        {
          company: "Lesta Games",
          role: "C++ Engineer — Engine Core",
          period: "2023 — настоящее время",
          points: [
            "Разработка кроссплатформенного движка на C++",
            "Оптимизация производительности и системная архитектура",
            "Разработка инструментов и пайплайнов",
          ],
        },
      ],
      education: [
        {
          school: "БГУ (РФиКТ)",
          degree: "Бакалавриат",
          period: "2021 — 2025",
          honors: "Студент года, Доска почёта, Стипендия имени Андрея Сахарова",
        },
      ],
      skills: ["C++", "C", "Python", "Lua", "Engine Architecture", "Godot", "Unreal Engine", "Networking", "Cross-Platform"],
      links: {
        github: "https://github.com/e-gleba",
        linkedin: "https://linkedin.com/in/makar-klochko",
        website: "https://e-gleba.github.io",
      },
    },
  },

  zh: {
    nav: {
      home: "首页",
      about: "关于",
      timeline: "时间线",
      skills: "技能",
      projects: "项目",
      contact: "联系",
      resume: "简历",
    },
    hero: {
      greeting: "你好，我是",
      name: "Makar Klochko",
      role: "软件工程师",
      tagline: "构建高性能系统、游戏和工具",
      cta: "查看项目",
      scroll: "滚动",
    },
    about: {
      title: "关于我",
      paragraphs: [
        "专注于系统编程、游戏开发和跨平台工具的软件工程师。喜欢底层工作——C++、引擎架构和性能关键代码。",
        "经验涵盖从逆向工程游戏二进制文件、在Godot中构建军事模拟系统，到在Lesta Games（Tanks Blitz）开发生产级C++跨平台游戏引擎。",
        "注重干净的架构、快速迭代和跨平台的可靠交付。"
      ],
    },
    timeline: {
      title: "时间线",
      items: [
        {
          year: "2018",
          title: "World Conqueror 4 — 逆向工程与俄化",
          desc: "逆向工程游戏二进制文件，完成完整俄化补丁。社区项目获得关注——Tim评测，42K次观看。",
          link: "https://www.youtube.com/watch?v=fuOPZzfWoCY",
          linkText: "视频评测 →"
        },
        {
          year: "2020",
          title: "Hearts of Iron IV — Millennium Dawn",
          desc: "为Hearts of Iron IV的Millennium Dawn模组做出贡献。负责游戏系统和平衡。"
        },
        {
          year: "2021",
          title: "白俄罗斯国立大学 — 大一，卫星热传感器",
          desc: "白俄罗斯国立大学RFCT大一。为CubeSat-2卫星项目开发热传感器解析模型。"
        },
        {
          year: "2022",
          title: "高等飞行学校与莫斯科国立大学火箭工程",
          desc: "在高等飞行学校从事无人机系统工作。参加莫斯科国立大学火箭联盟成人组——建造和发射火箭。"
        },
        {
          year: "2023",
          title: "高级C++ — Leonid Chaika",
          desc: "9月25日：完成Leonid Chaika的高级C++课程。加入他在Lesta Games的团队。"
        },
        {
          year: "2023–2025",
          title: "军事模拟器 — Godot中的ZRK Osa",
          desc: "在Godot中为军方构建跨平台防空模拟器。跨平台联网多人游戏——雷达、指挥中心、发射单元。"
        },
        {
          year: "2025",
          title: "白俄罗斯国立大学 — 毕业与萨哈罗夫奖学金",
          desc: "从白俄罗斯国立大学RFCT毕业。入选荣誉榜，获得安德烈·萨哈罗夫命名奖学金。"
        },
        {
          year: "2026",
          title: "Lesta Games — Engine Core, Tanks Blitz",
          desc: "在Lesta Games Engine Core团队，负责Tanks Blitz项目。同时构建开源工具和库。"
        },
      ],
    },
    skills: {
      title: "技能",
      categories: [
        {
          name: "语言",
          items: ["C++", "C", "Python", "Lua", "GDScript", "JavaScript", "TypeScript", "Rust"],
        },
        {
          name: "引擎和系统",
          items: ["Custom C++ Engine", "Godot", "Unreal Engine", "SDL2", "OpenGL", "Vulkan", "WebGPU"],
        },
        {
          name: "工具和DevOps",
          items: ["Git", "CMake", "Ninja", "Docker", "CI/CD", "Linux", "Windows", "macOS"],
        },
        {
          name: "游戏开发",
          items: ["Gameplay Programming", "Engine Architecture", "Networking", "Physics", "Shaders", "UI Systems"],
        },
      ],
    },
    projects: {
      title: "项目",
      items: [
        {
          name: "e-gleba.github.io",
          desc: "使用Alpine.js、Tailwind CSS和现代网络技术构建的个人网站。",
          tech: ["Alpine.js", "Tailwind CSS", "HTML5"],
          links: {
            demo: "https://e-gleba.github.io",
            source: "https://github.com/e-gleba/e-gleba.github.io",
          },
        },
      ],
    },
    contact: {
      title: "联系我",
      subtitle: "开放合作、机会和有趣的项目。",
      email: "makar.klochko@gmail.com",
      social: [
        { name: "GitHub", url: "https://github.com/e-gleba", icon: "github" },
        { name: "LinkedIn", url: "https://linkedin.com/in/makar-klochko", icon: "linkedin" },
        { name: "Telegram", url: "https://t.me/e_gleba", icon: "telegram" },
      ],
    },
    footer: {
      copyright: "© 2024 Makar Klochko。使用Alpine.js和Tailwind构建。",
    },
    resume: {
      title: "Makar Klochko — 简历",
      role: "软件工程师",
      summary: "专注于系统编程、游戏引擎和跨平台开发的软件工程师。在C++、引擎架构和游戏开发方面拥有从独立模组到生产引擎团队的经验。",
      experience: [
        {
          company: "Lesta Games",
          role: "C++工程师 — Engine Core",
          period: "2023 — 至今",
          points: [
            "跨平台C++引擎开发",
            "性能优化和系统架构",
            "工具和流水线开发",
          ],
        },
      ],
      education: [
        {
          school: "白俄罗斯国立大学 (RFCT)",
          degree: "学士学位",
          period: "2021 — 2025",
          honors: "年度学生、荣誉榜、萨哈罗夫奖学金",
        },
      ],
      skills: ["C++", "C", "Python", "Lua", "Engine Architecture", "Godot", "Unreal Engine", "Networking", "Cross-Platform"],
      links: {
        github: "https://github.com/e-gleba",
        linkedin: "https://linkedin.com/in/makar-klochko",
        website: "https://e-gleba.github.io",
      },
    },
  },
};
