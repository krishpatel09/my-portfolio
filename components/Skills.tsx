"use client";

import { motion } from "framer-motion";
import { Cloud, Code2 } from "lucide-react";
import Image from "next/image";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/white",
      },
      {
        name: "NestJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/white",
      },
      {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Shadcn/ui",
        icon: "https://cdn.simpleicons.org/shadcnui/white",
      },
      {
        name: "MUI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/white",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/white",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-5xl font-black text-white tracking-tight">
            Skills & Expertise<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-wide">
            A collection of technologies I'm proficient with, from languages to
            frameworks and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-4">
                {category.title}
                <div className="h-px bg-slate-800 flex-1"></div>
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <SkillTag
                    key={i}
                    icon={skill.icon}
                    name={skill.name}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
}

function SkillTag({
  icon,
  name,
  index,
}: {
  icon: any; // Can be string (URL) or ReactNode
  name: string;
  index: number;
}) {
  const isUrl = typeof icon === "string";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-black/40 border border-white/10 transition-all cursor-default backdrop-blur-sm"
    >
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        {isUrl ? (
          <img
            src={icon}
            alt={`${name} icon`}
            className="w-full h-full object-contain transition-all duration-300"
          />
        ) : (
          <div className="text-slate-400">{icon}</div>
        )}
      </div>
      <span className="text-sm font-bold text-slate-400">{name}</span>
    </motion.div>
  );
}
