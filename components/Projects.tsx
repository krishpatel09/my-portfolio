"use client";

import React from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Zap,
  Shield,
  Monitor,
  Users,
  Package,
} from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 relative bg-transparent overflow-hidden"
    >
      <FloatingBubbles count={40} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-black text-white tracking-tight">
            Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-wide">
            A selection of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Project: AI Blog */}
          <div className="lg:col-span-8 p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 shadow-2xl relative group overflow-hidden">
            <div className="flex flex-col space-y-10 relative z-10">
              <div className="space-y-4">
                <h3 className="text-4xl font-black text-primary tracking-tight">
                  AI Blog Platform
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl font-medium">
                  A next-generation blogging platform powered by AI. Features
                  automated content tagging, personalized recommendations, and a
                  high-performance NeonDB backend.
                </p>
              </div>

              {/* Internal Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureBox
                  icon={<Zap className="w-5 h-5 text-primary" />}
                  title="AI-Powered Writing"
                  desc="Smart suggestions tailored to context"
                />
                <FeatureBox
                  icon={<Shield className="w-5 h-5 text-primary" />}
                  title="Secure & Scalable"
                  desc="Production-ready NeonDB architecture"
                />
                <FeatureBox
                  icon={<Monitor className="w-5 h-5 text-primary" />}
                  title="Instant Previews"
                  desc="Real-time rendering of generated content"
                />
                <FeatureBox
                  icon={<Users className="w-5 h-5 text-primary" />}
                  title="Active Community"
                  desc="Collaborate and share insights globally"
                />
              </div>

              {/* Tags & Links */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "React",
                    "AI / NLP",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://blog.krishai.me"
                  target="_blank"
                  className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group"
                >
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              </div>
            </div>

            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBox({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-primary/20 transition-all">
      <div className="p-2 rounded-lg bg-primary/5 border border-primary/10">
        {icon}
      </div>
      <div className="space-y-1">
        <div className="font-bold text-white text-sm">{title}</div>
        <div className="text-xs text-slate-500 leading-tight">{desc}</div>
      </div>
    </div>
  );
}
