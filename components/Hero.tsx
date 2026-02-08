"use client";

import { motion } from "framer-motion";
import { Wifi, MapPin, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  const text = "Creative. Engineer. Alchemist.".split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 md:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Floating Status Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-10 right-4 md:right-10 w-fit"
      ></motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-6 text-[#6366F1] font-mono text-sm tracking-widest uppercase"
          ></motion.div>

          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  key={i}
                  className="inline-block mr-4"
                >
                  {el}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed"
          >
            Building digital experiences that blend high-end aesthetics with
            robust engineering. Specializing in{" "}
            <span className="text-[#6366F1]">Next.js</span>,{" "}
            <span className="text-white">NestJS</span>, and interactive
            storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex gap-4"
          >
            <button className="px-8 py-3 bg-[#6366F1] text-white rounded-full font-medium hover:bg-[#4F46E5] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              View Work
            </button>
            <button className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 glass-card w-full h-full rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <Cpu
                size={80}
                className="text-white/20 group-hover:text-[#6366F1] transition-colors duration-500"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md"
            ></motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -left-10 glass-card p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md"
            >
              <div className="font-mono text-xs text-emerald-400">
                99.9% Uptime
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
