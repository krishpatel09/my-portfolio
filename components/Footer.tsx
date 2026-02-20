export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto border-t border-slate-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 font-medium text-sm">
          © {new Date().getFullYear()} Krish Patel. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          {[
            { name: "LinkedIn", href: "https://linkedin.com/in/krish-sangani" },
            { name: "GitHub", href: "https://github.com/krishpatel09" },
            { name: "Twitter", href: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
