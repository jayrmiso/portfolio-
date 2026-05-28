import Navigation from "@/components/layout/Navigation";
import PageSection from "@/components/layout/PageSection";
import AboutMe from "@/components/sections/AboutMe";
import AboutSkills from "@/components/sections/AboutSkills";
import AboutWork from "@/components/sections/AboutWork";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import {
  fallbackAboutProfileContent,
  fallbackFooterContent,
  fallbackHeroContent,
  fallbackNavigationContent,
  fallbackProcessSteps,
  fallbackSectionIntros,
  fallbackStackGroups,
  fallbackWorkItems,
} from "@/lib/seed-content";

export default function Home() {
  const content = {
    hero: fallbackHeroContent,
    navigation: fallbackNavigationContent,
    footer: fallbackFooterContent,
    aboutProfile: fallbackAboutProfileContent,
    introWork: fallbackSectionIntros.work,
    introProcess: fallbackSectionIntros.process,
    introStack: fallbackSectionIntros.stack,
    workItems: fallbackWorkItems,
    processSteps: fallbackProcessSteps,
    stackGroups: fallbackStackGroups,
  };

  return (
      <main className="portfolio-grid-bg min-h-screen bg-background font-mono antialiased">
        <Navigation content={content.navigation} />
        <PageSection id="top">
          <Hero content={content.hero} />
        </PageSection>
        <PageSection id="work">
          <AboutWork items={content.workItems} intro={content.introWork} />
        </PageSection>
        <PageSection id="about">
          <AboutMe steps={content.processSteps} intro={content.introProcess} profile={content.aboutProfile} />
        </PageSection>
        <PageSection id="skills">
          <AboutSkills groups={content.stackGroups} intro={content.introStack} />
        </PageSection>
        <PageSection id="contact">
          <Footer footerContent={content.footer} navigationContent={content.navigation} />
        </PageSection>
      </main>
  );
}
