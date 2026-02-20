import React from "react";
import { ExternalLink } from "lucide-react";
import FloatingBubbles from "./FloatingBubbles";

export default function Education() {
  const education = [
    {
      year: "2025 – Present",
      title: "Master of Computer Applications (MCA)",
      place: "LDRP Institute of Technology & Research",
      location: "Gandhinagar, Gujarat",
      link: "https://ldrp.ac.in/",
      description: [
        "Specializing in Software Engineering and Modern Web Architectures.",
        "Deep diving into Data Structures, Algorithms, and System Design.",
        "Active member of the tech community, participating in hackathons and workshops.",
        "Maintaining a strong academic record while building real-world projects.",
      ],
      tags: ["Data Structures", "Algorithms", "DBMS", "OS", "Networking"],
    },
    {
      year: "2022 - 2025",
      title: "Bachelor of Computer Applications (BCA)",
      place: "Saurashtra University",
      location: "Rajkot, Gujarat",
      link: "https://www.saurashtrauniversity.ac.in/",
      description: [
        "Developed a strong foundation in programming, database management, and software development principles.",
        "Worked on academic and practical projects focused on web development and backend systems.",
        "Gained hands-on experience with core computer science concepts and real-world application development.",
      ],
      tags: [
        "Programming Fundamentals",
        "DBMS",
        "Web Development",
        "Software Engineering",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 relative bg-transparent overflow-hidden"
    >
      <FloatingBubbles count={20} />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-black text-white tracking-tight">
            Education<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium tracking-wide">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800/50 ml-4 md:ml-6 space-y-12">
          {education.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-black border-2 border-primary rounded-full -translate-x-1/2 mt-1 z-20 group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              </div>

              {/* Card */}
              <div className="p-8 rounded-4xl bg-[#0f172a]/40 border border-slate-800/50 hover:border-primary/20 transition-all duration-500 shadow-2xl backdrop-blur-xl group-hover:bg-[#0f172a]/60">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <a
                        href={item.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                      >
                        {item.place}
                        {item.link && <ExternalLink className="w-3.5 h-3.5" />}
                      </a>
                      <span className="text-slate-700">•</span>
                      <span className="text-slate-400 text-sm font-medium">
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-500 font-bold text-sm bg-slate-800/30 px-4 py-1.5 rounded-full border border-slate-800/50 whitespace-nowrap self-start md:self-center">
                    {item.year}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {item.description.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-slate-400 group/item"
                    >
                      <span className="text-primary mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity text-[6px]">
                        ●
                      </span>
                      <p className="text-sm font-medium leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border border-slate-700/30 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
