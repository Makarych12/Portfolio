"use client";

import { motion } from "framer-motion";
import { useTranslation, type Locale } from "@/lib/i18n";
import { Circle, Globe } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const locales: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "bg", label: "BG" },
  ];

  const navItems = [
    { id: "hero", label: t("nav.hero") },
    { id: "projects", label: t("nav.projects") },
    { id: "principles", label: t("nav.principles") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-obsidian/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold tracking-tight text-amber-400 md:text-base">
            {t("header.logo")}
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 md:flex">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
            </motion.span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              {t("header.statusShort")}
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 font-mono text-xs font-medium text-zinc-300 transition-colors hover:border-amber-500/50 hover:text-amber-400"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale.toUpperCase()}
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-1 flex flex-col gap-0.5 rounded-md border border-zinc-700 bg-zinc-900 p-1 shadow-xl">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLocale(l.code);
                      setOpen(false);
                    }}
                    className={`rounded px-3 py-1.5 font-mono text-xs transition-colors ${
                      locale === l.code
                        ? "bg-amber-500/20 text-amber-400"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
