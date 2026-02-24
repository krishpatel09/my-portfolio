"use client";

import {
  ArrowRight,
  FileText,
  ChevronDown,
  MousePointerClick,
  ExternalLink,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 max-w-7xl mx-auto bg-transparent relative overflow-hidden pt-32 pb-20"
    >
      <div className="red-glow-center"></div>
      <div className="hero-horizon-glow"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2 max-w-4xl relative z-10 mt-10"
      >
        <p className="text-slate-500 font-bold tracking-widest text-lg uppercase">
          Hey, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter uppercase pb-4">
          KRISH SANGANI
        </h1>

        <div className="inline-block px-6 py-2 bg-primary rounded-full text-white font-black text-lg shadow-[0_0_30px_rgba(255,51,51,0.4)] mb-12">
          Full Stack Developer
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-slate-400 font-medium text-2xl md:text-3xl tracking-tight">
            Crafting seamless journeys from
          </p>
          <p className="text-white/90 text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-primary italic font-serif">
              pixel-perfect
            </span>{" "}
            frontends to
            <span className="text-primary italic font-serif"> robust</span>{" "}
            backends
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 pt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-xl text-sm font-medium shadow-lg shadow-red-500/25 transition-all duration-300 group"
            >
              Let's Connect
              <MousePointerClick className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.a
              href="https://cfpfyksblpnobqaqfqsr.supabase.co/storage/v1/object/public/portfolio-assets/Krish-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 text-slate-300 border border-slate-800 rounded-2xl font-bold text-lg hover:border-primary/30 transition-all flex items-center gap-2 group"
            >
              Resume
              <ExternalLink
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ChevronDown className="w-6 h-6 text-zinc-500 hover:text-primary transition-colors cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}
