"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ExternalLink, Folder, Download, Send, Circle } from "lucide-react";

const SchematicWidget = dynamic(() => import("./widgets/SchematicWidget"), { ssr: false });
const SmartBgWidget = dynamic(() => import("./widgets/SmartBgWidget"), { ssr: false });
const PhoneMockupWidget = dynamic(() => import("./widgets/PhoneMockupWidget"), { ssr: false });
const TerminalWidget = dynamic(() => import("./widgets/TerminalWidget"), { ssr: false });

type FilterKey = "all" | "web" | "mobile" | "systems";

interface Project {
  id: string;
  category: FilterKey;
  url: string;
  titleKey: string;
  descKey: string;
  accent: string;
  borderColor: string;
  glowClass: string;
  widget: React.ReactNode;
  extraInfo?: string;
  isSmartBuddy?: boolean;
}

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t("projects.filters.all") },
    { key: "web", label: t("projects.filters.web") },
    { key: "mobile", label: t("projects.filters.mobile") },
    { key: "systems", label: t("projects.filters.systems") },
  ];

  const projects: Project[] = [
    {
      id: "schematics",
      category: "web",
      url: "https://bdz-schematics.vercel.app",
      titleKey: "projects.items.schematics.title",
      descKey: "projects.items.schematics.desc",
      accent: "text-amber-400",
      borderColor: "border-amber-500/20",
      glowClass: "hover:box-glow-amber",
      widget: <SchematicWidget />,
      extraInfo: t("projects.items.schematics.market"),
    },
    {
      id: "smartbg",
      category: "web",
      url: "https://smartbg-one.vercel.app",
      titleKey: "projects.items.smartbg.title",
      descKey: "projects.items.smartbg.desc",
      accent: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      glowClass: "hover:box-glow-emerald",
      widget: <SmartBgWidget />,
    },
    {
      id: "smartbuddy",
      category: "mobile",
      url: "#",
      titleKey: "projects.items.smartbuddy.title",
      descKey: "projects.items.smartbuddy.desc",
      accent: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      glowClass: "hover:box-glow-cyan",
      widget: <PhoneMockupWidget />,
      isSmartBuddy: true,
    },
    {
      id: "vertex",
      category: "systems",
      url: "https://vertex-ai-workspace.vercel.app",
      titleKey: "projects.items.vertex.title",
      descKey: "projects.items.vertex.desc",
      accent: "text-amber-400",
      borderColor: "border-amber-500/20",
      glowClass: "hover:box-glow-amber",
      widget: <TerminalWidget />,
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            {t("projects.title")}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-md border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                filter === f.key
                  ? "border-amber-500/50 bg-amber-500/10 text-amber-400"
                  : "border-zinc-800 bg-slate2 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`group relative flex flex-col rounded-xl border ${project.borderColor} bg-slate2/60 p-5 transition-all ${project.glowClass}`}
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Folder className={`h-4 w-4 ${project.accent}`} />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                      {t("projects.category")}: {t(`projects.filters.${project.category === "all" ? "web" : project.category}`)}
                    </span>
                  </div>
                </div>

                <h3 className={`mb-2 text-lg font-bold ${project.accent}`}>
                  {t(project.titleKey)}
                </h3>

                {project.extraInfo && (
                  <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2 py-0.5">
                    <span className="font-mono text-[9px] text-amber-400">{project.extraInfo}</span>
                  </div>
                )}

                <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                  {t(project.descKey)}
                </p>

                <div className="mb-4">{project.widget}</div>

                <div className="mt-auto">
                  {project.isSmartBuddy ? (
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1">
                        <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
                        <span className="font-mono text-[9px] text-emerald-400">{t("projects.items.smartbuddy.betaStatus")}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="/downloads/SmartBuddy-v2.0-alpha.apk"
                          download
                          className={`inline-flex items-center gap-2 rounded-md border ${project.borderColor} bg-slate3 px-4 py-2 font-mono text-xs font-semibold ${project.accent} transition-all hover:bg-slate-700/40`}
                        >
                          <Download className="h-3.5 w-3.5" />
                          {t("projects.items.smartbuddy.downloadApk")}
                        </a>
                        <a
                          href="https://t.me/MaximLive12"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 font-mono text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20"
                        >
                          <Send className="h-3.5 w-3.5" />
                          {t("projects.items.smartbuddy.contactTelegram")}
                        </a>
                      </div>
                    </div>
                  ) : project.url !== "#" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-md border ${project.borderColor} bg-slate3 px-4 py-2 font-mono text-xs font-semibold ${project.accent} transition-all hover:bg-slate-700/40`}
                    >
                      {t("projects.liveDemo")}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-slate3 px-4 py-2 font-mono text-xs text-zinc-500">
                      Mobile App — Kotlin & Jetpack Compose
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
