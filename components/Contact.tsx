"use client";

import { Mail, Linkedin, Send, Github } from "lucide-react";
import React, { cloneElement, ReactElement } from "react";
import FloatingBubbles from "./FloatingBubbles";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-24 pb-12 px-6 relative bg-transparent overflow-hidden"
    >
      <FloatingBubbles count={20} />
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-black text-white tracking-tight">
            Get In Touch<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-wide">
            Have a project in mind or just want to say hi?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info (Left Column) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white leading-tight">
                Let's discuss <br />
                your{" "}
                <span className="text-primary italic">next big thing.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium text-lg max-w-md">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <ContactLink
                icon={<Mail />}
                label="Email Me"
                value="krishpatel6343@gmail.com"
                href="mailto:krishpatel6343@gmail.com"
              />
              <ContactLink
                icon={<Linkedin />}
                label="LinkedIn"
                value="/in/krish-sangani"
                href="https://linkedin.com/in/krish-sangani"
              />
              <ContactLink
                icon={<Github />}
                label="GitHub"
                value="/krishpatel09"
                href="https://github.com/krishpatel09"
              />
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-slate-900/50 p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl relative backdrop-blur-sm overflow-hidden group">
            <h3 className="text-2xl font-black text-white mb-10 tracking-tight">
              Send a Message
            </h3>

            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-primary/50 transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-primary/50 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-primary/50 transition-all resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-2xl font-black text-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(255,51,51,0.2)]"
              >
                Send Message
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Inner Glow */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-6 p-6 rounded-4xl bg-slate-900/40 border border-slate-800/50 hover:border-primary/20 hover:bg-slate-900/60 transition-all"
    >
      <div className="p-4 rounded-xl bg-slate-950/50 text-slate-400 group-hover:text-primary border border-slate-800 group-hover:border-primary/20 transition-all">
        {cloneElement(icon as ReactElement<{ size: number }>, { size: 20 })}
      </div>
      <div>
        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
          {label}
        </h4>
        <div className="text-white font-bold text-lg">{value}</div>
      </div>
    </a>
  );
}
