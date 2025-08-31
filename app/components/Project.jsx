import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react";


const GlowText = ({ children, className = "" }) => (
  <span
    className={`[text-shadow:_0_0_16px_rgba(57,255,20,0.75)] drop-shadow-[0_0_16px_rgba(57,255,20,0.5)] ${className}`}
  >
    {children}
  </span>
);


function Project() {
    
  return (
    <section id="work" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Selected <GlowText>Work</GlowText>
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
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.a
                key={n}
                href="#contact"
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-neutral-900/60 p-4 backdrop-blur-xl shadow-[0_0_32px_rgba(57,255,20,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
                  <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(57,255,20,0.18),transparent)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black tracking-tight text-neutral-800 group-hover:text-neutral-700 transition">
                      GSS {n}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-neutral-100">
                      Project {n}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Next.js • Tailwind • Motion
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-emerald-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Project