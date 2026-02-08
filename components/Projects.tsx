"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-6 bg-black/20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12"
        >
          My <span className="text-[#6366F1]">Projects</span>
        </motion.h2>

        {/* Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group"
          >
            <div className="absolute inset-0 bg-[#6366F1]/20 mix-blend-color group-hover:opacity-0 transition-opacity z-10"></div>
            <Image
              src="/projects/project-1.png"
              alt="AI Blog Platform"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-[#6366F1] font-mono text-sm tracking-widest">
                FULL STACK
              </span>
              <h3 className="text-3xl font-bold text-white mt-2">
                AI Blog Platform
              </h3>
            </div>

            <p className="text-white/60 text-lg leading-relaxed">
              A next-generation blogging platform powered by AI. Features
              automated content tagging, personalized recommendations, and a
              high-performance NeonDB backend.
            </p>

            <div className="flex flex-wrap gap-2 text-sm font-mono text-white/40">
              <span>Next.js</span> • <span>NestJS</span> • <span>Prisma</span> •{" "}
              <span>NeonDB</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/krishpatel09/ai-blog-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={18} /> Code
              </a>
              <a
                href="https://blog.krishai.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-[#6366F1] text-white rounded-full hover:bg-[#4F46E5] transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
