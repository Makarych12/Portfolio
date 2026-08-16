"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";
import { ArrowDownToLine, ArrowUpRight, Send } from "lucide-react";

const PhoneMockupWidget = dynamic(() => import("./widgets/PhoneMockupWidget"), { ssr: false });

type FilterKey = "all" | "web" | "mobile" | "systems";

type Project = {
  id: string;
  category: Exclude<FilterKey, "all">;
  title: string;
  desc: string;
  note: string;
  tags: string[];
  accent: string;
  url?: string;
  download?: string;
  image?: string;
  alt?: string;
  visual?: ReactNode;
};

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterKey>("all");
  const reduced = useReducedMotion();
  const filters: FilterKey[] = ["all", "web", "mobile", "systems"];
  const projects: Project[] = [
    { id: "schematics", category: "web" as const, title: t("projects.items.schematics.title"), desc: t("projects.items.schematics.desc"), note: t("projects.items.schematics.market"), tags: ["Next.js", t("ui.svgSystems"), t("ui.simulation")], url: "https://bdz-schematics.vercel.app", accent: "#ff5a36", image: "/projects/bdz-schematics.png", alt: t("projects.items.schematics.alt") },
    { id: "smartbg", category: "web" as const, title: t("projects.items.smartbg.title"), desc: t("projects.items.smartbg.desc"), note: t("ui.digitalServiceEcosystem"), tags: ["OpenAI", "WCAG AA", "100 Lighthouse"], url: "https://smartbg-one.vercel.app", accent: "#b8ff65", image: "/projects/smartbg.png", alt: t("projects.items.smartbg.alt") },
    { id: "vertex", category: "systems" as const, title: t("projects.items.vertex.title"), desc: t("projects.items.vertex.desc"), note: t("ui.specificationDrivenEngineering"), tags: ["TypeScript", t("ui.agentSystems"), t("ui.workflow")], url: "https://vertex-ai-workspace.vercel.app", accent: "#d4b9ff", image: "/projects/vertex-ai-workspace.png", alt: t("projects.items.vertex.alt") },
    { id: "smartbuddy", category: "mobile" as const, title: t("projects.items.smartbuddy.title"), desc: t("projects.items.smartbuddy.desc"), note: t("projects.items.smartbuddy.betaStatus"), tags: ["Kotlin", "Gemini 2.5", "C++ / ncnn"], accent: "#8cd6ff", visual: <PhoneMockupWidget />, download: "/downloads/SmartBuddy-AI-FINAL-RELEASE-1.0.0-RC2.apk" },
  ];
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative scroll-mt-20 py-[clamp(5rem,8vw,8rem)]">
      <div className="shell">
        <div className="section-rule grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-5">01 / {t("ui.selectedWork")}</p>
            <h2 className="max-w-5xl text-[clamp(3rem,7.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em]">{t("projects.title")}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] md:col-span-4 md:justify-self-end">{t("projects.subtitle")}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-white/15 pb-4" role="group" aria-label={t("ui.projectFilters")}>
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-11 border-b px-1 mono text-[9px] transition-colors ${filter === item ? "border-[var(--signal)] text-[var(--paper)]" : "border-transparent text-[var(--muted)] hover:text-[var(--paper)]"}`}>{t(`projects.filters.${item}`)}</button>
          ))}
        </div>

        <div className="mt-12 space-y-[clamp(4.5rem,7vw,7rem)]">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article key={project.id} layout initial={{ opacity: 0, y: reduced ? 0 : 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -20 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} className="min-w-0">
                <div className="mb-4 flex items-center justify-between gap-4 border-t border-white/15 pt-4 mono text-[9px] text-[var(--muted)]">
                  <span>{t("ui.caseLabel")} 0{projects.findIndex((item) => item.id === project.id) + 1}</span>
                  <span className="text-right">{t(`projects.filters.${project.category}`)}</span>
                </div>

                <div
                  className={`project-stage ${project.image ? "project-stage--image" : ""}`}
                  style={{
                    background: `radial-gradient(circle at ${index % 2 ? "20%" : "80%"} 20%, ${project.accent}18, transparent 38%), #0d0e0d`,
                    "--case-accent": project.accent,
                  } as CSSProperties}
                >
                  <span className="project-index z-20 select-none" aria-hidden="true">0{projects.findIndex((item) => item.id === project.id) + 1}</span>
                  {project.image && project.alt ? (
                    <motion.div
                      className="project-image-frame absolute"
                      initial={reduced ? false : { opacity: 0 }}
                      whileInView={reduced ? undefined : { opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 2.2rem), (max-width: 1600px) calc(100vw - 6.4vw), 1480px"
                        className="object-contain object-center"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                    </motion.div>
                  ) : (
                    <div className="relative z-10 flex h-full items-center justify-center px-5 py-4 sm:px-8 sm:py-5">
                      <div className="w-full max-w-xs scale-[0.86] sm:scale-100">{project.visual}</div>
                    </div>
                  )}
                  {!project.image && <div className="absolute bottom-4 left-4 right-4 z-20 mono text-[8px] text-white/45">{t("ui.interactivePreview")} / {project.id}</div>}
                </div>

                <div className="mt-6 grid min-w-0 gap-7 lg:grid-cols-12 lg:gap-10">
                  <div className="min-w-0 lg:col-span-5">
                    <h3 className="max-w-[19ch] text-pretty text-[clamp(2.25rem,4vw,4.6rem)] font-semibold leading-[1.01] tracking-[-0.045em]">{project.title}</h3>
                  </div>
                  <div className="min-w-0 lg:col-span-7 lg:pl-[clamp(1rem,3vw,3.5rem)]">
                    <p className="text-sm leading-7 text-[var(--muted)] md:text-[0.95rem]">{project.desc}</p>
                    <p className="mt-6 border-l border-[var(--signal)] pl-4 mono text-[9px] leading-relaxed" style={{ borderColor: project.accent }}>{project.note}</p>
                    <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-white/15 px-2.5 py-1.5 mono text-[8px] text-white/55">{tag}</span>)}</div>
                    <div className="mt-8 flex flex-wrap gap-6">
                      {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="magnetic-link mono text-[9px]">{t("projects.liveDemo")}<ArrowUpRight className="h-4 w-4" /></a>}
                      {project.download && <a href={project.download} download className="magnetic-link mono text-[9px]">{t("projects.items.smartbuddy.downloadApk")}<ArrowDownToLine className="h-4 w-4" /></a>}
                      {project.download && <a href="https://t.me/MaximLive12" target="_blank" rel="noopener noreferrer" aria-label={t("projects.items.smartbuddy.contactTelegram")} className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-[var(--muted)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"><Send className="h-4 w-4" /></a>}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
