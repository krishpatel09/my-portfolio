"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 flex items-center gap-12 bg-[#171719] backdrop-blur-2xl border border-white/5 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-0 mr-4">
        Krish<span className="text-primary">.</span>
      </div>

      <nav className="hidden lg:flex items-center gap-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveTab(link.name)}
            className={`text-[13px] font-bold tracking-tight transition-all px-5 py-2.5 rounded-2xl border-2 border-transparent ${
              activeTab === link.name
                ? "bg-[#35191A] text-white border-[#8B2529] shadow-[0_0_20px_rgba(255,51,51,0.1)]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-[13px] font-bold text-primary hover:text-primary/80 transition-colors px-4 py-2 ml-2"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
