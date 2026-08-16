"use client";

import { useTranslation } from "@/lib/i18n";

export default function SkipLink() {
  const { t } = useTranslation();

  return (
    <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--paper)] focus:px-4 focus:py-3 focus:text-black">
      {t("ui.skipToProjects")}
    </a>
  );
}
