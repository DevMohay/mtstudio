// components/Navbar.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png"; // আপনার path ঠিক করুন
import { Menu as MenuIcon, X as XIcon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [circleCenter, setCircleCenter] = useState({ x: 0, y: 0 });
  const [diameter, setDiameter] = useState(48);
  const btnRef = useRef(null);

  const navLinks = [
    ["Services", "#services"],
    ["Benefits", "#whyUs"],
    ["Portfolio", "#portfolio"],
    ["Pricing", "#pricing"],
    ["Process", "#process"],
    ["Contact Us", "#contact"],
  ];

  // compute needed diameter to fully cover viewport
  useEffect(() => {
    function updateDiameter() {
      // diagonal * 2 to be safe
      const d = Math.hypot(window.innerWidth, window.innerHeight) * 2;
      setDiameter(d);
    }
    updateDiameter();
    window.addEventListener("resize", updateDiameter);
    return () => window.removeEventListener("resize", updateDiameter);
  }, []);

  // When opening, capture button center and lock body scroll
  useEffect(() => {
    if (menuOpen) {
      const rect = btnRef.current?.getBoundingClientRect();
      if (rect) {
        setCircleCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      } else {
        // default to top-right-ish if ref missing
        setCircleCenter({ x: window.innerWidth - 48, y: 48 });
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // wave / stagger variants for links
  const containerVariants = {
    hidden: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98, rotate: -6 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 700, damping: 30 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 2 } },
  };

  return (
    <div className="sticky top-0 z-60">
      <div className="backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/40 border-b border-emerald-500/20 shadow-[0_0_40px_rgba(57,255,20,0.12)] m-6 rounded-2xl ">
        <header>
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 ring-2 ring-emerald-400/40 flex items-center justify-center animate-glow">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="filter invert"
                  />
                </div>
                <span className="font-semibold tracking-wide text-neutral-100 text-2xl">
                  <span className="animate-pulse-slow bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent [text-shadow:_0_0_20px_rgba(57,255,20,0.75)]">
                    MTBD
                  </span>{" "}
                  <span className="text-neutral-400">Studio</span>
                </span>
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-8 text-xl">
                {navLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="relative text-neutral-300/80 hover:text-emerald-300 transition group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-emerald-300 to-emerald-500 transition-all duration-400 group-hover:w-full shadow-[0_0_12px_rgba(57,255,20,0.6)]"></span>
                  </a>
                ))}
              </nav>

              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden md:inline-flex group items-center gap-2 rounded-2xl border border-emerald-400/40 bg-neutral-900/60 px-5 py-2 text-sm font-medium text-emerald-200 shadow-[0_0_25px_rgba(57,255,20,0.16)] hover:shadow-[0_0_40px_rgba(57,255,20,0.28)] hover:border-emerald-400 transition-all duration-300"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mobile Menu Button */}
              <button
                ref={btnRef}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-400/30 bg-neutral-900/60 text-emerald-300"
              >
                <MenuIcon className="w-5 h-5" />
                <span className="text-sm">Menu</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile fullscreen menu with expanding circle */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* expanding circle (pointer-events-none so clicks pass to overlay children) */}
            <motion.div
              key="expanding-circle"
              initial={{ width: 48, height: 48, opacity: 1 }}
              animate={{
                width: diameter,
                height: diameter,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
                backgroundColor: "green",
              }}
              exit={{
                width: 48,
                height: 48,
                opacity: 0,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              style={{
                position: "fixed",
                left: circleCenter.x,
                top: circleCenter.y,
                transform: "translate(-50%,-50%)",
                backgroundColor: "green",
                borderRadius: "9999px",
              }}
              className="pointer-events-none z-40 bg-gradient-to-tr from-emerald-400/30 backdrop-blur-sm "
            ></motion.div>

            {/* overlay and links (on top of the circle) */}
            <motion.div
              key="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.01, duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1.8 } }}
              className="fixed inset-0 z-50 flex items-center justify-center "
            >
              {/* Top header with logo + cross button */}
              <div className="absolute top-0 left-0 w-[calc(100%-3rem)] mx-6 mt-6 flex items-center justify-between px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/40 border border-emerald-500/20 shadow-[0_0_40px_rgba(57,255,20,0.12)] rounded-2xl">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 ring-2 ring-emerald-400/40 flex items-center justify-center animate-glow">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={24}
                      height={24}
                      className="filter invert"
                    />
                  </div>
                  <span className="font-semibold tracking-wide text-neutral-100 text-2xl">
                    <span className="animate-pulse-slow bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 bg-clip-text text-transparent [text-shadow:_0_0_20px_rgba(57,255,20,0.75)]">
                      MT
                    </span>{" "}
                    <span className="text-neutral-400">Studio</span>
                  </span>
                </a>

                {/* Close button */}
                <button
                  aria-label="Close menu"
                  className="rounded-full p-3 bg-neutral-900/40 backdrop-blur-sm text-emerald-300 hover:text-emerald-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              

              {/* menu links (wave animation via stagger) */}
              <motion.nav
                className="z-60 flex flex-col items-center gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {navLinks.map(([label, href], i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-semibold text-neutral-100 hover:text-emerald-300"
                    style={{ textDecoration: "none" }}
                  >
                    {label}
                  </motion.a>
                ))}

                {/* CTA inside mobile menu */}
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  variants={itemVariants}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-neutral-900/60 px-5 py-2 text-lg font-medium text-emerald-200 shadow-[0_0_20px_rgba(57,255,20,0.08)]"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* small local styles (glow & pulse) */}
      <style jsx>{`
        .animate-glow {
          animation: neonGlow s ease-in-out infinite alternate;
        }
        @keyframes neonGlow {
          from {
            box-shadow: 0 0 10px rgba(57, 255, 20, 0.2),
              0 0 20px rgba(57, 245, 20, 0.12);
          }
          to {
            box-shadow: 0 0 28px rgba(57, 255, 20, 0.42),
              0 0 56px rgba(57, 255, 20, 0.26);
          }
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.65;
          }
        }
      `}</style>
    </div>
  );
}
