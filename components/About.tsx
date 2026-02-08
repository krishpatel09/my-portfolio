"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              The <span className="text-[#6366F1]">Alchemist's</span> Tale
            </h2>
            <div className="space-y-4 text-lg text-white/60 leading-relaxed">
              <p>
                I don't just write code; I craft digital experiences. My journey
                began with a curiosity for how things work, leading me to the
                intersection of
                <span className="text-white"> logic</span> and{" "}
                <span className="text-white">creativity</span>.
              </p>
              <p>
                Specializing in the{" "}
                <span className="text-[#6366F1]">MERN stack</span> and modern
                server-side architectures, I build systems that are not only
                performant but also intuitive and beautiful.
              </p>
              <p>
                When I'm not debugging, I'm exploring the latest in AI,
                contributing to open source, or refining my "Tech-Noir"
                aesthetic.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
              {/* Placeholder for User Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#6366F1]/20 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
