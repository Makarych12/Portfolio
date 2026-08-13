"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowDown, ExternalLink, Zap, Gauge, Cpu } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Zap,
      value: "4",
      label: t("hero.stats.releases"),
      color: "text-amber-400",
      border: "border-amber-500/30",
      glow: "box-glow-amber",
    },
    {
      icon: Gauge,
      value: "100/100",
      label: t("hero.stats.lighthouse"),
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "box-glow-emerald",
    },
    {
      icon: Cpu,
      value: "87.5MB",
      label: t("hero.stats.optimization"),
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "box-glow-cyan",
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/50 to-obsidian" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            {t("hero.ageCallout")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-2 text-4xl font-extrabold leading-tight tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
        >
          <span className="text-glow-amber">{t("hero.name")}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6"
        >
          <span className="font-mono text-lg uppercase tracking-widest text-cyan-400 text-glow-cyan md:text-2xl">
            {t("hero.role")}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base text-zinc-400 md:text-lg"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 rounded-lg border ${stat.border} bg-slate2/60 p-4 ${stat.glow}`}
            >
              <stat.icon className={`mb-1 h-5 w-5 ${stat.color}`} />
              <span className={`font-mono text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-md border border-amber-500/50 bg-amber-500/10 px-6 py-3 font-mono text-sm font-semibold text-amber-400 transition-all hover:bg-amber-500/20 hover:box-glow-amber"
          >
            <span>[ {t("hero.exploreProjects")} ]</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://bdz-schematics.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-6 py-3 font-mono text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:box-glow-cyan"
          >
            <span>[ {t("hero.liveSchematics")} ]</span>
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
