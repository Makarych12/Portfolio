"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
  const links = [
    [t("footer.github"), "https://github.com/Makarych12/Portfolio"],
    [t("footer.telegram"), "https://t.me/MaximLive12"],
  ];
  const mailto = `mailto:maksteplov1287@gmail.com?subject=${encodeURIComponent(t("footer.mailSubject"))}`;

  return (
    <footer id="contact" className="relative overflow-hidden pb-28 pt-[var(--section-space)] lg:pb-12">
      <div className="shell">
        <div className="section-rule">
          <p className="eyebrow">04 / {t("footer.title")}</p>
          <p className="mt-10 max-w-5xl text-pretty text-[clamp(3rem,8.2vw,9rem)] font-bold leading-[0.9] tracking-[-0.065em]">{t("ui.contactLead")} <span className="outline-type">{t("ui.contactEmphasis")}</span></p>
          <motion.a
            href={mailto}
            aria-label={t("footer.ctaAria")}
            className="contact-cta group mt-12"
            animate={reduced ? { x: 0, y: 0 } : magneticOffset}
            transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.65 }}
            onPointerMove={(event) => {
              if (reduced || event.pointerType !== "mouse") return;
              const bounds = event.currentTarget.getBoundingClientRect();
              setMagneticOffset({
                x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 10,
                y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 8,
              });
            }}
            onPointerLeave={() => setMagneticOffset({ x: 0, y: 0 })}
          >
            <span className="contact-cta__sweep" aria-hidden="true" />
            <span className="relative z-10 flex min-w-0 items-center gap-3">
              <span className="status-dot shrink-0" aria-hidden="true" />
              <span className="mono text-[0.68rem] font-semibold tracking-[0.12em] transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1 sm:text-xs">{t("footer.cta")}</span>
            </span>
            <span className="relative z-10 hidden mono text-[8px] text-white/40 lg:block">{t("footer.availability")}</span>
            <ArrowUpRight className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-6 sm:w-6" aria-hidden="true" />
          </motion.a>
        </div>

        <div className="mt-24 grid gap-8 border-t border-white/15 pt-6 md:grid-cols-12 md:items-end">
          <div className="flex flex-wrap gap-6 md:col-span-6">{links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="mono text-[9px] text-[var(--muted)] transition-colors hover:text-[var(--signal)]">{label} ↗</a>)}</div>
          <div className="mono text-[8px] leading-relaxed text-white/30 md:col-span-3">{t("ui.location")}<br />{t("ui.remoteCollaboration")}</div>
          <div className="mono text-[8px] text-white/30 md:col-span-3 md:text-right">© 2026 {t("hero.name")}<br />{t("footer.rights")}</div>
        </div>
      </div>
    </footer>
  );
}
