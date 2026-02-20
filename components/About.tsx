"use client";

import { Hammer } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FloatingBubbles from "./FloatingBubbles";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-transparent relative overflow-hidden"
    >
      <FloatingBubbles count={30} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl font-black text-white tracking-tight">
            About Me<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-wide">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-4/5 rounded-4xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative transition-all duration-500 group-hover:border-primary/30">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-bold text-xl font-mono">
                  KRISH_PATEL.JPG
                </span>
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent"></div>
              </div>
              {/* Optional: Add background image when available */}
              {/* <Image 
                src="/about-portrait.jpg" 
                alt="Krish Patel"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              /> */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Visual Flair */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
          </motion.div>

          {/* Right: Content + Stats Grid */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-xl text-slate-400 leading-relaxed font-medium"
            >
              <p>
                I'm a passionate full-stack developer with expertise in building
                scalable web applications. I specialize in{" "}
                <span className="text-white font-bold">
                  React, Next.js, and Node.js
                </span>{" "}
                ecosystems, delivering clean code and exceptional user
                experiences.
              </p>
              <p>
                With a keen eye for detail and a love for elegant solutions, I
                transform complex problems into simple, beautiful, and intuitive
                designs. I am constantly learning and adapting to stay at the
                forefront of modern web development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
