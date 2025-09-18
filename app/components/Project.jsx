"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const letterVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function AnimatedText({ text }) {
  return (
    <motion.div
      className="flex gap-1"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1, // একেকটা লেটার একটু দেরিতে আসবে
          },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

function Project() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected{" "}
              <span className="[text-shadow:_0_0_16px_rgba(57,255,20,0.75)] drop-shadow-[0_0_16px_rgba(57,255,20,0.5)]">
                Work
              </span>
            </h2>
            <p className="mt-2 text-neutral-400">
              A quick taste of our style and attention to detail.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-2xl border border-emerald-400/40 bg-neutral-900/40 px-4 py-2 text-sm font-medium text-emerald-200"
          >
            Start Your Project
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* PolyMate */}
          <motion.a
            href="/polymate"
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-neutral-900/60 p-4 backdrop-blur-xl shadow-[0_0_32px_rgba(57,255,20,0.15)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(57,255,20,0.18),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="./logo full.png" alt="" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-neutral-100">
                  PolyMate - RPIR
                </h4>
                <p className="text-xs text-neutral-400">
                  An Android app with React Native and JavaScript.
                </p>
              </div>
              <ArrowRight className="size-4 text-emerald-300" />
            </div>
          </motion.a>

          {/* ReminderX */}
          <motion.a
            href="/reminderx"
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-neutral-900/60 p-4 backdrop-blur-xl shadow-[0_0_32px_rgba(57,255,20,0.15)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(57,255,20,0.18),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="./reminderX Logo.png" alt="" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-neutral-100">ReminderX</h4>
                <p className="text-xs text-neutral-400">
                  An app with React Native and JavaScript.
                </p>
              </div>
              <ArrowRight className="size-4 text-emerald-300" />
            </div>
          </motion.a>

          {/* B-Rent with falling letters */}
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-xl border border-emerald-400/30 bg-neutral-900/60 p-4 backdrop-blur-xl shadow-[0_0_32px_rgba(57,255,20,0.15)] cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(57,255,20,0.18),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-500/80 select-none">

                <AnimatePresence mode="wait">
                  {!hovered ? (
                    <AnimatedText key="brent" text="B-Rent" />
                  ) : (
                    <AnimatedText key="working" text="Working..." />
                  )}
                </AnimatePresence>
                  </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-neutral-100">B-Rent</h4>
                <p className="text-xs text-neutral-400">
                  A Full Stack MERN Webapplication.
                </p>
              </div>
              <ArrowRight className="size-4 text-emerald-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Project;
