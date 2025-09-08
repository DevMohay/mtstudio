"use client";
import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import {
  Code2,
  Sparkles,
  Rocket,
  Layers,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
} from "lucide-react";

const GlowText = ({ children, className = "" }) => (
  <span
    className={`[text-shadow:_0_0_16px_rgba(57,255,20,0.75)] drop-shadow-[0_0_16px_rgba(57,255,20,0.5)] ${className}`}
  >
    {children}
  </span>
);

export default function NeonGSS() {
  const floatingShapes = [
    {
      className:
        "w-22 h-22 rounded-full border-[6px] border-emerald-400/40 blur-sm", // ring
      animate: {
        x: [0, 40, -40, 0],
        y: [0, 30, -30, 0],
        rotate: [0, 15, -15, 0],
      },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      style: { top: "10%", left: "20%" },
    },
    {
      className:
        "w-32 h-32 rounded-full border-[6px] border-emerald-400/40 blur-sm", // ring
      animate: {
        x: [0, 40, -40, 0],
        y: [0, 30, -30, 0],
        rotate: [0, 15, -15, 0],
      },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      style: { top: "0%", left: "80%" },
    },

    {
      className:
        "w-0 h-0 border-l-[48px] border-r-[48px] border-emerald-400/40 border-b-[84px] border-l-transparent border-r-transparent  blur-2xl",
      animate: {
        x: [0, -30, 30, 0],
        y: [0, 25, -25, 0],
        rotate: [0, -20, 28, 0],
      },
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      style: { top: "40%", left: "70%" },
    },
    {
      className: "w-20 h-20 rounded-full border-4 border-blue-400/30 blur-xl", // ring
      animate: {
        x: [0, 25, -25, 0],
        y: [0, -20, 20, 0],
        rotate: [0, 10, -10, 0],
      },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      style: { top: "70%", left: "15%" },
    },
    {
      className: "w-28 h-28 bg-purple-500/25 clip-path-triangle blur-2xl", // triangle
      animate: {
        x: [0, -20, 20, 0],
        y: [0, 15, -15, 0],
        rotate: [0, 30, -30, 0],
      },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      style: { top: "25%", left: "50%" },
    },
    {
      className: "w-16 h-16 rounded-full bg-yellow-400/20 blur-xl", // small circle
      animate: { x: [0, 15, -15, 0], y: [0, 20, -20, 0] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      style: { top: "80%", left: "60%" },
    },
  ];

  return (
    <div className="min-h-screen  text-neutral-200 antialiased selection:bg-emerald-300/30 selection:text-emerald-100 w-[100%] bg-transparent">
      {/* BACKGROUND LAYERS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        {/* neon radial focus */}
        <div className="absolute -inset-[20%] blur-3xl opacity-30 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(57,255,20,0.25),transparent_60%)]"></div>
        {/* animated blobs */}
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            aria-hidden
            className={`absolute ${shape.className}`}
            style={shape.style}
            animate={shape.animate}
            transition={shape.transition}
          />
        ))}
        <motion.div
          aria-hidden
          className="absolute top-[-10%] left-[-10%] w-[50vmax] h-[50vmax] rounded-full 
             bg-[radial-gradient(circle_at_30%_30%,rgba(57,150,20,0.75),rgba(0,0,0,0))] blur-2xl"
          animate={{
            x: [0, 80, -40, 0], // বড় range → দেখা যাবে
            y: [60, 30, -30, 0],
            rotate: [10, 0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden
          className="absolute bottom-[-20%] right-[-10%] w-[55vmax] h-[55vmax] rounded-full 
             bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,153,0.35),rgba(0,0,0,0))] blur-3xl"
          animate={{
            x: [0, -35, 35, 0],
            y: [0, -25, 25, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO */}
      <Hero />

      {/* HOW WE WORK */}
      <HowWeWork />

      {/* SERVICES */}
      <Services />

      {/* WORK */}
      <Project />

      {/* WHY CHOOSE US */}
      <section id="why" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why <GlowText>Choose</GlowText> GSS
            </h2>
            <p className="mt-2 text-neutral-400">
              We blend aesthetics with engineering excellence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Conversion-first",
                text: "Every pixel supports a business goal—leads, signups, sales.",
              },
              {
                title: "Ops ready",
                text: "CI/CD, monitoring, backups, and docs from day one.",
              },
              {
                title: "Transparent pricing",
                text: "Fixed-scope packages + flexible retainers.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-3xl border border-emerald-400/30 bg-neutral-900/50 p-6 shadow-[0_0_24px_rgba(57,255,20,0.15)]"
              >
                <h4 className="font-semibold text-neutral-100">{b.title}</h4>
                <p className="mt-2 text-sm text-neutral-300/90">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's build your <GlowText>vision</GlowText>
            </h2>
            <p className="mt-2 text-neutral-400">
              Tell us a little about your project. We'll get back within 1
              business day.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Project Type
              </label>
              <select className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60">
                <option>Website / Landing</option>
                <option>SaaS / Web App</option>
                <option>Mobile App</option>
                <option>Brand & Creative</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Budget
              </label>
              <select className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60">
                <option>$1k – $3k</option>
                <option>$3k – $8k</option>
                <option>$8k – $15k</option>
                <option>$15k+</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-emerald-400/30 bg-neutral-900/60 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/60"
                placeholder="Tell us what you're building..."
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-emerald-300" /> +880 1XXX-XXXXXX
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-emerald-300" /> hello@gss.studio
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <MapPin className="size-4 text-emerald-300" /> Dhaka,
                  Bangladesh
                </div>
              </div>
              <button
                className="rounded-2xl bg-emerald-400/90 px-6 py-3 font-semibold text-neutral-900 shadow-[0_0_32px_rgba(57,255,20,0.5)] hover:bg-emerald-400"
                type="submit"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-400/20 bg-neutral-950/60 py-8"></footer>
    </div>
  );
}
