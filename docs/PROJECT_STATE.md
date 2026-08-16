# Project state

## Current stack

- Next.js 16 App Router, React 19, TypeScript strict mode.
- Tailwind CSS 3 plus centralized design tokens in `app/globals.css`.
- Framer Motion 11 for interaction and reveal motion.
- Lucide React for UI icons.
- npm with the existing `package-lock.json`.
- Single static route: `/`.
- Existing Vercel project name: `mp-portfolio` in `vercel.json`.

## Preserved production content

- Interactive Locomotive Electrical Schematic Simulator — `https://bdz-schematics.vercel.app`.
- SMARTBG — `https://smartbg-one.vercel.app`.
- SmartBuddy AI APK — `public/downloads/SmartBuddy-AI-FINAL-RELEASE-1.0.0-RC2.apk`.
- Vertex AI Workspace — `https://vertex-ai-workspace.vercel.app`.
- GitHub, Telegram and email contacts.
- English, Russian and Bulgarian dictionaries.

## Important implementation notes

- Main visual tokens live in `app/globals.css`; keep the ink/paper/signal system coherent.
- Project facts and destinations live in `components/Projects.tsx`; do not replace them with invented work or metrics.
- Cases 01–03 use the supplied 1536×1024 project artwork through `next/image`; Case 04 retains the interactive SmartBuddy phone preview.
- Keep `prefers-reduced-motion` coverage when adding animation.
- Do not add WebGL or a second animation library without a clear measured benefit.
- Do not remove or rename the APK without updating its download link.
- Do not replace `vercel.json`, create another repository or change the Vercel project identity.
- `public/og.png` is the portfolio-wide social preview and is referenced by root metadata.

## Verification state

- ESLint: pass.
- TypeScript: pass.
- Production build: pass (`next build --webpack`).
- Routes generated: `/` and the framework `_not-found` route.
- External portfolio links: HTTP 200 at the time of verification.
- No test suite is defined in the existing project.

### Polish-pass state

- The three supplied project visuals are integrated without source-image modification: BDZ Schematics in Case 01, SMARTBG in Case 02 and Vertex AI Workspace in Case 03. Their alt text is localized in EN/RU/BG; SmartBuddy remains the unchanged Case 04 interactive preview.
- User-visible copy is routed through the existing `useTranslation()` architecture; brand names and established technology names intentionally remain untranslated.
- Project cases use a metadata → bounded preview → content flow. Preview heights are 320px on mobile, 384px on tablet/short desktop and at most 448px on larger desktop screens.
- Project content grids use `min-width: 0`, balanced headline wrapping and no absolute positioning for user content.
- The Technical Arsenal left column is internally centered and uses natural `text-wrap: balance`; the right list retains its own column with a bounded gap.
- Header navigation is protected with shrink rules, nowrap labels, responsive gaps and a z-index above the decorative noise layer.
- Responsive constraints were code-reviewed for 360×800, 390×844, 412×915, 768×1024, 1280×720, 1366×768, 1440×900 and 1920×1080. This is not an automated visual pass: no browser surface was connected in the working session.

## Next-agent guardrails

Preserve the real project data, contact information, multilingual structure, APK, Git history and Vercel configuration. Treat the large editorial project sequence as the primary product surface; avoid reverting it to a uniform card grid or adding generic dashboard/glassmorphism patterns.
