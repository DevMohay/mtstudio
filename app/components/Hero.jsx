import React from 'react'
import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } },
};

const GlowText = ({ children, className = "" }) => (
  <span
    className={`animate-pulse-slow bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent [text-shadow:_0_0_20px_rgba(57,255,20,0.75)] ${className}`}
  >
    {children}
  </span>
);

function Hero() {
  return (
    <section id="home" className="relative *:min-h-[calc(100v)] rounded-2xl bg-black/10 max-w-7xl mx-auto backdrop-blur-lg mb-10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 rounded-2xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-10 "
          >
            <motion.div variants={item}>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-neutral-900/50 px-3 py-1 text-xs uppercase tracking-widest text-emerald-300/90">
                <Sparkles className="size-3" /> Software That Scales Faster
              </p>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
                Build <GlowText>Modern</GlowText>, <GlowText>Neon</GlowText>{" "}
                Experiences
                <br /> for your next big launch
              </h1>
              <p className="mt-4 max-w-xl text-neutral-300/90">
                We craft blazing-fast websites, SaaS, and mobile apps with a
                premium look. Subtle 3D, neon glow, and smooth motion—without
                sacrificing performance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-2xl bg-emerald-400/90 px-5 py-3 font-semibold text-neutral-950 shadow-[0_0_32px_rgba(57,255,20,0.5)] hover:bg-emerald-400"
                >
                  Get a Quote
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-emerald-400/40 bg-neutral-900/40 px-5 py-3 font-semibold text-emerald-200"
                >
                  See Our Work
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-300" /> ISO-ready
                  process
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-emerald-300" /> 2x faster delivery
                </div>
              </div>
            </motion.div>
           
          </motion.div>
        </div>
      </section>
  )
}

export default Hero