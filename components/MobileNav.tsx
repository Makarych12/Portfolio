"use client";

import { useTranslation } from "@/lib/i18n";
import { BriefcaseBusiness, Home, Mail } from "lucide-react";

export default function MobileNav() {
  const { t } = useTranslation();
  const items = [
    ["hero", Home, t("nav.hero")],
    ["projects", BriefcaseBusiness, t("nav.projects")],
    ["contact", Mail, t("nav.contact")],
  ] as const;

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden" aria-label={t("ui.mobileNavigation")}>
      <div className="flex items-center gap-1 rounded-full border border-white/15 bg-[#10110f]/90 p-1.5 shadow-2xl backdrop-blur-xl">
        {items.map(([id, Icon, label]) => (
          <a key={id} href={`#${id}`} aria-label={label} className="grid h-11 w-14 place-items-center rounded-full text-[var(--muted)] transition-colors active:bg-white/10 active:text-[var(--paper)]">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </nav>
  );
}
