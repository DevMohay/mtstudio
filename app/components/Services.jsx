import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Layers,
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const GlowText = ({ children, className = "" }) => (
  <span
    className={`[text-shadow:_0_0_16px_rgba(57,255,20,0.75)] drop-shadow-[0_0_16px_rgba(57,255,20,0.5)] ${className}`}
  >
    {children}
  </span>
);

function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Services that <GlowText>deliver</GlowText>
          </h2>
          <p className="mt-2 text-neutral-400">
            From idea to launch—and beyond.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              icon: <Rocket className="size-5" />,
              title: "Product Design + MVP",
              desc: "UX/UI, prototypes, and functional MVPs to validate fast.",
            },
            {
              icon: <Layers className="size-5" />,
              title: "Web & SaaS",
              desc: "Next.js apps, dashboards, portals, landing pages with SSR/ISR.",
            },
            {
              icon: <Code2 className="size-5" />,
              title: "Mobile Apps",
              desc: "React Native, Expo, and PWA for iOS/Android.",
            },
            {
              icon: <ShieldCheck className="size-5" />,
              title: "Security & Compliance",
              desc: "Auth, RBAC, audits, backups—built-in.",
            },
            {
              icon: <Zap className="size-5" />,
              title: "Performance Tuning",
              desc: "Core Web Vitals, CDN, image/video optimization.",
            },
            {
              icon: <Sparkles className="size-5" />,
              title: "Brand & Creative",
              desc: "Logos, color systems, motion, and content.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-3xl border border-emerald-400/30 bg-neutral-900/50 p-6 backdrop-blur-xl shadow-[0_0_32px_rgba(57,255,20,0.15)]"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-emerald-400/15 px-3 py-2 text-emerald-200 ring-1 ring-emerald-400/30">
                {card.icon}
                <span className="text-xs uppercase tracking-wider">
                  Capability
                </span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-100">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300/90">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
