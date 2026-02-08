"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextdotjs.svg" },
  { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
  { name: "Framer Motion", icon: "/skills/framer.svg" },
  { name: "Node.js", icon: "/skills/nodedotjs.svg" },
  { name: "NestJS", icon: "/skills/nestjs.svg" },
  { name: "Express", icon: "/skills/express.svg" },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "Prisma", icon: "/skills/prisma.svg" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
  { name: "Linux", icon: "/skills/linux.svg" },
  { name: "System Design", icon: "/skills/excalidraw.svg" },
  { name: "AI Integration", icon: "/skills/openai.svg" },
  { name: "Mobile", icon: "/skills/android.svg" },
  { name: "UI/UX", icon: "/skills/figma.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-20 px-0 overflow-hidden relative"
    >
      {/* Background Gradient similar to reference */}
      <div className="absolute inset-0 bg-[#0B0C10] z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-white mb-20 tracking-tight"
        >
          My <span className="text-[#6366F1]">Skills</span>
        </motion.h2>

        <div className="flex flex-col gap-10">
          {/* Row 1 */}
          <Marquee direction="left" speed={100}>
            {skills.map((skill, i) => (
              <SkillTag key={i} icon={skill.icon} name={skill.name} />
            ))}
          </Marquee>

          {/* Row 2 */}
          <Marquee direction="right" speed={100}>
            {/* Reversed or reshuffled for variety */}
            {[...skills].reverse().map((skill, i) => (
              <SkillTag key={i} icon={skill.icon} name={skill.name} />
            ))}
          </Marquee>

          {/* Row 3 (Optional for density) */}
          <Marquee direction="left" speed={110}>
            {[...skills]
              .sort(() => Math.random() - 0.5)
              .map((skill, i) => (
                <SkillTag key={i} icon={skill.icon} name={skill.name} />
              ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function Marquee({
  children,
  direction = "left",
  speed = 20,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
}) {
  return (
    <div className="flex overflow-hidden w-full mask-gradient">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 flex-shrink-0 px-5"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

function SkillTag({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#6366F1]/50 transition-all cursor-default group whitespace-nowrap">
      <div className="relative w-6 h-6">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none"
        />
      </div>
      <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
