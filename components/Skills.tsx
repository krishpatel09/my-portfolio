"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "LANGUAGES & FRAMEWORKS",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Nest.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Supabase",
        icon: "https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "AI INTEGRATION",
    skills: [
      { name: "OpenAI", icon: "/skills/openai.svg" },
      {
        name: "LangChain",
        icon: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
      },
      {
        name: "Vertex AI",
        icon: "https://www.gstatic.com/lamda/images/favicon_v2_711f26f2a24ec9d936ca.png",
      }, // Generic AI placeholder if exact vertex not found
      { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
      {
        name: "AWS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Vercel",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
      },
      {
        name: "GitHub Actions",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Stripe",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg",
      }, // Placeholder for stripe or specific icon
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1.5 w-24 bg-slate-900 mx-auto rounded-full mb-8" />
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 items-center">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="w-full text-center"
            >
              <h3 className="text-sm font-bold text-slate-900 tracking-[0.2em] mb-10 flex items-center justify-center gap-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {category.skills.map((skill, i) => (
                  <SkillTag key={i} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTag({ icon, name }: { icon: string; name: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-default group whitespace-nowrap"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          unoptimized
        />
      </div>
      <span className="text-base font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
