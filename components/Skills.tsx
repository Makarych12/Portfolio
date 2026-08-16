"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Skills() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const ticker = ["interfaces", "aiSystems", "backend", "mobile", "automation", "performance"];
  const groups = [
    ["01", t("skills.languages"), t("skills.languagesList")],
    ["02", t("skills.backend"), t("skills.backendList")],
    ["03", t("skills.telegram"), t("skills.telegramList")],
  ];

  return (
    <section id="skills" className="shell py-[var(--section-space)]">
      <div className="section-rule grid gap-12 lg:grid-cols-12">
        <div className="flex lg:col-span-5 lg:justify-center">
          <div className="w-full max-w-[30rem] lg:px-5 xl:px-8">
            <p className="eyebrow mb-5">02 / {t("ui.capabilities")}</p>
            <h2 className="max-w-[8.5em] text-balance text-[clamp(3rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.055em]">{t("skills.title")}</h2>
            <p className="mt-8 max-w-[38rem] text-base leading-7 text-[var(--muted)] lg:max-w-[25rem]">{t("skills.philosophy")}</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-[clamp(2rem,5vw,5rem)]">
          {groups.map(([number, title, copy], index) => (
            <motion.article key={number} initial={{ opacity: 0, x: reduced ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/15 py-8 first:pt-0">
              <span className="mono text-[9px] text-[var(--signal)]">{number}</span>
              <div><h3 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{copy}</p></div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-white/15 py-5" aria-hidden="true">
        <div className="ticker-track flex w-max whitespace-nowrap mono text-[10px] text-white/45">
          {[0, 1].map((copy) => <div key={copy} className="flex gap-10 pr-10">{ticker.map((item) => <span key={`${copy}-${item}`} className="flex items-center gap-10">{t(`ui.ticker.${item}`)}<i className="h-1 w-1 rounded-full bg-[var(--signal)]" /></span>)}</div>)}
        </div>
      </div>
    </section>
  );
}
