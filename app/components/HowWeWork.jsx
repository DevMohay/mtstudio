"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import css from '../globals.css'

function HowWeWork() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

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
    },
  ];


  return (
    <section id="howwework" className="relative max-w-7xl mx-auto px-6 py-16 ">
      <h1 className="text-2xl md:text-3xl font-light text-center mb-12 text-neutral-300 max-w-3xl mx-auto">
        From the very first idea to the final masterpiece, we walk beside you at
        every step. Because true success isn’t a solo journey — it’s a powerful
        team effort, don’t you agree
      </h1>
      {/* Heading */}
      <div
        className="shape [clip-path:polygon(0%_0%,40%_0%,60%_15%,50%_13%,100%_13%,100%_100%,0%_100%)] bg-white px-2 py-10 lg:px-10 p lg:py-15"
      >
        <div className="mb-10 flex flex-col lg:flex-row md:flex-row gap-2">
          <span className="text-2xl text-black font-bold md:text-4xl lg:text-5xl">How</span>
          <span className="text-emerald-300 drop-shadow-[0_0_8px_#39ff14] text-2xl
          md:text-4xl lg:text-5xl">We Work?</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              className={`relative p-8 rounded-xl border overflow-hidden ${
                hoveredIndex === idx
                  ? "bg-emerald-400/90 text-black border-emerald-300 shadow-[0_0_35px_rgba(57,255,20,0.7)]"
                  : "bg-black border-emerald-400/30 shadow-[0_0_20px_rgba(57,255,20,0.25)] text-neutral-300"
              } hover:scale-[1.02] transition-all duration-500`}
            >
              {hoveredIndex === idx && (
                <div
                  className="card-hover-effect"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                  }}
                />
              )}
              <h3
                className={`relative z-10 text-xl font-semibold flex items-center gap-2 ${
                  hoveredIndex === idx
                    ? "text-black"
                    : "text-emerald-200 drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]"
                }`}
              >
                {step.title}
                <ArrowUpRight
                  className={`size-5 ${
                    hoveredIndex === idx ? "text-black" : "text-emerald-300"
                  }`}
                />
              </h3>
              <p
                className={`relative z-10 mt-3 text-sm leading-relaxed ${
                  hoveredIndex === idx ? "text-black/80" : "text-neutral-400"
                }`}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
