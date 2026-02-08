"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <div className="text-xl font-bold tracking-tighter text-white">
        KRISH<span className="text-[#6366F1]">.DEV</span>
      </div>
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
