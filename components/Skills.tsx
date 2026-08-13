"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Code2, Database, Send, Wrench } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Code2,
      title: t("skills.languages"),
      list: t("skills.languagesList"),
      color: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      icon: Database,
      title: t("skills.backend"),
      list: t("skills.backendList"),
      color: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      icon: Send,
      title: t("skills.telegram"),
      list: t("skills.telegramList"),
      color: "text-cyan-400",
      border: "border-cyan-500/20",
    },
  ];

  return (
    <section id="skills" className="relative border-t border-zinc-800/50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            {t("skills.title")}
          </h2>
          <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-lg border ${card.border} bg-slate2/60 p-5`}
            >
              <div className="mb-3 flex items-center gap-2">
                <card.icon className={`h-5 w-5 ${card.color}`} />
                <h3 className={`font-mono text-sm font-bold ${card.color}`}>
                  {card.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">
                {card.list}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-5"
        >
          <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
          <p className="text-sm italic leading-relaxed text-zinc-300">
            {t("skills.philosophy")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
