/* ============================================================
   i18n TRANSLATIONS
   Языки: ru (по умолчанию), en, de, pl, cs, ro, bg.
   Тексты проектов лежат в projects.js (там же заголовки и описания).
   ============================================================ */

const TRANSLATIONS = {
  ru: {
    lang: "ru",
    flag: "🇷🇺",
    code: "RU",
    title: "Максим Попков | Инженер-практик и разработчик",
    meta: "Инженер-практик с опытом в электротехнике и автоматике. Проекты на TypeScript, Node.js, Python и для радио/SDR.",
    logo: "Максим Попков",
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      process: "Процесс",
      faq: "FAQ",
      contact: "Контакты"
    },
    hero: {
      greeting: "Привет, я",
      name: "Максим Попков",
      subtitle: "Опыт в тяжёлой электротехнике и автоматике.<br>Решаю прикладные задачи через код.",
      cta1: "Смотреть проекты",
      cta2: "Связаться со мной",
      scroll: "Прокрутите вниз",
      role: "Инженер-практик · электротехника, автоматика, код"
    },
    stats: {
      s1: "Проектов в портфолио",
      s2: "Онлайн-демо",
      s3: "Открытых репозиториев",
      s4: "Языков сайта"
    },
    about: {
      title: "Обо мне",
      p1: "Я — Максим Попков, инженер-практик. Мой опыт — тяжёлая электротехника и автоматика: схемы, оборудование, эксплуатация. Сейчас решаю прикладные задачи через код: если нужного инструмента нет, пишу его сам.",
      p2: "Разработку веду вместе с AI-ассистентами (vibe coding): формулирую задачу, настраиваю агентов и пайплайны, а результат проверяю тестами и вручную. Пишу на TypeScript / Node.js и на базовом уровне на Python, поднимаю сервисы на Linux. Особенно интересно там, где софт встречается с железом — SDR и радио.",
      cta: "Написать мне",
      p3: "Большинство проектов ниже — личные и учебные. В каждой карточке указан статус: что-то работает онлайн, что-то запускается только локально, а что-то ещё в разработке."
    },
    tech: {
      title: "Технологии"
    },
    process: {
      title: "Подход к работе",
      steps: [
        {
          title: "Анализ",
          desc: "Требования, схемы и оборудование: что нужно получить и в какой среде это будет работать."
        },
        {
          title: "Прототип и разработка",
          desc: "Софт, скрипты, автоматика. Сначала рабочий прототип, затем доработка."
        },
        {
          title: "Тестирование и интеграция",
          desc: "Отладка и проверка в реальной среде, подключение к оборудованию и сервисам."
        },
        {
          title: "Ввод в эксплуатацию",
          desc: "Запуск и документирование: схемы, инструкции, описание настроек."
        }
      ]
    },
    projects: {
      title: "Проекты",
      demo: "Демо",
      code: "GitHub",
      close: "Закрыть",
      downloadApk: "Скачать APK",
      telegram: "Telegram",
      filters: {
        all: "Все",
        radio: "Радио и электроника",
        backend: "Бэкенд и автоматизация",
        learn: "Обучение",
        apps: "Приложения"
      },
      status: {
        live: "Онлайн-демо",
        local: "Локальный запуск",
        alpha: "Alpha"
      },
      noLinks: "Публичного демо и исходников нет."
    },
    faq: {
      title: "Частые вопросы (FAQ)",
      items: [
        {
          q: "Какой профиль работы?",
          a: "Железо и софт: тяжёлая электротехника и автоматика плюс код — скрипты, сервисы, боты, веб-приложения и связка ПО с оборудованием (SDR, радио)."
        },
        {
          q: "Релокация и выход на работу?",
          a: "Да, рассматриваю релокацию и выход на работу. Страну, сроки и условия обсуждаю в личной переписке."
        },
        {
          q: "Как связаться?",
          a: "Через Telegram (@MaximLive12) или форму в разделе «Контакты»."
        }
      ]
    },
    contact: {
      tgBtn: "Написать в Telegram",
      writeLabel: "Обратная связь",
      writeBtn: "Написать сообщение",
      title: "Контакты",
      intro: "Рассматриваю предложения о работе и сотрудничестве. Напишите мне — отвечу.",
      social: "Социальные сети",
      form: {
        name: "Ваше имя",
        namePh: "Иван Иванов",
        message: "Сообщение",
        messagePh: "Расскажите о вашем проекте...",
        submit: "Отправить сообщение",
        success: "✅ Сообщение отправлено! Скоро свяжусь с вами."
      }
    },
    footer: {
      rights: "Все права защищены."
    },
    skills: {
      title: "Навыки",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Промпт-инжиниринг, автономные пайплайны, агенты. Результат проверяю тестами и вручную."
        },
        {
          tag: "Python",
          title: "Python (базовый прикладной)",
          desc: "Скрипты, парсинг, небольшие бэкенды."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Сервисы, боты, веб-приложения на React и Next.js."
        },
        {
          tag: "Linux",
          title: "Linux-серверы",
          desc: "Manjaro, PM2, Git — запуск и поддержка собственных сервисов."
        },
        {
          tag: "SDR",
          title: "SDR / радио и железо",
          desc: "Связка софта с оборудованием: приёмники, декодеры, шлюзы."
        }
      ]
    }
  },
  en: {
    lang: "en",
    flag: "🇬🇧",
    code: "EN",
    title: "Maksym Popkov | Practical engineer & developer",
    meta: "Practical engineer with a background in electrical engineering and automation. Projects in TypeScript, Node.js, Python and radio/SDR.",
    logo: "Maksym Popkov",
    nav: {
      about: "About",
      projects: "Projects",
      process: "Process",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Maksym Popkov",
      subtitle: "Background in heavy-current electrical engineering and automation.<br>I solve practical problems with code.",
      cta1: "View projects",
      cta2: "Get in touch",
      scroll: "Scroll down",
      role: "Practical engineer · electrical, automation, code"
    },
    stats: {
      s1: "Projects in portfolio",
      s2: "Live demos",
      s3: "Public repositories",
      s4: "Site languages"
    },
    about: {
      title: "About me",
      p1: "I'm Maksym Popkov, a practical engineer. My background is heavy-current electrical engineering and automation: schematics, equipment, operation. Today I solve practical problems with code — if the tool I need doesn't exist, I build it.",
      p2: "I develop together with AI assistants (vibe coding): I define the task, set up agents and pipelines, then check the result with tests and by hand. I write TypeScript / Node.js and basic Python, and run services on Linux. I'm especially interested where software meets hardware — SDR and radio.",
      cta: "Write to me",
      p3: "Most projects below are personal or educational. Each card shows its status: some run online, some only locally, and some are still in development."
    },
    tech: {
      title: "Technologies"
    },
    process: {
      title: "How I Work",
      steps: [
        {
          title: "Analysis",
          desc: "Requirements, schematics and equipment: what is needed and where it will run."
        },
        {
          title: "Prototype & development",
          desc: "Software, scripts, automation. A working prototype first, then refinement."
        },
        {
          title: "Testing & integration",
          desc: "Debugging and checking in the real environment, connecting to equipment and services."
        },
        {
          title: "Commissioning",
          desc: "Launch and documentation: schematics, instructions, configuration notes."
        }
      ]
    },
    projects: {
      title: "Projects",
      demo: "Demo",
      code: "GitHub",
      close: "Close",
      downloadApk: "Download APK",
      telegram: "Telegram",
      filters: {
        all: "All",
        radio: "Radio & electronics",
        backend: "Backend & automation",
        learn: "Learning",
        apps: "Apps"
      },
      status: {
        live: "Live demo",
        local: "Runs locally",
        alpha: "Alpha"
      },
      noLinks: "No public demo or source."
    },
    faq: {
      title: "Frequently Asked Questions (FAQ)",
      items: [
        {
          q: "What is your work profile?",
          a: "Hardware and software: heavy-current electrical engineering and automation plus code — scripts, services, bots, web apps and software tied to equipment (SDR, radio)."
        },
        {
          q: "Relocation and start date?",
          a: "Yes, I'm open to relocation and to starting a new job. Country, timing and terms I discuss in private."
        },
        {
          q: "How to get in touch?",
          a: "Via Telegram (@MaximLive12) or the form in the Contact section."
        }
      ]
    },
    contact: {
      tgBtn: "Message on Telegram",
      writeLabel: "Contact",
      writeBtn: "Send a Message",
      title: "Contact",
      intro: "Open to job offers and collaboration. Write to me — I'll reply.",
      social: "Social media",
      form: {
        name: "Your name",
        namePh: "John Doe",
        message: "Message",
        messagePh: "Tell me about your project...",
        submit: "Send message",
        success: "✅ Message sent! I will get back to you soon."
      }
    },
    footer: {
      rights: "All rights reserved."
    },
    skills: {
      title: "Skills",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt engineering, autonomous pipelines, agents. I verify the result with tests and by hand."
        },
        {
          tag: "Python",
          title: "Python (basic, applied)",
          desc: "Scripts, parsing, small backends."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Services, bots, web apps with React and Next.js."
        },
        {
          tag: "Linux",
          title: "Linux servers",
          desc: "Manjaro, PM2, Git — running and maintaining my own services."
        },
        {
          tag: "SDR",
          title: "SDR / radio & hardware",
          desc: "Tying software to equipment: receivers, decoders, gateways."
        }
      ]
    }
  },
  de: {
    lang: "de",
    flag: "🇩🇪",
    code: "DE",
    title: "Maksym Popkov | Ingenieur aus der Praxis & Entwickler",
    meta: "Ingenieur aus der Praxis mit Erfahrung in Elektrotechnik und Automatisierung. Projekte in TypeScript, Node.js, Python sowie Funk/SDR.",
    logo: "Maksym Popkov",
    nav: {
      about: "Über mich",
      projects: "Projekte",
      process: "Prozess",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Maksym Popkov",
      subtitle: "Erfahrung in Starkstromtechnik und Automatisierung.<br>Ich löse praktische Aufgaben mit Code.",
      cta1: "Projekte ansehen",
      cta2: "Kontakt aufnehmen",
      scroll: "Nach unten scrollen",
      role: "Praxis-Ingenieur · Elektrotechnik, Automatisierung, Code"
    },
    stats: {
      s1: "Projekte im Portfolio",
      s2: "Live-Demos",
      s3: "Öffentliche Repos",
      s4: "Sprachen der Seite"
    },
    about: {
      title: "Über mich",
      p1: "Ich bin Maksym Popkov, Ingenieur aus der Praxis. Mein Hintergrund ist Starkstromtechnik und Automatisierung: Schaltpläne, Anlagen, Betrieb. Heute löse ich praktische Aufgaben mit Code – wenn es das passende Werkzeug nicht gibt, schreibe ich es selbst.",
      p2: "Ich entwickle gemeinsam mit KI-Assistenten (Vibe Coding): Ich formuliere die Aufgabe, richte Agenten und Pipelines ein und prüfe das Ergebnis mit Tests und von Hand. Ich schreibe TypeScript / Node.js und Python auf Grundniveau und betreibe Dienste unter Linux. Besonders spannend finde ich, wo Software auf Hardware trifft – SDR und Funk.",
      cta: "Schreib mir",
      p3: "Die meisten Projekte unten sind private oder Lernprojekte. Jede Karte zeigt den Status: manche laufen online, manche nur lokal, manche sind noch in Entwicklung."
    },
    tech: {
      title: "Technologien"
    },
    process: {
      title: "Arbeitsweise",
      steps: [
        {
          title: "Analyse",
          desc: "Anforderungen, Schaltpläne und Anlagen: Was gebraucht wird und wo es laufen soll."
        },
        {
          title: "Prototyp & Entwicklung",
          desc: "Software, Skripte, Automatisierung. Erst ein funktionierender Prototyp, dann der Feinschliff."
        },
        {
          title: "Test & Integration",
          desc: "Fehlersuche und Prüfung in der realen Umgebung, Anbindung an Geräte und Dienste."
        },
        {
          title: "Inbetriebnahme",
          desc: "Start und Dokumentation: Schaltpläne, Anleitungen, Konfigurationsbeschreibung."
        }
      ]
    },
    projects: {
      title: "Projekte",
      demo: "Demo",
      code: "GitHub",
      close: "Schließen",
      downloadApk: "APK herunterladen",
      telegram: "Telegram",
      filters: {
        all: "Alle",
        radio: "Funk & Elektronik",
        backend: "Backend & Automatisierung",
        learn: "Lernen",
        apps: "Apps"
      },
      status: {
        live: "Live-Demo",
        local: "Läuft lokal",
        alpha: "Alpha"
      },
      noLinks: "Keine öffentliche Demo oder Quelle."
    },
    faq: {
      title: "Häufig gestellte Fragen (FAQ)",
      items: [
        {
          q: "Welches Arbeitsprofil?",
          a: "Hardware und Software: Starkstromtechnik und Automatisierung plus Code – Skripte, Dienste, Bots, Web-Apps und die Anbindung von Software an Geräte (SDR, Funk)."
        },
        {
          q: "Umzug und Arbeitsbeginn?",
          a: "Ja, ein Umzug und eine neue Stelle kommen für mich in Frage. Land, Zeitpunkt und Bedingungen besprechen wir persönlich."
        },
        {
          q: "Wie kann man Kontakt aufnehmen?",
          a: "Über Telegram (@MaximLive12) oder das Formular im Bereich „Kontakt“."
        }
      ]
    },
    contact: {
      tgBtn: "Auf Telegram schreiben",
      writeLabel: "Kontakt",
      writeBtn: "Nachricht senden",
      title: "Kontakt",
      intro: "Jobangebote und Zusammenarbeit sind willkommen. Schreib mir — ich antworte.",
      social: "Soziale Medien",
      form: {
        name: "Ihr Name",
        namePh: "Max Mustermann",
        message: "Nachricht",
        messagePh: "Erzählen Sie mir von Ihrem Projekt...",
        submit: "Nachricht senden",
        success: "✅ Nachricht gesendet! Ich melde mich bald."
      }
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    },
    skills: {
      title: "Fähigkeiten",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt Engineering, autonome Pipelines, Agenten. Das Ergebnis prüfe ich mit Tests und von Hand."
        },
        {
          tag: "Python",
          title: "Python (Grundlagen, angewandt)",
          desc: "Skripte, Parsing, kleine Backends."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Dienste, Bots, Web-Apps mit React und Next.js."
        },
        {
          tag: "Linux",
          title: "Linux-Server",
          desc: "Manjaro, PM2, Git – Betrieb und Pflege eigener Dienste."
        },
        {
          tag: "SDR",
          title: "SDR / Funk & Hardware",
          desc: "Software mit Geräten verbinden: Empfänger, Decoder, Gateways."
        }
      ]
    }
  },
  pl: {
    lang: "pl",
    flag: "🇵🇱",
    code: "PL",
    title: "Maksym Popkov | Inżynier-praktyk i programista",
    meta: "Inżynier-praktyk z doświadczeniem w elektrotechnice i automatyce. Projekty w TypeScript, Node.js, Pythonie oraz radio/SDR.",
    logo: "Maksym Popkov",
    nav: {
      about: "O mnie",
      projects: "Projekty",
      process: "Proces",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Cześć, jestem",
      name: "Maksym Popkov",
      subtitle: "Doświadczenie w elektrotechnice silnoprądowej i automatyce.<br>Rozwiązuję praktyczne problemy kodem.",
      cta1: "Zobacz projekty",
      cta2: "Skontaktuj się",
      scroll: "Przewiń w dół",
      role: "Inżynier-praktyk · elektrotechnika, automatyka, kod"
    },
    stats: {
      s1: "Projektów w portfolio",
      s2: "Dema online",
      s3: "Publicznych repozytoriów",
      s4: "Języków strony"
    },
    about: {
      title: "O mnie",
      p1: "Nazywam się Maksym Popkov — inżynier-praktyk. Doświadczenie w elektrotechnice silnoprądowej i automatyce: schematy, urządzenia, eksploatacja. Dziś rozwiązuję praktyczne problemy kodem — jeśli potrzebnego narzędzia nie ma, piszę je samodzielnie.",
      p2: "Rozwijam oprogramowanie razem z asystentami AI (vibe coding): formułuję zadanie, konfiguruję agentów i pipeline'y, a wynik sprawdzam testami i ręcznie. Piszę w TypeScript / Node.js oraz w Pythonie na poziomie podstawowym, uruchamiam usługi na Linuksie. Najbardziej interesuje mnie styk oprogramowania ze sprzętem — SDR i radio.",
      cta: "Napisz do mnie",
      p3: "Większość projektów poniżej to projekty osobiste i edukacyjne. Na każdej karcie jest status: część działa online, część tylko lokalnie, a część jest jeszcze w trakcie tworzenia."
    },
    tech: {
      title: "Technologie"
    },
    process: {
      title: "Sposób pracy",
      steps: [
        {
          title: "Analiza",
          desc: "Wymagania, schematy i sprzęt: czego potrzeba i gdzie to będzie działać."
        },
        {
          title: "Prototyp i rozwój",
          desc: "Oprogramowanie, skrypty, automatyka. Najpierw działający prototyp, potem dopracowanie."
        },
        {
          title: "Testy i integracja",
          desc: "Diagnostyka i sprawdzanie w rzeczywistym środowisku, podłączenie do urządzeń i usług."
        },
        {
          title: "Uruchomienie",
          desc: "Start i dokumentacja: schematy, instrukcje, opis konfiguracji."
        }
      ]
    },
    projects: {
      title: "Projekty",
      demo: "Demo",
      code: "GitHub",
      close: "Zamknij",
      downloadApk: "Pobierz APK",
      telegram: "Telegram",
      filters: {
        all: "Wszystkie",
        radio: "Radio i elektronika",
        backend: "Backend i automatyzacja",
        learn: "Nauka",
        apps: "Aplikacje"
      },
      status: {
        live: "Demo online",
        local: "Uruchamiane lokalnie",
        alpha: "Alpha"
      },
      noLinks: "Brak publicznego dema i kodu."
    },
    faq: {
      title: "Często zadawane pytania (FAQ)",
      items: [
        {
          q: "Jaki jest profil pracy?",
          a: "Sprzęt i oprogramowanie: elektrotechnika silnoprądowa i automatyka plus kod — skrypty, usługi, boty, aplikacje webowe oraz łączenie oprogramowania ze sprzętem (SDR, radio)."
        },
        {
          q: "Relokacja i rozpoczęcie pracy?",
          a: "Tak, rozważam relokację i podjęcie pracy. Kraj, termin i warunki omawiam w rozmowie prywatnej."
        },
        {
          q: "Jak się skontaktować?",
          a: "Przez Telegram (@MaximLive12) lub formularz w sekcji „Kontakt”."
        }
      ]
    },
    contact: {
      tgBtn: "Napisz na Telegramie",
      writeLabel: "Kontakt",
      writeBtn: "Napisz wiadomość",
      title: "Kontakt",
      intro: "Propozycje pracy i współpracy są mile widziane. Napisz do mnie — odpowiem.",
      social: "Media społecznościowe",
      form: {
        name: "Twoje imię",
        namePh: "Jan Kowalski",
        message: "Wiadomość",
        messagePh: "Opowiedz mi o swoim projekcie...",
        submit: "Wyślij wiadomość",
        success: "✅ Wiadomość wysłana! Wkrótce się odezwę."
      }
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone."
    },
    skills: {
      title: "Umiejętności",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt engineering, autonomiczne pipeline'y, agenci. Wynik sprawdzam testami i ręcznie."
        },
        {
          tag: "Python",
          title: "Python (podstawowy, praktyczny)",
          desc: "Skrypty, parsowanie, małe backendy."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Usługi, boty, aplikacje webowe w React i Next.js."
        },
        {
          tag: "Linux",
          title: "Serwery Linux",
          desc: "Manjaro, PM2, Git — uruchamianie i utrzymanie własnych usług."
        },
        {
          tag: "SDR",
          title: "SDR / radio i sprzęt",
          desc: "Łączenie oprogramowania ze sprzętem: odbiorniki, dekodery, bramki."
        }
      ]
    }
  },
  cs: {
    lang: "cs",
    flag: "🇨🇿",
    code: "CS",
    title: "Maksym Popkov | Inženýr-praktik a vývojář",
    meta: "Inženýr-praktik se zkušenostmi z elektrotechniky a automatizace. Projekty v TypeScriptu, Node.js, Pythonu a rádio/SDR.",
    logo: "Maksym Popkov",
    nav: {
      about: "O mně",
      projects: "Projekty",
      process: "Proces",
      faq: "FAQ",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Ahoj, jsem",
      name: "Maksym Popkov",
      subtitle: "Zkušenosti ze silnoproudé elektrotechniky a automatizace.<br>Praktické úlohy řeším kódem.",
      cta1: "Zobrazit projekty",
      cta2: "Napište mi",
      scroll: "Přejděte dolů",
      role: "Inženýr-praktik · elektrotechnika, automatizace, kód"
    },
    stats: {
      s1: "Projektů v portfoliu",
      s2: "Online dema",
      s3: "Veřejných repozitářů",
      s4: "Jazyků webu"
    },
    about: {
      title: "O mně",
      p1: "Jmenuji se Maksym Popkov — inženýr-praktik. Zkušenosti ze silnoproudé elektrotechniky a automatizace: schémata, zařízení, provoz. Dnes řeším praktické úlohy kódem — pokud potřebný nástroj neexistuje, napíšu si ho samostatně.",
      p2: "Vývoj vedu spolu s AI asistenty (vibe coding): zadám úkol, nastavím agenty a pipeline a výsledek ověřuji testy i ručně. Píšu v TypeScriptu / Node.js a v Pythonu na základní úrovni, služby provozuji na Linuxu. Nejvíc mě zajímá místo, kde se software potkává s hardwarem — SDR a rádio.",
      cta: "Napište mi",
      p3: "Většina projektů níže je osobních nebo studijních. Každá karta uvádí stav: něco běží online, něco jen lokálně a něco je ještě ve vývoji."
    },
    tech: {
      title: "Technologie"
    },
    process: {
      title: "Způsob práce",
      steps: [
        {
          title: "Analýza",
          desc: "Požadavky, schémata a zařízení: co je potřeba a kde to poběží."
        },
        {
          title: "Prototyp a vývoj",
          desc: "Software, skripty, automatizace. Nejdřív funkční prototyp, potom dolaďování."
        },
        {
          title: "Testování a integrace",
          desc: "Ladění a ověření v reálném prostředí, napojení na zařízení a služby."
        },
        {
          title: "Uvedení do provozu",
          desc: "Spuštění a dokumentace: schémata, návody, popis nastavení."
        }
      ]
    },
    projects: {
      title: "Projekty",
      demo: "Demo",
      code: "GitHub",
      close: "Zavřít",
      downloadApk: "Stáhnout APK",
      telegram: "Telegram",
      filters: {
        all: "Vše",
        radio: "Rádio a elektronika",
        backend: "Backend a automatizace",
        learn: "Výuka",
        apps: "Aplikace"
      },
      status: {
        live: "Online demo",
        local: "Spouští se lokálně",
        alpha: "Alpha"
      },
      noLinks: "Veřejné demo ani zdrojové kódy nejsou."
    },
    faq: {
      title: "Často kladené dotazy (FAQ)",
      items: [
        {
          q: "Jaký je pracovní profil?",
          a: "Hardware i software: silnoproudá elektrotechnika a automatizace plus kód — skripty, služby, boti, webové aplikace a propojení softwaru se zařízeními (SDR, rádio)."
        },
        {
          q: "Relokace a nástup do práce?",
          a: "Ano, o relokaci a nástupu do práce uvažuji. Zemi, termín a podmínky probírám v soukromé komunikaci."
        },
        {
          q: "Jak se spojit?",
          a: "Přes Telegram (@MaximLive12) nebo formulář v sekci „Kontakt“."
        }
      ]
    },
    contact: {
      tgBtn: "Napsat na Telegram",
      writeLabel: "Kontakt",
      writeBtn: "Napsat zprávu",
      title: "Kontakt",
      intro: "Nabídky práce a spolupráce jsou vítány. Napište mi — odpovím.",
      social: "Sociální sítě",
      form: {
        name: "Vaše jméno",
        namePh: "Jan Novák",
        message: "Zpráva",
        messagePh: "Řekněte mi o svém projektu...",
        submit: "Odeslat zprávu",
        success: "✅ Zpráva odeslána! Brzy se ozvu."
      }
    },
    footer: {
      rights: "Všechna práva vyhrazena."
    },
    skills: {
      title: "Dovednosti",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt engineering, autonomní pipeline, agenti. Výsledek ověřuji testy i ručně."
        },
        {
          tag: "Python",
          title: "Python (základní, aplikovaný)",
          desc: "Skripty, parsování, malé backendy."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Služby, boti, webové aplikace v Reactu a Next.js."
        },
        {
          tag: "Linux",
          title: "Linuxové servery",
          desc: "Manjaro, PM2, Git — provoz a správa vlastních služeb."
        },
        {
          tag: "SDR",
          title: "SDR / rádio a hardware",
          desc: "Propojení softwaru se zařízeními: přijímače, dekodéry, brány."
        }
      ]
    }
  },
  ro: {
    lang: "ro",
    flag: "🇷🇴",
    code: "RO",
    title: "Maksym Popkov | Inginer practician și dezvoltator",
    meta: "Inginer practician cu experiență în electrotehnică și automatizări. Proiecte în TypeScript, Node.js, Python și radio/SDR.",
    logo: "Maksym Popkov",
    nav: {
      about: "Despre mine",
      projects: "Proiecte",
      process: "Proces",
      faq: "FAQ",
      contact: "Contact"
    },
    hero: {
      greeting: "Bună, eu sunt",
      name: "Maksym Popkov",
      subtitle: "Experiență în electrotehnică de curenți tari și automatizări.<br>Rezolv probleme practice prin cod.",
      cta1: "Vezi proiectele",
      cta2: "Contactează-mă",
      scroll: "Derulați în jos",
      role: "Inginer practician · electrotehnică, automatizări, cod"
    },
    stats: {
      s1: "Proiecte în portofoliu",
      s2: "Demo-uri online",
      s3: "Repo-uri publice",
      s4: "Limbi ale site-ului"
    },
    about: {
      title: "Despre mine",
      p1: "Sunt Maksym Popkov, inginer practician. Experiență în electrotehnică de curenți tari și automatizări: scheme, echipamente, exploatare. Azi rezolv probleme practice prin cod — dacă unealta de care am nevoie nu există, o creez de la zero.",
      p2: "Dezvolt împreună cu asistenți AI (vibe coding): formulez sarcina, configurez agenți și pipeline-uri, apoi verific rezultatul cu teste și manual. Scriu TypeScript / Node.js și Python la nivel de bază și administrez servicii pe Linux. Mă interesează mai ales locul unde software-ul întâlnește hardware-ul — SDR și radio.",
      cta: "Scrie-mi",
      p3: "Majoritatea proiectelor de mai jos sunt personale sau de învățare. Fiecare card arată starea: unele rulează online, altele doar local, iar altele sunt încă în dezvoltare."
    },
    tech: {
      title: "Tehnologii"
    },
    process: {
      title: "Mod de lucru",
      steps: [
        {
          title: "Analiză",
          desc: "Cerințe, scheme și echipamente: ce trebuie obținut și unde va funcționa."
        },
        {
          title: "Prototip și dezvoltare",
          desc: "Software, scripturi, automatizare. Mai întâi un prototip funcțional, apoi rafinare."
        },
        {
          title: "Testare și integrare",
          desc: "Depanare și verificare în mediul real, conectare la echipamente și servicii."
        },
        {
          title: "Punere în funcțiune",
          desc: "Lansare și documentare: scheme, instrucțiuni, descrierea configurației."
        }
      ]
    },
    projects: {
      title: "Proiecte",
      demo: "Demo",
      code: "GitHub",
      close: "Închide",
      downloadApk: "Descarcă APK",
      telegram: "Telegram",
      filters: {
        all: "Toate",
        radio: "Radio și electronică",
        backend: "Backend și automatizare",
        learn: "Învățare",
        apps: "Aplicații"
      },
      status: {
        live: "Demo online",
        local: "Rulează local",
        alpha: "Alpha"
      },
      noLinks: "Fără demo public sau cod sursă."
    },
    faq: {
      title: "Întrebări frecvente (FAQ)",
      items: [
        {
          q: "Care este profilul de lucru?",
          a: "Hardware și software: electrotehnică de curenți tari și automatizări plus cod — scripturi, servicii, boți, aplicații web și legarea software-ului de echipamente (SDR, radio)."
        },
        {
          q: "Relocare și începerea lucrului?",
          a: "Da, iau în considerare relocarea și începerea unui loc de muncă. Țara, termenul și condițiile le discut în privat."
        },
        {
          q: "Cum se poate lua legătura?",
          a: "Prin Telegram (@MaximLive12) sau prin formularul din secțiunea „Contact”."
        }
      ]
    },
    contact: {
      tgBtn: "Scrie-mi pe Telegram",
      writeLabel: "Contact",
      writeBtn: "Trimite un mesaj",
      title: "Contact",
      intro: "Ofertele de muncă și colaborările sunt binevenite. Scrie-mi — răspund.",
      social: "Rețele sociale",
      form: {
        name: "Numele tău",
        namePh: "Ion Popescu",
        message: "Mesaj",
        messagePh: "Spune-mi despre proiectul tău...",
        submit: "Trimite mesajul",
        success: "✅ Mesaj trimis! Revin în curând."
      }
    },
    footer: {
      rights: "Toate drepturile rezervate."
    },
    skills: {
      title: "Abilități",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt engineering, pipeline-uri autonome, agenți. Verific rezultatul cu teste și manual."
        },
        {
          tag: "Python",
          title: "Python (de bază, aplicat)",
          desc: "Scripturi, parsare, backend-uri mici."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Servicii, boți, aplicații web cu React și Next.js."
        },
        {
          tag: "Linux",
          title: "Servere Linux",
          desc: "Manjaro, PM2, Git — rulare și întreținere pentru serviciile proprii."
        },
        {
          tag: "SDR",
          title: "SDR / radio și hardware",
          desc: "Legarea software-ului de echipamente: receptoare, decodoare, gateway-uri."
        }
      ]
    }
  },
  bg: {
    lang: "bg",
    flag: "🇧🇬",
    code: "BG",
    logo: "Максим Попков",
    nav: {
      about: "За мен",
      projects: "Проекти",
      process: "Процес",
      faq: "FAQ",
      contact: "Контакти"
    },
    hero: {
      greeting: "Здравейте, аз съм",
      cta1: "Вижте проектите",
      cta2: "Свържете се с мен",
      scroll: "Превъртете надолу",
      name: "Максим Попков",
      role: "Инженер-практик · електротехника, автоматика, код",
      subtitle: "Опит в силнотокова електротехника и автоматика.<br>Решавам практични задачи чрез код."
    },
    about: {
      title: "За мен",
      cta: "Пишете ми",
      p1: "Аз съм Максим Попков, инженер-практик. Опит в силнотокова електротехника и автоматика: схеми, оборудване, експлоатация. Днес решавам практични задачи чрез код — ако няма подходящ инструмент, го създавам от нулата.",
      p2: "Разработвам заедно с AI асистенти (vibe coding): формулирам задачата, настройвам агенти и пайплайни, а резултата проверявам с тестове и на ръка. Пиша на TypeScript / Node.js и на базово ниво на Python, поддържам услуги на Linux. Особено ми е интересно там, където софтуерът среща хардуера — SDR и радио.",
      p3: "Повечето проекти по-долу са лични или учебни. Всяка карта показва статус: някои работят онлайн, други само локално, а трети са още в разработка."
    },
    tech: {
      title: "Технологии"
    },
    process: {
      title: "Начин на работа",
      steps: [
        {
          title: "Анализ",
          desc: "Изисквания, схеми и оборудване: какво е нужно и къде ще работи."
        },
        {
          title: "Прототип и разработка",
          desc: "Софтуер, скриптове, автоматика. Първо работещ прототип, после доработка."
        },
        {
          title: "Тестване и интеграция",
          desc: "Отстраняване на грешки и проверка в реална среда, свързване с оборудване и услуги."
        },
        {
          title: "Пускане в експлоатация",
          desc: "Старт и документиране: схеми, инструкции, описание на настройките."
        }
      ]
    },
    projects: {
      title: "Проекти",
      demo: "Демо",
      code: "GitHub",
      close: "Затвори",
      downloadApk: "Изтегли APK",
      telegram: "Telegram",
      filters: {
        all: "Всички",
        radio: "Радио и електроника",
        backend: "Бекенд и автоматизация",
        learn: "Обучение",
        apps: "Приложения"
      },
      status: {
        live: "Онлайн демо",
        local: "Локално стартиране",
        alpha: "Alpha"
      },
      noLinks: "Няма публично демо или код."
    },
    faq: {
      title: "Чести въпроси (FAQ)",
      items: [
        {
          q: "Какъв е профилът на работа?",
          a: "Хардуер и софтуер: силнотокова електротехника и автоматика плюс код — скриптове, услуги, ботове, уеб приложения и свързване на софтуер с оборудване (SDR, радио)."
        },
        {
          q: "Релокация и начало на работа?",
          a: "Да, обмислям релокация и започване на работа. Държавата, срока и условията обсъждам в лична кореспонденция."
        },
        {
          q: "Как да се свържем?",
          a: "През Telegram (@MaximLive12) или формата в раздел „Контакти“."
        }
      ]
    },
    contact: {
      tgBtn: "Пишете в Telegram",
      writeLabel: "Обратна връзка",
      writeBtn: "Напишете съобщение",
      title: "Контакти",
      intro: "Предложения за работа и сътрудничество са добре дошли. Пишете ми — ще отговоря.",
      social: "Социални мрежи",
      form: {
        name: "Вашето име",
        namePh: "Иван Иванов",
        message: "Съобщение",
        messagePh: "Разкажете ми за вашия проект...",
        submit: "Изпрати съобщение",
        success: "✅ Съобщението е изпратено! Скоро ще се свържа с вас."
      }
    },
    footer: {
      rights: "Всички права запазени."
    },
    title: "Максим Попков | Инженер-практик и разработчик",
    meta: "Инженер-практик с опит в електротехниката и автоматиката. Проекти на TypeScript, Node.js, Python и за радио/SDR.",
    stats: {
      s1: "Проекти в портфолиото",
      s2: "Онлайн демота",
      s3: "Публични репозитории",
      s4: "Езика на сайта"
    },
    skills: {
      title: "Умения",
      items: [
        {
          tag: "AI",
          title: "Vibe Coding & AI-assisted development",
          desc: "Prompt engineering, автономни пайплайни, агенти. Резултата проверявам с тестове и на ръка."
        },
        {
          tag: "Python",
          title: "Python (базов, приложен)",
          desc: "Скриптове, парсване, малки бекенди."
        },
        {
          tag: "JS / TS",
          title: "Node.js / TypeScript",
          desc: "Услуги, ботове, уеб приложения с React и Next.js."
        },
        {
          tag: "Linux",
          title: "Linux сървъри",
          desc: "Manjaro, PM2, Git — стартиране и поддръжка на собствени услуги."
        },
        {
          tag: "SDR",
          title: "SDR / радио и хардуер",
          desc: "Свързване на софтуер с оборудване: приемници, декодери, шлюзове."
        }
      ]
    }
  }
};
