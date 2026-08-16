# Portfolio redesign

## Before

The portfolio used a conventional centered hero, three statistic cards, a two-column card grid and several unrelated neon accents. The real projects and links were present, but their presentation felt closer to a developer dashboard than a premium creative portfolio.

## Creative direction

The redesign uses an editorial digital-studio language: near-black canvas, warm-paper typography, one signal-orange accent and restrained acid-green status details. Large type, hard rules, asymmetrical grids and technical registration marks create identity without relying on glass cards or decorative 3D.

## Page architecture

- `Header`: fixed navigation, locale switcher, availability state and scroll progress.
- `Hero`: oversized name composition, pointer-responsive signal field, compact positioning and entrance sequence.
- `Projects`: the four existing projects remain the central content. Cases 01–03 use supplied project artwork, while Case 04 preserves the original SmartBuddy interactive preview and all existing links.
- `Skills`: editorial capability index and lightweight CSS ticker.
- `Principles`: high-contrast working-system section.
- `Footer`: direct contact CTA and the existing GitHub, Telegram and email links.

## Motion system

Framer Motion remains the only JavaScript animation dependency. Motion uses a shared expressive ease (`cubic-bezier(0.16, 1, 0.3, 1)`), transform/opacity reveals, a pointer-responsive hero object and short project transitions. CSS handles the slow orbit, ticker and existing widget details. `prefers-reduced-motion` collapses animations and smooth scrolling.

## Responsive strategy

The layout is content-first below `lg`: one-column hero and projects, bounded typography through `clamp()`, full-width stages, 44px+ interaction targets and a compact bottom navigation. The hero uses `100svh`; project visuals are contained inside fixed stages; the page clips accidental visual overflow without hiding content.

Target widths reviewed in the CSS/layout system: 360, 390, 412, 768 and 1440+ px. Interactive hover treatment is supplemental; all project actions remain visible on touch devices.

## Performance and accessibility

- No Three.js/WebGL or permanent canvas loop.
- The SmartBuddy project widget stays dynamically imported; Cases 01–03 use responsive `next/image` delivery.
- Animation work is limited to transforms and opacity where possible.
- Semantic sections/articles, skip link, navigation labels, visible focus treatment and `aria-pressed` filter state.
- One optimized 1200×630 social image (`public/og.png`, about 800 KB).
- Existing APK remains untouched and directly downloadable.

## Run and build

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The build script deliberately uses webpack because Next 16 Turbopack attempts to bind an internal port during CSS processing in restricted environments. This does not change the app architecture or Vercel project.

## Known limitations

The in-app browser connection was unavailable during this pass, so automated browser screenshots and console capture could not be produced. The implementation was instead checked through static responsive constraints, TypeScript, ESLint and a full production build. External project and repository URLs returned HTTP 200 on 2026-08-16.

## Localization and layout polish

The localization pass moved all non-technical interface copy—including accessibility labels, section microcopy, case-study notes, widget labels and the contact statement—into the existing EN/RU/BG dictionaries.

The subsequent repair pass removed the layout regressions introduced by the first polish attempt. Project stages no longer grow to 46vw/672px, case gaps no longer grow to 12vw/192px, and project copy is no longer stretched beside an oversized preview with `justify-between`. Each case now follows a compact metadata → preview → content sequence. Low-height desktop viewports cap previews at 384px, while mobile and tablet use explicit 320px and 384px stages. The Technical Arsenal heading uses natural balanced wrapping rather than a forced last-word split.
