"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Principles() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const rules = ["rule1", "rule2", "rule3", "rule4"];

  return (
    <section id="principles" className="relative bg-[var(--paper)] py-[var(--section-space)] text-[var(--ink)]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mono text-[9px] text-black/50">03 / {t("ui.workingSystem")}</p>
            <h2 className="mt-5 text-[clamp(3rem,5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.06em]">{t("principles.title")}</h2>
          </div>
          <div className="lg:col-span-8 lg:pl-[7vw]">
            {rules.map((rule, index) => (
              <motion.div key={rule} initial={{ opacity: 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.06 }} className="group grid grid-cols-[3rem_1fr_auto] items-start gap-3 border-t border-black/20 py-6 md:grid-cols-[5rem_1fr_auto]">
                <span className="mono text-[9px] text-black/45">0{index + 1}</span>
                <p className="max-w-2xl text-lg font-medium leading-snug tracking-[-0.025em] md:text-2xl">{t(`principles.lines.${rule}`).replace(/^► [^:]+:\s*/, "")}</p>
                <span className="mt-1 h-3 w-3 rounded-full border border-black/40 transition-colors group-hover:bg-[var(--signal)]" />
              </motion.div>
            ))}
            <div className="mt-10 flex items-center gap-3 mono text-[9px]"><span className="h-2 w-2 rounded-full bg-black" />{t("principles.lines.status")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
