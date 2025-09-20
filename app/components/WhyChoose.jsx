"use client";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const blocks = [
    {
      title: "Black Logo, White Vision",
      text: "We design with clarity and purpose, turning complex ideas into simple, powerful digital experiences that inspire trust.",
    },
    {
      title: "Your Partner in Digital Growth",
      text: "We’re not just service providers—we’re collaborators. From strategy to execution, we craft solutions that fuel measurable growth.",
    },
    {
      title: "Innovation Without Limits",
      text: "Combining creativity, technology, and global talent, we deliver bold, future-ready solutions that push boundaries.",
    },
    {
      title: "Crafted for Impact",
      text: "Through design, storytelling, and cutting-edge development, we help businesses connect deeply and scale confidently.",
    },
  ];

  return (
    <section id="whyUs" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">Choose</span> Us
          </h2>
          <p className="mt-2 text-neutral-400">
            Blending creativity, innovation, and strategy to power your brand’s digital journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl border border-emerald-400/40 bg-neutral-900/70 p-6 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              <h4 className="font-semibold text-lg text-neutral-100">{b.title}</h4>
              <p className="mt-3 text-sm text-neutral-300/90 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
