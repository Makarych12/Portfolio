"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Bot, Camera, ScanLine } from "lucide-react";

export default function PhoneMockupWidget() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div className="relative" style={{ width: "160px", height: "320px" }}>
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[24px] border-[3px] border-zinc-700 bg-slate2 shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-5 w-16 -translate-x-1/2 rounded-b-lg bg-zinc-700" />

          {/* Screen */}
          <div className="absolute inset-[2px] top-5 bottom-5 overflow-hidden rounded-[20px] bg-obsidian">
            {/* Status bar */}
            <div className="flex items-center justify-between px-3 py-1">
              <span className="font-mono text-[7px] text-zinc-500">9:41</span>
              <span className="font-mono text-[7px] text-emerald-400">●</span>
            </div>

            {/* App header */}
            <div className="flex items-center gap-1.5 px-3 py-1">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40"
              >
                <Bot className="h-3 w-3 text-emerald-400" />
              </motion.div>
              <span className="font-mono text-[8px] font-bold text-emerald-400">Buddy AI</span>
            </div>

            {/* Receipt scanning area */}
            <div className="relative mx-2 mt-1 h-28 overflow-hidden rounded-md border border-zinc-800 bg-slate3">
              {/* Receipt lines */}
              <div className="space-y-1 p-2">
                {[0.9, 0.7, 0.85, 0.6, 0.8, 0.5].map((w, i) => (
                  <div
                    key={i}
                    className="h-0.5 rounded bg-zinc-600"
                    style={{ width: `${w * 100}%` }}
                  />
                ))}
              </div>
              {/* Camera icon */}
              <Camera className="absolute right-2 top-2 h-3 w-3 text-zinc-600" />

              {/* Laser scanning effect */}
              <div className="laser-line" />
              <ScanLine className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-emerald-400/30" />
            </div>

            {/* Budget progress bar */}
            <div className="mx-2 mt-2">
              <div className="mb-0.5 flex justify-between">
                <span className="font-mono text-[6px] text-zinc-500">{t("ui.budget")}</span>
                <span className="font-mono text-[6px] text-emerald-400">1,240 / 2,000</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "62%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                  style={{ boxShadow: "0 0 8px #10b981" }}
                />
              </div>
            </div>

            {/* OCR pipeline indicator */}
            <div className="mx-2 mt-2 space-y-0.5">
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[6px] text-cyan-400">Gemini 2.5 Flash</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[6px] text-amber-400">PP-OCRv5 / ncnn</span>
              </div>
            </div>

            {/* APK optimization badge */}
            <div className="absolute bottom-2 left-2 right-2 rounded border border-emerald-500/20 bg-emerald-500/5 p-1 text-center">
              <span className="font-mono text-[7px] text-emerald-400">
                {t("projects.items.smartbuddy.apkOptimized")}: 272MB → 87.5MB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
