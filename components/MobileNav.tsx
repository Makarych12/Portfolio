"use client";

import { useTranslation } from "@/lib/i18n";
import { Home, FolderGit2, Code2, Mail } from "lucide-react";

export default function MobileNav() {
  const { t } = useTranslation();

  const items = [
    { id: "hero", icon: Home, label: t("nav.hero") },
    { id: "projects", icon: FolderGit2, label: t("nav.projects") },
    { id: "principles", icon: Code2, label: t("nav.principles") },
    { id: "contact", icon: Mail, label: t("nav.contact") },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <div className="flex items-center gap-1 rounded-full border border-zinc-700/60 bg-slate2/90 p-1.5 backdrop-blur-xl shadow-2xl">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1.5 transition-colors hover:bg-zinc-800"
          >
            <item.icon className="h-4 w-4 text-zinc-400" />
            <span className="font-mono text-[8px] text-zinc-500">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
