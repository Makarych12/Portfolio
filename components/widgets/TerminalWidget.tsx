"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Terminal } from "lucide-react";

export default function TerminalWidget() {
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const lines = [
    { text: t("principles.lines.1"), color: "text-zinc-500" },
    { text: t("principles.lines.2"), color: "text-zinc-500" },
    { text: t("principles.lines.3"), color: "text-emerald-400" },
    { text: t("principles.lines.rule1"), color: "text-amber-400" },
    { text: t("principles.lines.rule2"), color: "text-amber-400" },
    { text: t("principles.lines.rule3"), color: "text-amber-400" },
    { text: t("principles.lines.rule4"), color: "text-cyan-400" },
    { text: t("principles.lines.rule5"), color: "text-amber-400" },
    { text: t("principles.lines.status"), color: "text-emerald-400" },
  ];

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines.length]);

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-obsidian">
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-slate2 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <Terminal className="h-3.5 w-3.5 text-zinc-500" />
        <span className="font-mono text-[10px] text-zinc-500">
          {t("principles.terminalTitle")}
        </span>
      </div>
      <div ref={containerRef} className="p-3 font-mono text-[11px] leading-relaxed min-h-[200px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={line.color}
          >
            <span className="text-zinc-600">$</span> {line.text}
          </motion.div>
        ))}
        {visibleLines >= lines.length && (
          <div className="terminal-cursor inline-block" />
        )}
      </div>
    </div>
  );
}
