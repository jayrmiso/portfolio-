import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutWork from "@/components/AboutWork";
import AboutMe from "@/components/AboutMe";
import AboutSkills from "@/components/AboutSkills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="portfolio-grid-bg min-h-screen bg-background font-mono antialiased">
        <Navigation/>
        <section id="top" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <Hero />
          </div>
        </section>
        <section id="work" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <AboutWork />
          </div>
        </section>
        <section id="about" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <AboutMe />
          </div>
        </section>
        <section id="skills" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <AboutSkills/>
          </div>
        </section>
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <Footer />
          </div>
        </section>
      </main>
  );
}
