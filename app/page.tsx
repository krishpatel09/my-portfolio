import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FloatingBubbles from "@/components/FloatingBubbles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#0E0D0C]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingBubbles count={80} />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
