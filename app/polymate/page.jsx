"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../app/styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, Facebook } from "lucide-react";

export default function PolyMateStorePage() {
  const screenshots = [
    "/1 f.png",
    "/2 f.png",
    "/3 f.png",
    "/4 f.png",
    "/5 f.png",
  ];

  const features = [
    "Quick Access to Official Academic Websites (RPI, BTEB, Admission)",
    "Smart CGPA Calculator with Real-time Input",
    "Semester-wise Book List for All Departments",
    "Instant Result Search Using Roll Number",
    "Question Bank Archive (Midterm & Final Questions)",
    "Save Result Screen to Gallery with One Tap",
  ];

  return (






    <div className="min-h-screen bg-neutral-950 text-white">
      {/* App Banner */}
      <div className="m-auto max-w-7xl relative">
  <Image
    src="/poster for polymate.png"
    alt="PolyMate Banner"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-auto rounded-xl"
  />
</div>


      <div className="px-6 max-w-5xl mx-auto -mt-16 relative z-10">
        {/* App Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900/80 backdrop-blur rounded-2xl shadow-lg lg:p-6 p-5 flex gap-6 items-center"
        >
          <Image
            src="/PolyMate logo final.png"
            alt="PolyMate Logo"
            width={100}
            height={100}
            className="rounded-2xl border border-neutral-700"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">PolyMate</h1>
            <p className="text-neutral-400 text-sm md:text-lg lg:text-lg">Smart Educational Companion</p>
            <a
              href="/polymate.apk"
              target="_blank"
              className="mt-3 inline-flex items-center gap-2 px-5 py-2 bg-emerald-500 text-black font-semibold rounded-lg shadow hover:scale-105 transition"
            >
              <Download className="size-5" />
              Install
            </a>
          </div>
        </motion.div>

        {/* Screenshots */}
        <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Screenshots</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pb-10"
      >
        {screenshots.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto " // যাতে ফুল width না নেয়
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[200px] md:min-w-[280px] rounded-xl overflow-hidden border border-neutral-700"
            >
              <Image
                src={src}
                alt={`Screenshot ${i + 1}`}
                width={200}
                height={600}
                className="object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

        {/* About This App */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">About this app</h2>
          <p className="text-neutral-300 leading-relaxed">
            PolyMate is an all-in-one smart educational companion app,
            specially crafted for students of{" "}
            <span className="text-emerald-400">
              Rangpur Polytechnic Institute
            </span>
            . It provides instant access to essential academic resources,
            tools, and information — all under one roof.
          </p>
        </section>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <span className="text-emerald-400">✔</span>
                <p>{f}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Developer Info */}
        <section className="mt-16 border-t border-neutral-800 pt-10">
          <h2 className="text-xl font-bold mb-4">Developer Information</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              src="/Picture.jpg"
              alt="Developer"
              width={100}
              height={100}
              className="rounded-full border-2 border-emerald-500"
            />
            <div>
              <h3 className="text-lg font-semibold">Mohayminul Islam</h3>
              <p className="text-neutral-400">
                Full-stack Web & Mobile App Developer (React Native, MERN)
              </p>
              <p className="mt-2 text-neutral-300 max-w-lg">
                I build practical, user-friendly digital tools that solve real
                problems. PolyMate is built with ❤️ for the students of Rangpur
                Polytechnic Institute.
              </p>
              <div className="flex gap-6 mt-4">
                <a
                  href="mailto:mohay.online360@gmail.com"
                  className="flex items-center gap-2 text-emerald-400 hover:underline"
                >
                  <Mail className="size-5" /> Email
                </a>
                <a
                  href="https://facebook.com/mtmohay"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <Facebook className="size-5" /> Facebook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-neutral-500 text-sm pb-10">
          PolyMate © 2025 | Version 1.0.0
        </footer>
      </div>
    </div>
  );
}
