import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutWork from "@/components/AboutWork";
import AboutMe from "@/components/AboutMe";
import AboutSkills from "@/components/AboutSkills";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionContainer = "scroll-reveal mx-auto w-full max-w-[1680px] px-6 py-16 sm:px-8 md:px-12 md:py-24 2xl:px-16";

  return (
      <main className="portfolio-grid-bg min-h-screen bg-background font-mono antialiased">
        <Navigation/>
        <section id="top" className="scroll-mt-24">
          <div className={sectionContainer}>
            <Hero />
          </div>
        </section>
        <section id="work" className="scroll-mt-24">
          <div className={sectionContainer}>
            <AboutWork />
          </div>
        </section>
        <section id="about" className="scroll-mt-24">
          <div className={sectionContainer}>
            <AboutMe />
          </div>
        </section>
        <section id="skills" className="scroll-mt-24">
          <div className={sectionContainer}>
            <AboutSkills/>
          </div>
        </section>
        <section id="contact" className="scroll-mt-24">
          <div className={sectionContainer}>
            <Footer />
          </div>
        </section>
      </main>
  );
}
