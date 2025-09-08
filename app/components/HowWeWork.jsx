"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function HowWeWork() {
  const steps = [
    {
      title: "Discovery",
      desc: "We start by listening to your vision and understanding your needs.",
    },
    {
      title: "Ideation",
      desc: "We brainstorm creative concepts that bring your ideas to life.",
    },
    {
      title: "Design & Development",
      desc: "We craft stunning designs and develop solutions that work beautifully.",
    },
    {
      title: "Launch & Grow",
      desc: "We launch your project and help you grow it further.",
      highlight: true,
    },
  ];

  return (
    <section id="howwework" className="relative max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
        How <span className="text-emerald-300 drop-shadow-[0_0_8px_#39ff14]">We Work?</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`relative p-8 rounded-xl border ${
              step.highlight
                ? "bg-emerald-400/90 text-black border-emerald-300 shadow-[0_0_35px_rgba(57,255,20,0.7)]"
                : "bg-neutral-950/60 border-emerald-400/30 shadow-[0_0_20px_rgba(57,255,20,0.25)] text-neutral-300"
            } hover:scale-[1.02] transition-all duration-500`}
          >
            <h3
              className={`text-xl font-semibold flex items-center gap-2 ${
                step.highlight
                  ? "text-black"
                  : "text-emerald-200 drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]"
              }`}
            >
              {step.title}
              <ArrowUpRight
                className={`size-5 ${
                  step.highlight ? "text-black" : "text-emerald-300"
                }`}
              />
            </h3>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                step.highlight ? "text-black/80" : "text-neutral-400"
              }`}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowWeWork;
