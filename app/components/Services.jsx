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
    <section id="services" className="relative bg-black">
      <div className="mx-auto">
        <div className="py-10 text-center ">
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold">
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
          className="grid bg-black md:grid-cols-1 lg:grid-cols-1 py-10 "
        >
          {/* Service 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14 px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <Rocket className="inline-block mr-2 size-5" />
              Web Design & Development
            </h3>
            <p className="mt-2 text-md">
              I craft modern, smooth, and responsive websites using HTML, CSS, JavaScript, React, and Next.js. From animated 3D landing pages to sleek product design pages, I focus on delivering pixel-perfect, fast, and user-friendly web experiences that stand out.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14  px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <Layers className="inline-block mr-2 size-5" />
              App Design & Development
            </h3>
            <p className="mt-2 text-sm">
              I build high-performance, cross-platform mobile applications using React Native for both Android and iOS. My focus is on delivering smooth UI/UX, fast performance, and modern features that match today’s app standards. From small business apps to large-scale solutions, I ensure clean code, scalable architecture, and seamless integration with APIs or backends. Whether you need an e-commerce app, booking system, chat app, or custom business tool, I provide a complete solution from design to deployment on Play Store and App Store.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14  px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <Code2 className="inline-block mr-2 size-5" />
              Graphics Design
            </h3>
            <p className="mt-2 text-sm">
             Unique, modern, and impactful graphics for logos, brand identity, and promotional materials—delivered with precision using Adobe Photoshop and Illustrator. Each design is tailored to reflect your brand’s personality and vision while maintaining a clean, professional aesthetic. From concept to final output, every detail is crafted to grab attention, build trust, and leave a lasting impression.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14  px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <ShieldCheck className="inline-block mr-2 size-5" />
              Logo & Brand Identity
            </h3>
            <p className="mt-2 text-sm">
              Creative and professional logo designs that capture the essence of your brand and set you apart from the competition. Complete brand identity solutions including typography, color palettes, and style guides to ensure consistency across all platforms. Every element is thoughtfully crafted to build recognition, trust, and a strong visual presence for your business.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14  px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <Zap className="inline-block mr-2 size-5" />
              UI/UX Design
            </h3>
            <p className="mt-2 text-sm">
            Intuitive and visually appealing UI/UX designs created with Figma to deliver seamless user experiences. From wireframes and prototypes to complete interface design, every screen is crafted with a focus on usability, accessibility, and modern design standards. Clean layouts, smooth interactions, and user-centered design principles ensure your product is not only beautiful but also easy to navigate and highly engaging.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            variants={item}
            whileHover={{ y: -4, scale: 1.01 }}
            className="py-14  px-40 hover:bg-emerald-400 hover:text-black grid grid-cols-2"
          >
            <h3 className="text-4xl font-bold">
              <Sparkles className="inline-block mr-2 size-5" />
              Digital Marketing
            </h3>
            <p className="mt-2 text-sm">
             Result-driven digital marketing solutions with expertise in Facebook (Meta) Ads and Google Ads. From audience research and ad campaign setup to optimization and performance tracking, every strategy is tailored to maximize reach, engagement, and conversions. Focused on delivering measurable results that help businesses grow their online presence and achieve their marketing goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
