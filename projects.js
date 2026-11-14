/* ============================================================
   PROJECTS DATA
   Источник правды для карточек и модальных окон портфолио.

   Поля:
     id      — уникальный slug
     cat     — категории для фильтра: radio | backend | learn | apps
     img     — превью (скриншот 1280×720 или техническое превью «схема/терминал»)
     status  — live (есть онлайн-демо) | local (запускается локально) | alpha (в разработке)
     tags    — стек
     links   — только проверенные ссылки: demo, github, apk, telegram
     title   — строка или { ru, en, bg, ... } (запасной вариант — en)
     desc    — описание по языкам: ru, en, de, pl, cs, ro, bg

   Ссылки на GitHub есть только у публичных репозиториев.
   ============================================================ */

const GH = 'https://github.com/Makarych12/';

const PROJECTS = [
  /* ───────── Радио и электроника ───────── */
  {
    id: 'websdr', cat: ['radio', 'apps'], img: 'images/proj-websdr.jpg', status: 'live',
    tags: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'KiwiSDR', 'WebGL2', 'PWA'],
    links: { demo: 'https://web-sdr.vercel.app/' },
    title: 'UR4MTN WebSDR',
    desc: {
      ru: 'Веб-приёмник КВ-диапазона: React-клиент и Node.js WebSocket-шлюз к публичным KiwiSDR. Реальный звук (PCM), спектр и водопад на WebGL2, ввод частоты, режимы и фильтры, PWA. Имитации сигнала нет.',
      en: 'Browser-based HF receiver: a React client and a Node.js WebSocket gateway to public KiwiSDR receivers. Real PCM audio, WebGL2 spectrum and waterfall, frequency entry, modes and filters, PWA. No simulated signal.',
      de: 'Browserbasierter KW-Empfänger: React-Client und Node.js-WebSocket-Gateway zu öffentlichen KiwiSDR-Empfängern. Echter PCM-Ton, WebGL2-Spektrum und -Wasserfall, Frequenzeingabe, Modi und Filter, PWA. Kein simuliertes Signal.',
      pl: 'Przeglądarkowy odbiornik KF: klient React i bramka WebSocket w Node.js do publicznych odbiorników KiwiSDR. Prawdziwy dźwięk PCM, widmo i wodospad w WebGL2, wpisywanie częstotliwości, tryby i filtry, PWA. Bez symulowanego sygnału.',
      cs: 'Prohlížečový přijímač KV: klient v Reactu a WebSocket brána v Node.js k veřejným přijímačům KiwiSDR. Skutečný zvuk PCM, spektrum a vodopád ve WebGL2, zadávání kmitočtu, režimy a filtry, PWA. Žádný simulovaný signál.',
      ro: 'Receptor de unde scurte în browser: client React și gateway WebSocket în Node.js către receptoare KiwiSDR publice. Sunet PCM real, spectru și waterfall WebGL2, introducerea frecvenței, moduri și filtre, PWA. Fără semnal simulat.',
      bg: 'Късовълнов приемник в браузъра: React клиент и Node.js WebSocket шлюз към публични KiwiSDR приемници. Истински PCM звук, спектър и водопад с WebGL2, въвеждане на честота, режими и филтри, PWA. Без симулиран сигнал.',
    },
  },
  {
    id: 'hfdl', cat: ['radio', 'backend'], img: 'images/proj-hfdl.jpg', status: 'local',
    tags: ['Node.js', 'TypeScript', 'Express', 'WebSocket', 'dumphfdl', 'SDR'],
    links: {},
    title: 'hfdl-gateway',
    desc: {
      ru: 'Демон на Node.js/TypeScript: запускает dumphfdl, декодирует HFDL/HF-ACARS на 3–22 МГц, ведёт таблицу бортов в памяти и отдаёт её по REST и WebSocket (дельты). Источники — SoapySDR, KiwiSDR, TCP I/Q; перезапуск и watchdog.',
      en: 'A Node.js/TypeScript daemon that runs dumphfdl, decodes HFDL / HF-ACARS on 3–22 MHz, keeps a live flight table in memory and serves it over REST and WebSocket (deltas). Inputs: SoapySDR, KiwiSDR, TCP I/Q; respawn and watchdog included.',
      de: 'Node.js/TypeScript-Daemon: startet dumphfdl, dekodiert HFDL / HF-ACARS auf 3–22 MHz, hält eine Live-Flugtabelle im Speicher und liefert sie per REST und WebSocket (Deltas). Eingänge: SoapySDR, KiwiSDR, TCP-I/Q; mit Neustart und Watchdog.',
      pl: 'Demon w Node.js/TypeScript: uruchamia dumphfdl, dekoduje HFDL / HF-ACARS na 3–22 MHz, trzyma w pamięci tabelę statków powietrznych i udostępnia ją przez REST i WebSocket (delty). Wejścia: SoapySDR, KiwiSDR, TCP I/Q; restart i watchdog.',
      cs: 'Démon v Node.js/TypeScriptu: spouští dumphfdl, dekóduje HFDL / HF-ACARS na 3–22 MHz, drží v paměti tabulku letadel a nabízí ji přes REST a WebSocket (delty). Vstupy: SoapySDR, KiwiSDR, TCP I/Q; restart a watchdog.',
      ro: 'Daemon Node.js/TypeScript: pornește dumphfdl, decodează HFDL / HF-ACARS pe 3–22 MHz, păstrează în memorie tabelul aeronavelor și îl expune prin REST și WebSocket (delte). Surse: SoapySDR, KiwiSDR, TCP I/Q; repornire și watchdog.',
      bg: 'Демон на Node.js/TypeScript: стартира dumphfdl, декодира HFDL / HF-ACARS на 3–22 MHz, държи в паметта таблица на самолетите и я предоставя през REST и WebSocket (делти). Входове: SoapySDR, KiwiSDR, TCP I/Q; рестарт и watchdog.',
    },
  },
  {
    id: 'drm', cat: ['radio', 'backend'], img: 'images/proj-drm.jpg', status: 'local',
    tags: ['Python', 'Dream (DRM)', 'Opus', 'WebSocket', 'systemd', 'nginx'],
    links: {},
    title: { ru: 'DRM-приём для WebSDR', en: 'DRM reception for WebSDR' },
    desc: {
      ru: 'Фоновый сервис на Python: принимает I/Q через FIFO, запускает по одному декодеру Dream на канал (при первом слушателе, остановка по простою), кодирует звук в Opus и раздаёт по WebSocket. systemd, nginx, токен владельца. Проверено на живом эфире.',
      en: 'A Python background service: takes I/Q through a FIFO, runs one Dream decoder per channel (started on the first listener, stopped when idle), encodes audio to Opus and streams it over WebSocket. systemd, nginx, owner token. Verified on live air.',
      de: 'Python-Hintergrunddienst: nimmt I/Q über eine FIFO entgegen, startet pro Kanal einen Dream-Decoder (beim ersten Hörer, Stopp bei Leerlauf), kodiert Audio als Opus und streamt per WebSocket. systemd, nginx, Besitzer-Token. Am Live-Signal geprüft.',
      pl: 'Usługa w tle w Pythonie: odbiera I/Q przez FIFO, uruchamia po jednym dekoderze Dream na kanał (przy pierwszym słuchaczu, stop po bezczynności), koduje dźwięk do Opus i nadaje przez WebSocket. systemd, nginx, token właściciela. Sprawdzone na żywym eterze.',
      cs: 'Služba na pozadí v Pythonu: přebírá I/Q přes FIFO, spouští jeden dekodér Dream na kanál (při prvním posluchači, zastavení při nečinnosti), kóduje zvuk do Opusu a vysílá přes WebSocket. systemd, nginx, token vlastníka. Ověřeno na živém éteru.',
      ro: 'Serviciu de fundal în Python: primește I/Q printr-un FIFO, pornește câte un decodor Dream pe canal (la primul ascultător, oprire la inactivitate), codifică sunetul în Opus și îl transmite prin WebSocket. systemd, nginx, token de proprietar. Verificat pe semnal real.',
      bg: 'Фонова услуга на Python: приема I/Q през FIFO, стартира по един Dream декодер на канал (при първия слушател, спиране при неактивност), кодира звука в Opus и го предава през WebSocket. systemd, nginx, токен на собственика. Проверено на жив ефир.',
    },
  },
  {
    id: 'bot', cat: ['backend', 'radio'], img: 'images/proj-bot.jpg', status: 'local',
    tags: ['Node.js', 'grammY', 'IMAP', 'node-cron', 'PM2'],
    links: {},
    title: 'UR4MTN News Bot',
    desc: {
      ru: 'Telegram-бот на Node.js (grammY) для радиосообщества: собирает свежие материалы из RSS/HTML, готовит черновики по 10 темам и присылает админу в личку; в группу публикует только после кнопки «Опубликовать». Дополнительно разбирает почту по IMAP. Запуск под PM2.',
      en: 'A Node.js (grammY) Telegram bot for a radio community: collects fresh items from RSS/HTML, prepares drafts for 10 topics and sends them to the admin in DM; posts to the group only after a “Publish” button. Also classifies incoming mail over IMAP. Runs under PM2.',
      de: 'Telegram-Bot in Node.js (grammY) für eine Funk-Community: sammelt aktuelle Beiträge aus RSS/HTML, erstellt Entwürfe zu 10 Themen und schickt sie dem Admin privat; in die Gruppe wird erst nach Klick auf „Veröffentlichen“ gepostet. Prüft zusätzlich Mail per IMAP. Läuft unter PM2.',
      pl: 'Bot Telegram w Node.js (grammY) dla społeczności radiowej: zbiera świeże materiały z RSS/HTML, przygotowuje szkice do 10 tematów i wysyła je administratorowi prywatnie; na grupę publikuje dopiero po kliknięciu „Opublikuj”. Dodatkowo analizuje pocztę przez IMAP. Działa pod PM2.',
      cs: 'Telegram bot v Node.js (grammY) pro radioamatérskou komunitu: sbírá čerstvé články z RSS/HTML, připravuje koncepty k 10 tématům a posílá je správci soukromě; do skupiny publikuje až po kliknutí na „Publikovat“. Navíc třídí poštu přes IMAP. Běží pod PM2.',
      ro: 'Bot Telegram în Node.js (grammY) pentru o comunitate radio: adună materiale proaspete din RSS/HTML, pregătește ciorne pentru 10 teme și le trimite administratorului în privat; în grup publică doar după apăsarea butonului „Publică”. În plus, clasifică e-mailurile prin IMAP. Rulează sub PM2.',
      bg: 'Telegram бот на Node.js (grammY) за радио общност: събира свежи материали от RSS/HTML, подготвя чернови по 10 теми и ги изпраща на админа лично; в групата публикува само след бутона „Публикувай“. Освен това разпознава пощата през IMAP. Работи под PM2.',
    },
  },
  {
    id: 'agent', cat: ['backend'], img: 'images/proj-agent.jpg', status: 'local',
    tags: ['Node.js', 'TypeScript', 'Express', 'React', 'Playwright', 'Nodemailer'],
    links: {},
    title: 'Job HITL Agent',
    desc: {
      ru: 'Локальный инструмент для поиска вакансий в Австрии, Швейцарии и Германии: сбор вакансий и контактов, перевод, черновик письма на DE/EN — и ручное подтверждение перед любой отправкой. Express + React, Playwright, SMTP. Dry Run по умолчанию, защита от дублей.',
      en: 'A local tool for job hunting in Austria, Switzerland and Germany: collects listings and contacts, translates, drafts a DE/EN letter — and requires manual approval before anything is sent. Express + React, Playwright, SMTP. Dry Run by default, duplicate protection.',
      de: 'Lokales Werkzeug für die Jobsuche in Österreich, der Schweiz und Deutschland: sammelt Stellen und Kontakte, übersetzt, entwirft einen Brief auf DE/EN – und verlangt manuelle Freigabe vor jedem Versand. Express + React, Playwright, SMTP. Dry Run als Standard, Schutz vor Duplikaten.',
      pl: 'Lokalne narzędzie do szukania pracy w Austrii, Szwajcarii i Niemczech: zbiera oferty i kontakty, tłumaczy, przygotowuje list po niemiecku/angielsku — i wymaga ręcznego zatwierdzenia przed każdą wysyłką. Express + React, Playwright, SMTP. Domyślnie Dry Run, ochrona przed duplikatami.',
      cs: 'Lokální nástroj pro hledání práce v Rakousku, Švýcarsku a Německu: sbírá nabídky a kontakty, překládá, připraví dopis v DE/EN — a před každým odesláním vyžaduje ruční schválení. Express + React, Playwright, SMTP. Výchozí Dry Run, ochrana proti duplicitám.',
      ro: 'Instrument local pentru căutarea unui loc de muncă în Austria, Elveția și Germania: adună anunțuri și contacte, traduce, redactează o scrisoare în DE/EN — și cere aprobare manuală înainte de orice trimitere. Express + React, Playwright, SMTP. Dry Run implicit, protecție la duplicate.',
      bg: 'Локален инструмент за търсене на работа в Австрия, Швейцария и Германия: събира обяви и контакти, превежда, подготвя писмо на DE/EN — и изисква ръчно одобрение преди всяко изпращане. Express + React, Playwright, SMTP. По подразбиране Dry Run, защита от дубликати.',
    },
  },
  {
    id: 'schematics', cat: ['learn', 'apps'], img: 'images/proj-schematics.jpg', status: 'live',
    tags: ['JavaScript', 'SVG', 'HTML5', 'CSS3'],
    links: { demo: 'https://bdz-schematics.vercel.app/', github: GH + 'bdz-electrical-scheme-v5' },
    title: { ru: 'БДЖ · Локомотив 07.00', en: 'BDZ · Locomotive 07.00', bg: 'БДЖ · Локомотив 07.00' },
    desc: {
      ru: 'Интерактивная электрическая схема тепловоза 07.00 для обучения: пошаговый запуск двигателя с подсветкой активных цепей, фильтры силовой / управляющей / защитной цепей, масштаб, панорама и мини-карта. JavaScript и SVG.',
      en: 'An interactive electrical schematic of the 07.00 diesel locomotive for training: step-by-step engine start with active circuits highlighted, power / control / protection filters, zoom, pan and a mini-map. JavaScript and SVG.',
      de: 'Interaktiver Schaltplan der Diesellokomotive 07.00 für die Ausbildung: schrittweiser Motorstart mit hervorgehobenen aktiven Stromkreisen, Filter für Leistungs-, Steuer- und Schutzkreise, Zoom, Verschieben und Minikarte. JavaScript und SVG.',
      pl: 'Interaktywny schemat elektryczny lokomotywy spalinowej 07.00 do nauki: krokowy rozruch silnika z podświetleniem aktywnych obwodów, filtry obwodów siłowych, sterowania i zabezpieczeń, powiększanie, przesuwanie i minimapa. JavaScript i SVG.',
      cs: 'Interaktivní elektrické schéma dieselové lokomotivy 07.00 pro výuku: krokové spuštění motoru se zvýrazněním aktivních obvodů, filtry silových, řídicích a ochranných obvodů, zoom, posun a minimapa. JavaScript a SVG.',
      ro: 'Schemă electrică interactivă a locomotivei diesel 07.00 pentru instruire: pornirea motorului pas cu pas, cu circuitele active evidențiate, filtre pentru circuitele de forță, comandă și protecție, zoom, panoramare și hartă mică. JavaScript și SVG.',
      bg: 'Интерактивна електрическа схема на дизелов локомотив 07.00 за обучение: стъпково пускане на двигателя с подсветка на активните вериги, филтри за силови, управляващи и защитни вериги, мащабиране, преместване и мини-карта. JavaScript и SVG.',
    },
  },
  {
    id: 'radio-sim', cat: ['radio', 'learn'], img: 'images/proj-radio-sim.jpg', status: 'local',
    tags: ['React', 'TypeScript', 'Canvas', 'Vitest', 'MNA solver'],
    links: {},
    title: { ru: 'Симулятор электрических схем', en: 'Circuit simulator' },
    desc: {
      ru: 'Обучающий симулятор: редактор схем на холсте и собственный решатель MNA (метод Гаусса). Резисторы, источники, конденсаторы, катушки, диоды/светодиоды, ключи; ход времени и графики. Энциклопедия деталей, детектор ошибок, задачи. Юнит-тесты против аналитических RC/RL.',
      en: 'A teaching simulator: a canvas schematic editor with a custom MNA solver (Gaussian elimination). Resistors, sources, capacitors, inductors, diodes/LEDs, switches; time stepping and plots. Parts encyclopedia, error detector, exercises. Unit tests against analytic RC/RL curves.',
      de: 'Lernsimulator: Schaltplaneditor auf einer Zeichenfläche mit eigenem MNA-Solver (Gauß-Verfahren). Widerstände, Quellen, Kondensatoren, Spulen, Dioden/LEDs, Schalter; Zeitverlauf und Diagramme. Bauteil-Enzyklopädie, Fehlerdetektor, Aufgaben. Unit-Tests gegen analytische RC/RL-Kurven.',
      pl: 'Symulator edukacyjny: edytor schematów na kanwie z własnym solverem MNA (eliminacja Gaussa). Rezystory, źródła, kondensatory, cewki, diody/LED-y, przełączniki; przebieg w czasie i wykresy. Encyklopedia elementów, wykrywanie błędów, zadania. Testy jednostkowe względem analitycznych krzywych RC/RL.',
      cs: 'Výukový simulátor: editor schémat na plátně s vlastním řešičem MNA (Gaussova eliminace). Rezistory, zdroje, kondenzátory, cívky, diody/LED, spínače; časový průběh a grafy. Encyklopedie součástek, detektor chyb, úlohy. Unit testy proti analytickým křivkám RC/RL.',
      ro: 'Simulator didactic: editor de scheme pe canvas cu un solver MNA propriu (eliminare Gauss). Rezistoare, surse, condensatoare, bobine, diode/LED-uri, comutatoare; evoluție în timp și grafice. Enciclopedie de componente, detector de erori, exerciții. Teste unitare față de curbele analitice RC/RL.',
      bg: 'Учебен симулатор: редактор на схеми върху платно със собствен MNA решател (метод на Гаус). Резистори, източници, кондензатори, бобини, диоди/светодиоди, ключове; ход на времето и графики. Енциклопедия на елементите, детектор на грешки, задачи. Юнит тестове спрямо аналитични RC/RL криви.',
    },
  },

  /* ───────── Приложения ───────── */
  {
    id: 'smartbuddy', cat: ['apps'], img: 'images/proj-smartbuddy.jpg', status: 'alpha',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Gemini', 'PP-OCRv5 (C++)', 'Room / Hilt'],
    links: { apk: 'downloads/smartbuddy.apk', telegram: 'https://t.me/MaximLive12' },
    title: 'SmartBuddy AI',
    desc: {
      ru: 'Android-приложение для учёта покупок и бюджета: история чеков, сравнение цен по магазинам, аналитика расходов. Чеки распознаются через Google Document Scanner + Gemini, а без сети — локальным PP-OCRv5 (ncnn, C++). Версия 2.0 в разработке (alpha).',
      en: 'An Android app for tracking purchases and budget: receipt history, price comparison between stores, expense analytics. Receipts are read via Google Document Scanner + Gemini, or offline with a local PP-OCRv5 engine (ncnn, C++). Version 2.0 is in development (alpha).',
      de: 'Android-App für Einkäufe und Budget: Belegverlauf, Preisvergleich zwischen Läden, Ausgabenanalyse. Belege werden über Google Document Scanner + Gemini erkannt – oder offline mit lokalem PP-OCRv5 (ncnn, C++). Version 2.0 ist in Entwicklung (Alpha).',
      pl: 'Aplikacja na Androida do zakupów i budżetu: historia paragonów, porównanie cen w sklepach, analiza wydatków. Paragony rozpoznawane przez Google Document Scanner + Gemini albo offline lokalnym PP-OCRv5 (ncnn, C++). Wersja 2.0 w trakcie tworzenia (alpha).',
      cs: 'Android aplikace pro nákupy a rozpočet: historie účtenek, porovnání cen mezi obchody, analytika výdajů. Účtenky se čtou přes Google Document Scanner + Gemini nebo offline lokálním PP-OCRv5 (ncnn, C++). Verze 2.0 je ve vývoji (alpha).',
      ro: 'Aplicație Android pentru cumpărături și buget: istoric de bonuri, compararea prețurilor între magazine, analiza cheltuielilor. Bonurile sunt citite prin Google Document Scanner + Gemini sau offline cu PP-OCRv5 local (ncnn, C++). Versiunea 2.0 este în dezvoltare (alpha).',
      bg: 'Android приложение за покупки и бюджет: история на касови бележки, сравнение на цени между магазини, анализ на разходите. Бележките се разпознават през Google Document Scanner + Gemini или офлайн с локален PP-OCRv5 (ncnn, C++). Версия 2.0 е в разработка (alpha).',
    },
  },
  {
    id: 'smartbg', cat: ['apps'], img: 'images/proj-smartbg.jpg', status: 'live',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
    links: { demo: 'https://smartbg-one.vercel.app/' },
    title: 'SMARTBG',
    desc: {
      ru: 'Справочный сайт для Болгарии: калькуляторы (зарплата, кредит, ипотека, пенсия, топливо и др.), каталог государственных услуг, поиск и помощник на локальной базе знаний. Next.js (App Router), PWA, 88 юнит-тестов.',
      en: 'A reference site for Bulgaria: calculators (salary, loans, mortgage, pension, fuel and more), a directory of government services, search and an assistant built on a local knowledge base. Next.js (App Router), PWA, 88 unit tests.',
      de: 'Nachschlageseite für Bulgarien: Rechner (Gehalt, Kredit, Hypothek, Rente, Kraftstoff u. a.), Verzeichnis staatlicher Dienste, Suche und ein Assistent auf lokaler Wissensbasis. Next.js (App Router), PWA, 88 Unit-Tests.',
      pl: 'Serwis informacyjny o Bułgarii: kalkulatory (pensja, kredyt, hipoteka, emerytura, paliwo i inne), katalog usług państwowych, wyszukiwarka i asystent oparty na lokalnej bazie wiedzy. Next.js (App Router), PWA, 88 testów jednostkowych.',
      cs: 'Informační web o Bulharsku: kalkulačky (mzda, úvěr, hypotéka, důchod, palivo a další), katalog státních služeb, vyhledávání a asistent na lokální znalostní bázi. Next.js (App Router), PWA, 88 unit testů.',
      ro: 'Site de informare pentru Bulgaria: calculatoare (salariu, credit, ipotecă, pensie, combustibil și altele), catalog de servicii publice, căutare și un asistent bazat pe o bază de cunoștințe locală. Next.js (App Router), PWA, 88 de teste unitare.',
      bg: 'Информационен сайт за България: калкулатори (заплата, кредит, ипотека, пенсия, гориво и др.), каталог на държавни услуги, търсене и асистент на локална база знания. Next.js (App Router), PWA, 88 юнит теста.',
    },
  },
  {
    id: 'graphik', cat: ['apps'], img: 'images/proj-graphik.jpg', status: 'local',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'IndexedDB', 'Tailwind CSS'],
    links: { github: GH + 'Graphik' },
    title: { ru: 'График рабочего времени · БДЖ', en: 'Work schedule planner · BDZ', bg: 'График на работното време · БДЖ' },
    desc: {
      ru: 'Приложение для составления и проверки графиков рабочего времени персонала: справочник бригады, базовые паттерны смен («2 через 2», пн–пт), расчёт нормы и переработок, правовая проверка по Наредба № 50, печать / PDF и экспорт JSON. Интерфейс на болгарском.',
      en: 'An app for building and checking staff working-time schedules: crew directory, base shift patterns (2-on-2-off, Mon–Fri), norm and overtime calculation, legal checks against Ordinance No. 50, print / PDF and JSON export. Bulgarian UI.',
      de: 'App zum Erstellen und Prüfen von Arbeitszeitplänen: Mitarbeiterverzeichnis, Grundschichtmuster (2 Tage an, 2 frei; Mo–Fr), Berechnung von Soll und Überstunden, rechtliche Prüfung nach Verordnung Nr. 50, Druck / PDF und JSON-Export. Bulgarische Oberfläche.',
      pl: 'Aplikacja do układania i sprawdzania grafików czasu pracy: lista pracowników, bazowe wzorce zmian (2 dni pracy / 2 wolne; pon.–pt.), obliczanie normy i nadgodzin, kontrola prawna według rozporządzenia nr 50, druk / PDF i eksport JSON. Interfejs po bułgarsku.',
      cs: 'Aplikace pro sestavování a kontrolu rozpisů pracovní doby: adresář pracovníků, základní vzory směn (2 dny práce / 2 volno; po–pá), výpočet normy a přesčasů, právní kontrola podle nařízení č. 50, tisk / PDF a export JSON. Rozhraní v bulharštině.',
      ro: 'Aplicație pentru întocmirea și verificarea graficelor de lucru: registrul echipei, tipare de bază ale turelor (2 zile lucru / 2 libere; lun–vin), calculul normei și al orelor suplimentare, verificare legală după Ordonanța nr. 50, tipărire / PDF și export JSON. Interfață în bulgară.',
      bg: 'Приложение за съставяне и проверка на графици за работно време: справочник на бригадата, базови модели на смени („2 през 2“, пон–пет), изчисляване на норма и извънреден труд, правна проверка по Наредба № 50, печат / PDF и експорт в JSON. Интерфейс на български.',
    },
  },
  {
    id: 'vertex', cat: ['apps'], img: 'images/proj-vertex.jpg', status: 'live',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'OpenRouter'],
    links: { demo: 'https://vertex-ai-workspace.vercel.app/' },
    title: 'Vertex AI Workspace',
    desc: {
      ru: 'Фронтенд-ориентированное рабочее пространство для работы с AI-ассистентами: адаптивный shell, семантические дизайн-токены, дашборды на Recharts, локализация. Ассистент подключается через серверный транспорт (OpenRouter / Gemini) — ключи не попадают в браузер.',
      en: 'A frontend-first workspace for working with AI assistants: responsive shell, semantic design tokens, Recharts dashboards, localization. The assistant connects through a server-side transport (OpenRouter / Gemini), so keys never reach the browser.',
      de: 'Frontend-orientierter Arbeitsbereich für die Arbeit mit KI-Assistenten: responsive Shell, semantische Design-Tokens, Recharts-Dashboards, Lokalisierung. Der Assistent läuft über einen serverseitigen Transport (OpenRouter / Gemini) – Schlüssel gelangen nie in den Browser.',
      pl: 'Frontendowa przestrzeń robocza do pracy z asystentami AI: responsywny shell, semantyczne tokeny designu, dashboardy w Recharts, lokalizacja. Asystent łączy się przez transport po stronie serwera (OpenRouter / Gemini), więc klucze nie trafiają do przeglądarki.',
      cs: 'Frontendový pracovní prostor pro práci s AI asistenty: responzivní shell, sémantické design tokeny, dashboardy v Rechartsu, lokalizace. Asistent se připojuje přes serverový transport (OpenRouter / Gemini), klíče se tak nedostanou do prohlížeče.',
      ro: 'Spațiu de lucru orientat spre frontend pentru lucrul cu asistenți AI: shell responsiv, tokeni de design semantici, dashboard-uri Recharts, localizare. Asistentul se conectează printr-un transport pe server (OpenRouter / Gemini), deci cheile nu ajung în browser.',
      bg: 'Фронтенд работно пространство за работа с AI асистенти: адаптивен shell, семантични дизайн токени, табла с Recharts, локализация. Асистентът се свързва през сървърен транспорт (OpenRouter / Gemini), така че ключовете не стигат до браузъра.',
    },
  },

  /* ───────── Обучение и тренажёры ───────── */
  {
    id: 'iaza', cat: ['learn'], img: 'images/proj-iaza.jpg', status: 'live',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js ETL'],
    links: { demo: 'https://iaza-ispit.vercel.app/' },
    title: { ru: 'БДЖ Тренажор · ИАЖА', en: 'BDZ Trainer · IAJA', bg: 'БДЖ Тренажор · ИАЖА' },
    desc: {
      ru: 'Двуязычный (BG/RU) тренажёр к экзаменам ИАЖА для помощника машиниста и машиниста локомотива. Режимы «Экзамен» (40 вопросов, 60 минут, порог 75%), «Марафон» и «Работа над ошибками»; около 1500 вопросов в двух базах; скрипты сборки и проверки данных (ETL).',
      en: 'A bilingual (BG/RU) trainer for IAJA exams — assistant locomotive driver and locomotive driver. Exam (40 questions, 60 min, 75% pass), Marathon and Mistake Review modes; about 1,500 questions in two databases; scripts to build and verify the data (ETL).',
      de: 'Zweisprachiger (BG/RU) Trainer für die IAJA-Prüfungen – Lokführerassistent und Lokführer. Modi „Prüfung“ (40 Fragen, 60 Min., 75 % zum Bestehen), „Marathon“ und „Fehlerarbeit“; rund 1500 Fragen in zwei Datenbanken; Skripte zum Aufbau und zur Prüfung der Daten (ETL).',
      pl: 'Dwujęzyczny (BG/RU) trener do egzaminów IAJA — pomocnik maszynisty i maszynista. Tryby „Egzamin” (40 pytań, 60 min, próg 75%), „Maraton” i „Praca nad błędami”; około 1500 pytań w dwóch bazach; skrypty budowania i weryfikacji danych (ETL).',
      cs: 'Dvojjazyčný (BG/RU) trenažér ke zkouškám IAJA — pomocník strojvedoucího a strojvedoucí. Režimy „Zkouška“ (40 otázek, 60 min, hranice 75 %), „Maraton“ a „Práce s chybami“; kolem 1500 otázek ve dvou databázích; skripty pro sestavení a kontrolu dat (ETL).',
      ro: 'Antrenor bilingv (BG/RU) pentru examenele IAJA — ajutor de mecanic și mecanic de locomotivă. Moduri „Examen” (40 de întrebări, 60 min, prag 75%), „Maraton” și „Lucru pe greșeli”; aproximativ 1500 de întrebări în două baze; scripturi de construire și verificare a datelor (ETL).',
      bg: 'Двуезичен (BG/RU) тренажор за изпитите на ИАЖА — помощник локомотивен машинист и локомотивен машинист. Режими „Изпит“ (40 въпроса, 60 мин, праг 75%), „Маратон“ и „Работа върху грешките“; около 1500 въпроса в две бази; скриптове за изграждане и проверка на данните (ETL).',
    },
  },
  {
    id: 'signal-loop', cat: ['radio', 'learn'], img: 'images/proj-signal-loop.jpg', status: 'live',
    tags: ['React', 'TypeScript', 'PWA', 'Service Worker', 'SRS'],
    links: { demo: 'https://signal-loop-six.vercel.app/' },
    title: { ru: 'Signal Loop · тренажёр радиолюбителя', en: 'Signal Loop · amateur radio exam trainer' },
    desc: {
      ru: 'Офлайн-тренажёр к экзамену радиолюбителя класса 2 (Болгария): 237 вопросов, из них 11 официальных со схемами, интервальные повторения, карточки ошибок, Q-коды и формулы, пробный экзамен на 60 вопросов (проходной балл 48). PWA с экспортом прогресса в JSON.',
      en: 'An offline trainer for the Class 2 amateur radio exam (Bulgaria): 237 questions, 11 of them official ones with schematics, spaced repetition, mistake cards, Q-codes and formulas, a 60-question mock exam (pass mark 48). A PWA with JSON progress export.',
      de: 'Offline-Trainer für die Amateurfunkprüfung Klasse 2 (Bulgarien): 237 Fragen, davon 11 offizielle mit Schaltbildern, Spaced Repetition, Fehlerkarten, Q-Gruppen und Formeln, Probeprüfung mit 60 Fragen (Bestehen ab 48). PWA mit JSON-Export des Fortschritts.',
      pl: 'Trener offline do egzaminu krótkofalarskiego klasy 2 (Bułgaria): 237 pytań, w tym 11 oficjalnych ze schematami, powtórki interwałowe, karty błędów, kody Q i wzory, egzamin próbny z 60 pytań (próg 48). PWA z eksportem postępów do JSON.',
      cs: 'Offline trenažér ke zkoušce radioamatéra třídy 2 (Bulharsko): 237 otázek, z toho 11 oficiálních se schématy, rozložené opakování, karty chyb, Q-kódy a vzorce, zkušební test o 60 otázkách (limit 48). PWA s exportem postupu do JSON.',
      ro: 'Antrenor offline pentru examenul de radioamator clasa 2 (Bulgaria): 237 de întrebări, dintre care 11 oficiale cu scheme, repetiție spațiată, carduri de greșeli, coduri Q și formule, examen de probă cu 60 de întrebări (prag 48). PWA cu export de progres în JSON.',
      bg: 'Офлайн тренажор за изпита за радиолюбител клас 2 (България): 237 въпроса, от които 11 официални със схеми, интервално повторение, карти с грешки, Q-кодове и формули, пробен изпит с 60 въпроса (праг 48). PWA с експорт на напредъка в JSON.',
    },
  },
  {
    id: 'chameleon', cat: ['learn'], img: 'images/proj-chameleon.jpg', status: 'local',
    tags: ['React', 'TypeScript', 'Vite', 'PWA', 'Dexie', 'FSRS', 'Piper TTS'],
    links: { github: GH + 'BG-Learning' },
    title: 'Chameleon BG',
    desc: {
      ru: 'PWA для изучения болгарского русскоязычными, с упором на железнодорожную практику: более 16 тыс. словарных записей, 409 диалогов, тренажёры аудирования и разговорной речи, повторения FSRS. Локальная озвучка Piper (более 48 тыс. аудиофайлов); прогресс хранится в браузере.',
      en: 'A PWA for Russian speakers learning Bulgarian, with a focus on railway practice: over 16,000 dictionary entries, 409 dialogues, listening and speaking drills, FSRS spaced repetition. Local Piper TTS (48,000+ audio files); progress stays in the browser.',
      de: 'PWA für russischsprachige Bulgarisch-Lernende mit Schwerpunkt Eisenbahnpraxis: über 16 000 Wörterbucheinträge, 409 Dialoge, Hör- und Sprechübungen, FSRS-Wiederholung. Lokale Piper-Sprachausgabe (über 48 000 Audiodateien); der Fortschritt bleibt im Browser.',
      pl: 'PWA dla rosyjskojęzycznych uczących się bułgarskiego, z naciskiem na praktykę kolejową: ponad 16 000 haseł słownika, 409 dialogów, ćwiczenia słuchania i mówienia, powtórki FSRS. Lokalna synteza Piper (ponad 48 000 plików audio); postępy zostają w przeglądarce.',
      cs: 'PWA pro rusky mluvící studenty bulharštiny se zaměřením na železniční praxi: přes 16 000 slovníkových hesel, 409 dialogů, cvičení poslechu a mluvení, opakování FSRS. Lokální syntéza Piper (přes 48 000 zvukových souborů); postup zůstává v prohlížeči.',
      ro: 'PWA pentru vorbitori de rusă care învață bulgara, cu accent pe practica feroviară: peste 16 000 de intrări de dicționar, 409 dialoguri, exerciții de ascultare și vorbire, repetiție FSRS. Sinteză vocală Piper locală (peste 48 000 de fișiere audio); progresul rămâne în browser.',
      bg: 'PWA за рускоговорящи, които учат български, с фокус върху железопътната практика: над 16 000 речникови записа, 409 диалога, упражнения за слушане и говорене, повторение с FSRS. Локално озвучаване с Piper (над 48 000 аудиофайла); напредъкът остава в браузъра.',
    },
  },
  {
    id: 'romana', cat: ['learn'], img: 'images/proj-romana.jpg', status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'PWA'],
    links: { demo: 'https://romana-nova.vercel.app/', github: GH + 'Romana-Nova' },
    title: 'ROMÂNA NOVA',
    desc: {
      ru: 'PWA-академия румынского языка: словарь на 7 984 слова и выражения (часть — справочные статьи Викисловаря), 226 учебных карточек, 60 диалогов с озвучкой, фото с указанием лицензий. Данные и прогресс — в браузере (IndexedDB), без сервера и платных API.',
      en: 'A PWA academy for learning Romanian: 7,984 words and expressions (some are reference entries from Wiktionary), 226 prepared cards, 60 dialogues with audio, photos with licence attribution. Data and progress live in the browser (IndexedDB) — no server or paid APIs.',
      de: 'PWA-Akademie für Rumänisch: 7984 Wörter und Wendungen (teils Nachschlageeinträge aus dem Wiktionary), 226 aufbereitete Lernkarten, 60 Dialoge mit Audio, Fotos mit Lizenzangabe. Daten und Fortschritt liegen im Browser (IndexedDB) – ohne Server und bezahlte APIs.',
      pl: 'Akademia rumuńskiego w formie PWA: 7984 słowa i wyrażenia (część to hasła z Wikisłownika), 226 przygotowanych fiszek, 60 dialogów z nagraniami, zdjęcia z informacją o licencji. Dane i postępy w przeglądarce (IndexedDB) — bez serwera i płatnych API.',
      cs: 'PWA akademie rumunštiny: 7984 slov a výrazů (část tvoří hesla z Wikislovníku), 226 připravených karet, 60 dialogů se zvukem, fotografie s údaji o licenci. Data a postup jsou v prohlížeči (IndexedDB) — bez serveru a placených API.',
      ro: 'Academie PWA de limba română: 7984 de cuvinte și expresii (o parte sunt articole de referință din Wikționar), 226 de carduri pregătite, 60 de dialoguri cu audio, fotografii cu licență. Datele și progresul sunt în browser (IndexedDB) — fără server și API-uri plătite.',
      bg: 'PWA академия по румънски: 7984 думи и изрази (част от тях са справочни статии от Уикиречника), 226 подготвени карти, 60 диалога със звук, снимки с посочен лиценз. Данните и напредъкът са в браузъра (IndexedDB) — без сървър и платени API.',
    },
  },
  {
    id: 'glagolica', cat: ['learn'], img: 'images/proj-glagolica.jpg', status: 'live',
    tags: ['JavaScript', 'HTML/CSS', 'SRS', 'Web Speech API'],
    links: { demo: 'https://lexicon-bg.vercel.app/', github: GH + 'lexicon-bg' },
    title: 'Glagolica',
    desc: {
      ru: 'Статическое приложение для русскоязычных: словенский (15-дневный интенсив A1) и английский A1. SRS, падежный тренажёр, двойственное число, 335 глаголов с формами, диалоги, озвучка через Web Speech API. Без сборки и API.',
      en: 'A static app for Russian speakers learning Slovenian (15-day A1 intensive) and English A1: SRS, a case trainer, the dual number, 335 verbs with forms, dialogues, speech via the Web Speech API. No build step, no API.',
      de: 'Statische App für russischsprachige Lernende: Slowenisch (15-Tage-Intensivkurs A1) und Englisch A1. SRS, Kasustrainer, Dual, 335 Verben mit Formen, Dialoge, Sprachausgabe über die Web Speech API. Ohne Build und ohne API.',
      pl: 'Statyczna aplikacja dla rosyjskojęzycznych: słoweński (15-dniowy intensywny kurs A1) i angielski A1. Powtórki SRS, trener przypadków, liczba podwójna, 335 czasowników z formami, dialogi, odczyt przez Web Speech API. Bez budowania i bez API.',
      cs: 'Statická aplikace pro rusky mluvící: slovinština (15denní intenzivní kurz A1) a angličtina A1. SRS, trenažér pádů, dvojné číslo, 335 sloves s tvary, dialogy, předčítání přes Web Speech API. Bez buildu a bez API.',
      ro: 'Aplicație statică pentru vorbitori de rusă: slovenă (curs intensiv A1 de 15 zile) și engleză A1. SRS, antrenor de cazuri, numărul dual, 335 de verbe cu forme, dialoguri, citire prin Web Speech API. Fără build, fără API.',
      bg: 'Статично приложение за рускоговорящи: словенски (15-дневен интензив A1) и английски A1. SRS, тренажор за падежи, двойствено число, 335 глагола с форми, диалози, озвучаване през Web Speech API. Без билд и без API.',
    },
  },
  {
    id: 'devops-deck', cat: ['learn'], img: 'images/proj-devops-deck.jpg', status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'PWA', 'Workbox', 'IndexedDB'],
    links: { demo: 'https://devops-deck.vercel.app/', github: GH + 'devops-deck' },
    title: 'DevOps Deck',
    desc: {
      ru: 'Офлайн-PWA для изучения DevOps и English for IT: 27 модулей, 409 карточек с 3D-флипом, копируемые команды, глоссарий, прогресс в IndexedDB. Необязательный ИИ-наставник (Gemini / OpenRouter) работает только онлайн.',
      en: 'An offline-first PWA for learning DevOps and English for IT: 27 modules, 409 flip cards, copyable commands, a glossary, progress in IndexedDB. An optional AI tutor (Gemini / OpenRouter) works online only.',
      de: 'Offline-first-PWA zum Lernen von DevOps und English for IT: 27 Module, 409 Karteikarten mit 3D-Flip, kopierbare Befehle, Glossar, Fortschritt in IndexedDB. Ein optionaler KI-Tutor (Gemini / OpenRouter) funktioniert nur online.',
      pl: 'Offline-first PWA do nauki DevOps i English for IT: 27 modułów, 409 fiszek z obrotem 3D, kopiowalne polecenia, słowniczek, postępy w IndexedDB. Opcjonalny tutor AI (Gemini / OpenRouter) działa tylko online.',
      cs: 'Offline-first PWA pro výuku DevOps a English for IT: 27 modulů, 409 karet s 3D otáčením, kopírovatelné příkazy, glosář, postup v IndexedDB. Volitelný AI tutor (Gemini / OpenRouter) funguje jen online.',
      ro: 'PWA offline-first pentru învățarea DevOps și English for IT: 27 de module, 409 carduri cu flip 3D, comenzi copiabile, glosar, progres în IndexedDB. Un tutore AI opțional (Gemini / OpenRouter) funcționează doar online.',
      bg: 'Offline-first PWA за учене на DevOps и English for IT: 27 модула, 409 карти с 3D обръщане, копируеми команди, речник, напредък в IndexedDB. Незадължителен AI наставник (Gemini / OpenRouter) работи само онлайн.',
    },
  },
  {
    id: 'devops-course', cat: ['learn'], img: 'images/proj-devops-course.jpg', status: 'live',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router'],
    links: { demo: 'https://devops-course-roan.vercel.app/', github: GH + 'DevOps-Course' },
    title: { ru: 'DevOps с нуля до Junior', en: 'DevOps from zero to Junior' },
    desc: {
      ru: 'Интерактивный курс из 12 глав в 5 блоках: Linux, сети, Git, Docker, Kubernetes, CI/CD, IaC. В каждой главе — аналогия, схема, карточки терминов, практика в псевдотерминале и мини-тест. Прогресс хранится в браузере.',
      en: 'An interactive course of 12 chapters in 5 blocks: Linux, networking, Git, Docker, Kubernetes, CI/CD, IaC. Each chapter has an analogy, a diagram, term cards, practice in a pseudo-terminal and a mini-quiz. Progress is stored in the browser.',
      de: 'Interaktiver Kurs mit 12 Kapiteln in 5 Blöcken: Linux, Netzwerke, Git, Docker, Kubernetes, CI/CD, IaC. Jedes Kapitel hat eine Analogie, ein Schema, Begriffskarten, Übung im Pseudo-Terminal und ein Mini-Quiz. Der Fortschritt wird im Browser gespeichert.',
      pl: 'Interaktywny kurs z 12 rozdziałów w 5 blokach: Linux, sieci, Git, Docker, Kubernetes, CI/CD, IaC. Każdy rozdział ma analogię, schemat, karty pojęć, ćwiczenia w pseudoterminalu i mini-quiz. Postępy zapisywane są w przeglądarce.',
      cs: 'Interaktivní kurz o 12 kapitolách v 5 blocích: Linux, sítě, Git, Docker, Kubernetes, CI/CD, IaC. Každá kapitola má analogii, schéma, karty pojmů, cvičení v pseudoterminálu a mini-kvíz. Postup se ukládá v prohlížeči.',
      ro: 'Curs interactiv de 12 capitole în 5 blocuri: Linux, rețele, Git, Docker, Kubernetes, CI/CD, IaC. Fiecare capitol are o analogie, o schemă, carduri cu termeni, practică într-un pseudo-terminal și un mini-test. Progresul se salvează în browser.',
      bg: 'Интерактивен курс от 12 глави в 5 блока: Linux, мрежи, Git, Docker, Kubernetes, CI/CD, IaC. Всяка глава има аналогия, схема, карти с термини, практика в псевдотерминал и мини тест. Напредъкът се пази в браузъра.',
    },
  },
  {
    id: 'python-course', cat: ['learn'], img: 'images/proj-python-course.jpg', status: 'local',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Pyodide', 'Python'],
    links: { github: GH + 'Backend' },
    title: { ru: 'Python с нуля до Backend', en: 'Python from zero to Backend' },
    desc: {
      ru: 'Интерактивный курс Python и основ backend для новичков. Код выполняется прямо в браузере через Pyodide (CPython в WebAssembly); для уроков по FastAPI — мини-реализация fastapi/pydantic. Встроенный терминал-имитатор, светлая и тёмная темы.',
      en: 'An interactive Python and backend-basics course for beginners. Code runs right in the browser via Pyodide (CPython in WebAssembly); FastAPI lessons use a small fastapi/pydantic shim. Built-in terminal simulator, light and dark themes.',
      de: 'Interaktiver Python- und Backend-Grundkurs für Einsteiger. Der Code läuft direkt im Browser über Pyodide (CPython in WebAssembly); für FastAPI-Lektionen gibt es eine kleine fastapi/pydantic-Nachbildung. Eingebauter Terminal-Simulator, helles und dunkles Design.',
      pl: 'Interaktywny kurs Pythona i podstaw backendu dla początkujących. Kod uruchamia się w przeglądarce przez Pyodide (CPython w WebAssembly); lekcje FastAPI korzystają z małej implementacji fastapi/pydantic. Wbudowany symulator terminala, jasny i ciemny motyw.',
      cs: 'Interaktivní kurz Pythonu a základů backendu pro začátečníky. Kód běží přímo v prohlížeči přes Pyodide (CPython ve WebAssembly); lekce FastAPI používají malou náhradu fastapi/pydantic. Vestavěný simulátor terminálu, světlý a tmavý motiv.',
      ro: 'Curs interactiv de Python și bazele backend-ului pentru începători. Codul rulează direct în browser prin Pyodide (CPython în WebAssembly); lecțiile FastAPI folosesc o mică implementare fastapi/pydantic. Simulator de terminal integrat, temă luminoasă și întunecată.',
      bg: 'Интерактивен курс по Python и основи на бекенда за начинаещи. Кодът се изпълнява директно в браузъра чрез Pyodide (CPython в WebAssembly); уроците за FastAPI ползват малка имитация на fastapi/pydantic. Вграден симулатор на терминал, светла и тъмна тема.',
    },
  },
  {
    id: 'kicad', cat: ['learn', 'radio'], img: 'images/proj-kicad.jpg', status: 'local',
    tags: ['JavaScript', 'PWA', 'Vercel Functions', 'Upstash Redis', 'Anthropic / OpenRouter'],
    links: { github: GH + 'KiCad' },
    title: { ru: 'KiCad Мастер Pro', en: 'KiCad Master Pro' },
    desc: {
      ru: 'Интерактивный курс проектирования печатных плат в KiCad 8–10: уроки, практика, тренажёр трассировки, симулятор, библиотека компонентов. Статический PWA-сайт плюс serverless API (Vercel): AI-ассистент со стримингом, чат, таблица лидеров, галерея проектов, Upstash Redis.',
      en: 'An interactive course on PCB design in KiCad 8–10: lessons, practice, a routing trainer, a simulator, a component library. A static PWA site plus a serverless API (Vercel): a streaming AI assistant, chat, leaderboard, project gallery, Upstash Redis.',
      de: 'Interaktiver Kurs zum Leiterplattenentwurf in KiCad 8–10: Lektionen, Praxis, Routing-Trainer, Simulator, Bauteilbibliothek. Statische PWA-Seite plus Serverless-API (Vercel): KI-Assistent mit Streaming, Chat, Bestenliste, Projektgalerie, Upstash Redis.',
      pl: 'Interaktywny kurs projektowania płytek PCB w KiCad 8–10: lekcje, praktyka, trener trasowania, symulator, biblioteka elementów. Statyczna strona PWA plus API serverless (Vercel): asystent AI ze streamingiem, czat, ranking, galeria projektów, Upstash Redis.',
      cs: 'Interaktivní kurz návrhu desek plošných spojů v KiCadu 8–10: lekce, praxe, trenažér trasování, simulátor, knihovna součástek. Statický PWA web plus serverless API (Vercel): AI asistent se streamováním, chat, žebříček, galerie projektů, Upstash Redis.',
      ro: 'Curs interactiv de proiectare a plăcilor de circuit imprimat în KiCad 8–10: lecții, practică, antrenor de rutare, simulator, bibliotecă de componente. Site PWA static plus API serverless (Vercel): asistent AI cu streaming, chat, clasament, galerie de proiecte, Upstash Redis.',
      bg: 'Интерактивен курс по проектиране на печатни платки в KiCad 8–10: уроци, практика, тренажор за трасиране, симулатор, библиотека с компоненти. Статичен PWA сайт плюс serverless API (Vercel): AI асистент със стрийминг, чат, класация, галерия с проекти, Upstash Redis.',
    },
  },

  /* ───────── Переводчики (PWA + Node.js) ───────── */
  {
    id: 'railbg', cat: ['backend', 'apps'], img: 'images/proj-railbg.jpg', status: 'local',
    tags: ['Node.js', 'PWA', 'DeepL', 'Web Speech API'],
    links: {},
    title: 'RailBG Translate',
    desc: {
      ru: 'PWA-переводчик RU ⇄ BG для железнодорожной и электротехнической терминологии, с глоссарием. Бэкенд на Node.js без зависимостей; работает без ключей (бесплатные провайдеры), с ключом — DeepL с защитой терминов. Голосовой ввод и озвучка через Web Speech API.',
      en: 'A RU ⇄ BG PWA translator for railway and electrical terminology, with a glossary. A dependency-free Node.js backend; works without keys (free providers), or with a DeepL key and term protection. Voice input and speech via the Web Speech API.',
      de: 'PWA-Übersetzer RU ⇄ BG für Eisenbahn- und Elektrotechnik-Terminologie, mit Glossar. Node.js-Backend ohne Abhängigkeiten; funktioniert ohne Schlüssel (kostenlose Anbieter), mit DeepL-Schlüssel und Begriffsschutz. Spracheingabe und Vorlesen über die Web Speech API.',
      pl: 'Tłumacz PWA RU ⇄ BG do terminologii kolejowej i elektrotechnicznej, ze słownikiem. Backend w Node.js bez zależności; działa bez kluczy (darmowi dostawcy), a z kluczem DeepL — z ochroną terminów. Wprowadzanie głosowe i odczyt przez Web Speech API.',
      cs: 'PWA překladač RU ⇄ BG pro železniční a elektrotechnickou terminologii, se slovníčkem. Backend v Node.js bez závislostí; funguje bez klíčů (bezplatní poskytovatelé), s klíčem DeepL i s ochranou termínů. Hlasový vstup a předčítání přes Web Speech API.',
      ro: 'Traducător PWA RU ⇄ BG pentru terminologie feroviară și electrotehnică, cu glosar. Backend Node.js fără dependențe; funcționează fără chei (furnizori gratuiți), iar cu cheie DeepL — cu protecția termenilor. Intrare vocală și citire prin Web Speech API.',
      bg: 'PWA преводач RU ⇄ BG за железопътна и електротехническа терминология, с речник. Node.js бекенд без зависимости; работи без ключове (безплатни доставчици), а с DeepL ключ — със защита на термините. Гласов вход и озвучаване през Web Speech API.',
    },
  },
  {
    id: 'railsi', cat: ['backend', 'apps'], img: 'images/proj-railsi.jpg', status: 'local',
    tags: ['Node.js', 'DeepL API', 'PWA', 'Vercel'],
    links: { github: GH + 'Slovenian-Ru' },
    title: 'RailSI Translate',
    desc: {
      ru: 'Переводчик RU ⇄ SL через DeepL Free API. Node.js-бэкенд хранит ключ на сервере, ограничивает запросы (30/мин на IP, до 5000 символов) и покрыт контрактными тестами; PWA с историей и голосовым вводом. Serverless-функции для Vercel.',
      en: 'A RU ⇄ SL translator on top of the DeepL Free API. The Node.js backend keeps the key server-side, rate-limits requests (30/min per IP, up to 5,000 characters) and is covered by contract tests; a PWA with history and voice input. Serverless functions for Vercel.',
      de: 'Übersetzer RU ⇄ SL auf Basis der DeepL Free API. Das Node.js-Backend hält den Schlüssel serverseitig, begrenzt Anfragen (30/Min. pro IP, bis 5000 Zeichen) und ist durch Vertragstests abgedeckt; PWA mit Verlauf und Spracheingabe. Serverless-Funktionen für Vercel.',
      pl: 'Tłumacz RU ⇄ SL oparty na DeepL Free API. Backend w Node.js trzyma klucz po stronie serwera, ogranicza zapytania (30/min na IP, do 5000 znaków) i jest pokryty testami kontraktowymi; PWA z historią i wprowadzaniem głosowym. Funkcje serverless dla Vercel.',
      cs: 'Překladač RU ⇄ SL nad DeepL Free API. Backend v Node.js drží klíč na serveru, omezuje požadavky (30/min na IP, do 5000 znaků) a je pokryt kontraktními testy; PWA s historií a hlasovým vstupem. Serverless funkce pro Vercel.',
      ro: 'Traducător RU ⇄ SL peste DeepL Free API. Backend-ul Node.js păstrează cheia pe server, limitează cererile (30/min per IP, până la 5000 de caractere) și este acoperit de teste de contract; PWA cu istoric și intrare vocală. Funcții serverless pentru Vercel.',
      bg: 'Преводач RU ⇄ SL върху DeepL Free API. Node.js бекендът държи ключа на сървъра, ограничава заявките (30/мин на IP, до 5000 знака) и е покрит с контрактни тестове; PWA с история и гласов вход. Serverless функции за Vercel.',
    },
  },

  /* ───────── Справочники по оборудованию ───────── */
  {
    id: 'tecsun', cat: ['radio'], img: 'images/proj-tecsun.jpg', status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    links: { demo: 'https://tecsun-pl330-guide.vercel.app/', github: GH + 'tecsun-pl330-guide' },
    title: { ru: 'TECSUN PL-330 · простая инструкция', en: 'TECSUN PL-330 · simple guide' },
    desc: {
      ru: 'Офлайн-PWA с крупными пошаговыми инструкциями к радиоприёмнику Tecsun PL-330, сделанная для пожилого пользователя: большие плитки-темы, тёмная тема, крупный шрифт. Чистые HTML/CSS/JS без фреймворков, трекеров и CDN.',
      en: 'An offline PWA with large step-by-step instructions for the Tecsun PL-330 receiver, made for an elderly user: big topic tiles, dark theme, large type. Plain HTML/CSS/JS with no frameworks, trackers or CDNs.',
      de: 'Offline-PWA mit großen Schritt-für-Schritt-Anleitungen für den Empfänger Tecsun PL-330, gemacht für ältere Nutzer: große Themenkacheln, dunkles Design, große Schrift. Reines HTML/CSS/JS ohne Frameworks, Tracker oder CDNs.',
      pl: 'Offline\'owa PWA z dużymi instrukcjami krok po kroku do odbiornika Tecsun PL-330, zrobiona dla starszego użytkownika: duże kafelki tematów, ciemny motyw, duża czcionka. Czysty HTML/CSS/JS bez frameworków, trackerów i CDN.',
      cs: 'Offline PWA s velkými návody krok za krokem k přijímači Tecsun PL-330, vytvořená pro staršího uživatele: velké dlaždice témat, tmavý motiv, velké písmo. Čisté HTML/CSS/JS bez frameworků, trackerů a CDN.',
      ro: 'PWA offline cu instrucțiuni mari, pas cu pas, pentru receptorul Tecsun PL-330, făcută pentru un utilizator în vârstă: plăci mari cu teme, temă întunecată, text mare. HTML/CSS/JS simplu, fără framework-uri, trackere sau CDN-uri.',
      bg: 'Офлайн PWA с големи стъпка по стъпка инструкции за приемника Tecsun PL-330, направена за възрастен потребител: големи плочки с теми, тъмна тема, едър шрифт. Чист HTML/CSS/JS без фреймуърци, тракери и CDN.',
    },
  },
  {
    id: 'yaesu', cat: ['radio'], img: 'images/proj-yaesu.jpg', status: 'local',
    tags: ['TypeScript', 'Vite', 'PWA'],
    links: { github: GH + 'YAESU-FT-70D' },
    title: { ru: 'FT-70D · просто и понятно', en: 'FT-70D · simple and clear' },
    desc: {
      ru: 'Офлайн-справочник по рации Yaesu FT-70DE: 108 пошаговых инструкций, меню SET, поиск, репитеры и мастер настройки. Ставится на телефон как веб-приложение. Факты и источники лежат в research/; непроверенные процедуры помечены.',
      en: 'An offline reference for the Yaesu FT-70DE handheld: 108 step-by-step guides, the SET menu, search, repeaters and a setup wizard. Installs on a phone as a web app. Facts and sources are kept in research/; unverified procedures are flagged.',
      de: 'Offline-Nachschlagewerk für das Handfunkgerät Yaesu FT-70DE: 108 Schritt-für-Schritt-Anleitungen, SET-Menü, Suche, Relaisstellen und ein Einrichtungsassistent. Lässt sich als Web-App aufs Handy installieren. Fakten und Quellen liegen in research/; ungeprüfte Abläufe sind markiert.',
      pl: 'Offline\'owy poradnik do radiotelefonu Yaesu FT-70DE: 108 instrukcji krok po kroku, menu SET, wyszukiwarka, przekaźniki i kreator konfiguracji. Instaluje się na telefonie jako aplikacja webowa. Fakty i źródła w research/; niezweryfikowane procedury są oznaczone.',
      cs: 'Offline příručka k ručnímu transceiveru Yaesu FT-70DE: 108 návodů krok za krokem, menu SET, vyhledávání, převaděče a průvodce nastavením. Instaluje se do telefonu jako webová aplikace. Fakta a zdroje jsou v research/; neověřené postupy jsou označeny.',
      ro: 'Ghid offline pentru stația portabilă Yaesu FT-70DE: 108 instrucțiuni pas cu pas, meniul SET, căutare, repetoare și un asistent de configurare. Se instalează pe telefon ca aplicație web. Faptele și sursele sunt în research/; procedurile neverificate sunt marcate.',
      bg: 'Офлайн справочник за радиостанцията Yaesu FT-70DE: 108 стъпка по стъпка инструкции, меню SET, търсене, репитери и майстор за настройка. Инсталира се на телефона като уеб приложение. Фактите и източниците са в research/; непроверените процедури са отбелязани.',
    },
  },
];

window.PROJECTS = PROJECTS;
