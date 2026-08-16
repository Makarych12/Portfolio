"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";

const reveal = { hidden: { y: "110%" }, visible: (delay = 0) => ({ y: 0, transition: { duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] as const } }) };

export default function Hero() {
  const { t } = useTranslation();
  const [firstName, ...lastNameParts] = t("hero.name").split(" ");
  const lastName = lastNameParts.join(" ");
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 90, damping: 18 });
  const springY = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  function move(event: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const box = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - box.left) / box.width - 0.5);
    my.set((event.clientY - box.top) / box.height - 0.5);
  }

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden pt-[7rem] md:pt-[8.5rem]">
      <div className="hero-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="shell relative z-10 flex min-h-[calc(100svh-7rem)] flex-col justify-between pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="eyebrow mb-8 md:mb-12">{t("hero.role")}</motion.div>
            <h1 className="display-type uppercase" aria-label={t("hero.name")}>
              <span className="block overflow-hidden pb-[0.08em]"><motion.span custom={0.08} variants={reveal} initial="hidden" animate="visible" className="block">{firstName}</motion.span></span>
              <span className="block overflow-hidden pb-[0.12em]"><motion.span custom={0.18} variants={reveal} initial="hidden" animate="visible" className="outline-type block">{lastName}</motion.span></span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[27rem] self-end lg:col-span-4 lg:mx-0 lg:-mb-10 lg:max-w-none" onMouseMove={move} onMouseLeave={() => { mx.set(0); my.set(0); }}>
            <motion.div style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }} className="signal-field">
              <div className="crosshair absolute inset-0" />
              <div className="orbit spin-slow" />
              <div className="absolute inset-[20%] rotate-[28deg] rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--signal)] blur-[50px] opacity-30" />
              <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--signal)] bg-[#10110f] mono text-[9px] text-[var(--signal)]">MP / 26</div>
              <span className="absolute left-6 top-1/2 -translate-y-1/2 mono text-[8px] text-[var(--muted)]">42.6977 N</span>
              <span className="absolute bottom-7 right-8 mono text-[8px] text-[var(--muted)]">23.3219 E</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="mt-12 grid grid-cols-1 gap-8 border-t border-white/15 pt-5 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:col-span-6 md:text-lg">{t("hero.tagline")}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 md:col-span-4">
            {["Next.js", t("ui.ticker.aiSystems"), "Kotlin / C++"].map((item) => <span key={item} className="mono text-[9px] text-white/55">{item}</span>)}
          </div>
          <a href="#projects" className="magnetic-link justify-start mono text-[10px] md:col-span-2 md:justify-end">{t("hero.exploreProjects")}<ArrowDownRight className="h-4 w-4" /></a>
        </motion.div>
      </div>

      <a href="https://bdz-schematics.vercel.app" target="_blank" rel="noopener noreferrer" className="absolute right-[var(--page-pad)] top-[5.45rem] z-20 hidden items-center gap-2 mono text-[9px] text-[var(--muted)] transition-colors hover:text-[var(--signal)] md:flex">{t("ui.liveSystem")} <ArrowUpRight className="h-3 w-3" /></a>
    </section>
  );
}
