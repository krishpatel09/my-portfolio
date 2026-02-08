"use client";

import { motion } from "framer-motion";

export default function Education() {
  const timeline = [
    {
      year: "2025",
      title: "Master of Computer Applications - MCA",
      place: "LDRP Institute of Technology & Research (GTU)",
      desc: "Specialized in Computer Science.",
    },
    {
      year: "2023",
      title: "Bachelor of Computer Application",
      place: "Saurashtra University, Rajkot",
      desc: "Foundation in computer applications and software development.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center py-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-20 text-center"
        >
          Education <span className="text-[#6366F1]">Timeline</span>
        </motion.h2>

        <div className="relative border-l border-white/10 ml-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 ml-10 relative"
            >
              <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-[#0B0C10] border-2 border-[#6366F1]"></span>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#6366F1]/50 transition-colors">
                <span className="text-[#6366F1] font-mono text-sm">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm mb-4">{item.place}</p>
                <p className="text-white/60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
