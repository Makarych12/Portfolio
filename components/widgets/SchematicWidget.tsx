"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

type FilterType = "power" | "control" | "protection";

export default function SchematicWidget() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>("power");

  const filters: { key: FilterType; color: string; label: string }[] = [
    { key: "power", color: "#f59e0b", label: t("projects.filters_labels.power") },
    { key: "control", color: "#06b6d4", label: t("projects.filters_labels.control") },
    { key: "protection", color: "#10b981", label: t("projects.filters_labels.protection") },
  ];

  const currentColor = filters.find((f) => f.key === filter)?.color || "#f59e0b";

  return (
    <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-slate2 p-3">
      <div className="mb-2 flex items-center gap-1.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded px-2 py-1 font-mono text-[9px] uppercase tracking-wider transition-all ${
              filter === f.key
                ? "bg-zinc-800 text-zinc-100"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            style={
              filter === f.key
                ? { color: f.color, boxShadow: `0 0 10px ${f.color}40` }
                : {}
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 300 160" className="w-full">
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={currentColor} stopOpacity="0.2" />
            <stop offset="50%" stopColor={currentColor} stopOpacity="1" />
            <stop offset="100%" stopColor={currentColor} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[20, 60, 100, 140].map((y) => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#27272a" strokeWidth="0.5" />
        ))}

        {/* Nodes */}
        {[
          { x: 50, y: 40, label: "01" },
          { x: 150, y: 40, label: "02" },
          { x: 250, y: 40, label: "03" },
          { x: 50, y: 120, label: "04" },
          { x: 150, y: 120, label: "05" },
          { x: 250, y: 120, label: "06" },
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="#18181b"
              stroke={currentColor}
              strokeWidth="1.5"
              className="wire-glow"
              style={{ color: currentColor }}
            />
            <text
              x={node.x}
              y={node.y + 2}
              textAnchor="middle"
              className="font-mono"
              fontSize="6"
              fill={currentColor}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Animated wires */}
        <AnimatePresence mode="wait">
          <motion.g
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filter === "power" && (
              <>
                <motion.line x1="50" y1="40" x2="150" y2="40" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                <motion.line x1="150" y1="40" x2="250" y2="40" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
              </>
            )}
            {filter === "control" && (
              <>
                <motion.line x1="50" y1="40" x2="50" y2="120" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                <motion.line x1="50" y1="120" x2="150" y2="120" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                <motion.line x1="150" y1="120" x2="250" y2="120" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
              </>
            )}
            {filter === "protection" && (
              <>
                <motion.line x1="150" y1="40" x2="150" y2="120" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                <motion.line x1="250" y1="40" x2="250" y2="120" stroke="url(#wireGradient)" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
              </>
            )}
          </motion.g>
        </AnimatePresence>

        {/* Pulsing dots on active wires */}
        <motion.circle r="2" fill={currentColor} className="wire-glow" style={{ color: currentColor }}
          animate={{ cx: filter === "power" ? [50, 250] : filter === "control" ? [50, 250] : [150, 250],
                     cy: filter === "power" ? 40 : filter === "control" ? 120 : [40, 120] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}
