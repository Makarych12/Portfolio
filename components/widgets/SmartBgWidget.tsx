"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { CheckCircle2, Gauge, Zap, Accessibility } from "lucide-react";

export default function SmartBgWidget() {
  const { t } = useTranslation();

  const metrics = [
    { label: "Performance", value: 100, icon: Zap, color: "text-emerald-400" },
    { label: "Accessibility", value: 100, icon: Accessibility, color: "text-emerald-400" },
    { label: "Best Practices", value: 100, icon: CheckCircle2, color: "text-emerald-400" },
    { label: "SEO", value: 100, icon: Gauge, color: "text-emerald-400" },
  ];

  const tags = ["OpenAI", "WCAG AA", "Next.js", "Finance", "Taxes", "Real Estate", "Auto", "Gov"];

  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-emerald-500/30 bg-slate2 p-3 box-glow-emerald">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            {t("projects.items.smartbg.metrics")}
          </span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[9px] text-emerald-400">LIVE</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900/50 p-2">
              <m.icon className={`h-4 w-4 ${m.color}`} />
              <div className="flex flex-col">
                <span className="font-mono text-[8px] uppercase text-zinc-500">{m.label}</span>
                <span className={`font-mono text-sm font-bold ${m.color}`}>{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="rounded border border-cyan-500/20 bg-cyan-500/5 px-2 py-0.5 font-mono text-[9px] text-cyan-400"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
