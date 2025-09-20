"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative m-4 md:m-12 lg:m-16 rotating-glow overflow-hidden rounded-lg">
      <div className="relative  z-10 backdrop-blur-md bg-neutral-950/60 border-t border-emerald-400/30 shadow-[0_0_40px_rgba(57,255,20,0.25)] rounded-lg ">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-neutral-300 ">
          {/* Brand + About */}
          <div>
            <h2 className="text-xl font-bold text-emerald-300 drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">
              MTBD <span className="text-neutral-400">Studio LTD.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              We craft futuristic digital experiences with cutting-edge tech,
              neon design, and innovative solutions to take your business 🚀 to
              the next level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Services", "Work", "Why Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="relative inline-block transition group hover:text-emerald-300"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 shadow-[0_0_12px_rgba(57,255,20,0.9)] transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <Mail className="size-4 text-emerald-300" />{" "}
                mtbdstudio@gmail.com
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <Phone className="size-4 text-emerald-300" /> +8801518969244
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                <MapPin className="size-4 text-emerald-300" /> Holding No. 306, Shop No. 00, Teghori,Shibganj,Bogura
              </li>
            </ul>
            <div className="flex gap-5 mt-6">
              {[{
                Icon: Facebook,
                href: "https://facebook.com/mtmohay"
              },
              {
                Icon: Twitter,
                href: "https://twitter.com/mtmohay"
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/mohayminul-islam-48624033b"
              }
              ].map((social, idx) => (
                <a
                  key={idx}
                  target="_blank"
                  href={social.href}
                  className="p-2 rounded-xl border border-emerald-400/40 bg-neutral-900/50 shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.7)] hover:scale-110 transition-all duration-500"
                >
                  <social.Icon className="size-5 text-emerald-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-400/20 text-center py-4 text-sm text-neutral-500">
          © {new Date().getFullYear()} MTBD Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
