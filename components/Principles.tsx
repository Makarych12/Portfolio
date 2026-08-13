"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslation } from "@/lib/i18n";
import { Code2, GitBranch, Bot, FileCheck } from "lucide-react";

const TerminalWidget = dynamic(() => import("./widgets/TerminalWidget"), { ssr: false });

export default function Principles() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Code2,
      title: t("principles.lines.rule1"),
      color: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      icon: FileCheck,
      title: t("principles.lines.rule2"),
      color: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      icon: GitBranch,
      title: t("principles.lines.rule3"),
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      icon: Bot,
      title: t("principles.lines.rule4"),
      color: "text-amber-400",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section id="principles" className="relative border-t border-zinc-800/50 py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            {t("principles.title")}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            {t("principles.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-center gap-3 rounded-lg border ${card.border} bg-slate2/60 p-4`}
              >
                <card.icon className={`h-5 w-5 shrink-0 ${card.color}`} />
                <span className="font-mono text-xs text-zinc-300">{card.title}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TerminalWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
