import Navigation from "@/components/layout/Navigation";
import PageSection from "@/components/layout/PageSection";
import AboutMe from "@/components/sections/AboutMe";
import AboutSkills from "@/components/sections/AboutSkills";
import AboutWork from "@/components/sections/AboutWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
      <main className="portfolio-grid-bg min-h-screen bg-background font-mono antialiased">
        <Navigation/>
        <PageSection id="top">
          <Hero />
        </PageSection>
        <PageSection id="work">
          <AboutWork />
        </PageSection>
        <PageSection id="about">
          <AboutMe />
        </PageSection>
        <PageSection id="skills">
          <AboutSkills/>
        </PageSection>
        <PageSection id="contact">
          <Footer />
        </PageSection>
      </main>
  );
}
