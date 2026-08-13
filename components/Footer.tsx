"use client";

import { useTranslation } from "@/lib/i18n";
import { Github, Send, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { icon: Github, label: t("footer.github"), href: "https://github.com/Makarych12/Portfolio", color: "text-zinc-400 hover:text-amber-400" },
    { icon: Send, label: t("footer.telegram"), href: "https://t.me/MaximLive12", color: "text-zinc-400 hover:text-cyan-400" },
    { icon: Mail, label: t("footer.email"), href: "mailto:contact@popkov.dev", color: "text-zinc-400 hover:text-emerald-400" },
  ];

  return (
    <footer id="contact" className="border-t border-zinc-800/60 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
            {t("footer.title")}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-md border border-zinc-800 bg-slate2 px-4 py-2 font-mono text-xs transition-all hover:border-zinc-600 ${link.color}`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 pt-4">
            <span className="font-mono text-[10px] text-zinc-600">
              © 2026 Maksim Popkov. {t("footer.rights")}.
            </span>
            <span className="font-mono text-[10px] text-zinc-600">
              {t("footer.builtWith")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
