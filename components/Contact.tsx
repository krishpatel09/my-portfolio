"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent inline-block">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to send me
            a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    Email Me
                  </h4>
                  <a
                    href="mailto:krishpatel6343@gmail.com"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    krishpatel6343@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    Location
                  </h4>
                  <p className="text-white font-medium">
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>

              {/* LinkedIn Card */}

              <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    LinkedIn
                  </h4>
                  <a
                    href="https://linkedin.com/in/krishpatel09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-pink-400 transition-colors"
                  >
                    /in/krishpatel09
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-blue-500/5 rounded-2xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>

            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
