"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useTranslation, type Locale } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const locales: Locale[] = ["en", "ru", "bg"];
  const navItems = [
    ["projects", t("nav.projects")],
    ["skills", t("skills.title")],
    ["contact", t("nav.contact")],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[#080908]/80 backdrop-blur-xl">
      <div className="shell flex h-[4.5rem] min-w-0 items-center justify-between gap-4">
        <a href="#hero" className="group flex shrink-0 items-center gap-3" aria-label={t("ui.homeLabel")}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-xs font-bold transition-colors group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]">MP</span>
          <span className="mono hidden max-w-28 text-[10px] leading-[1.35] text-[var(--muted)] xl:block">{t("ui.independentEngineer")}</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 lg:flex xl:gap-8" aria-label={t("ui.primaryNavigation")}>
          {navItems.map(([id, label], index) => (
            <a key={id} href={`#${id}`} className="group whitespace-nowrap mono text-[9px] text-[var(--muted)] transition-colors hover:text-[var(--paper)] xl:text-[10px]">
              <span className="mr-2 text-white/25">0{index + 1}</span>{label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 xl:gap-6">
          <div className="hidden items-center gap-2 whitespace-nowrap md:flex">
            <span className="status-dot" aria-hidden="true" />
            <span className="mono text-[9px] text-[var(--muted)]">{t("header.statusShort")}</span>
          </div>
          <div className="relative">
            <button onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={t("ui.changeLanguage")} className="flex min-h-11 items-center gap-2 px-2 mono text-[10px] text-[var(--paper)]">
              {locale}<ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute right-0 top-full w-20 border border-white/15 bg-[#10110f] p-1 shadow-2xl">
                  {locales.map((item) => (
                    <button key={item} onClick={() => { setLocale(item); setOpen(false); }} className={`block min-h-10 w-full px-3 text-left mono text-[10px] transition-colors hover:bg-white/10 ${item === locale ? "text-[var(--signal)]" : "text-[var(--muted)]"}`}>{item}</button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.div style={{ scaleX, transformOrigin: "left" }} className="absolute bottom-[-1px] left-0 h-px w-full bg-[var(--signal)]" />
    </header>
  );
}
