import WorkCard from "@/components/portfolio/WorkCard";
import SectionIntro from "@/components/sections/SectionIntro";
import type { PortfolioWorkItem, SectionIntroContent } from "@/lib/portfolio-types";

type AboutWorkProps = {
  items: PortfolioWorkItem[];
  intro: SectionIntroContent;
};

export default function AboutWork({ items, intro }: AboutWorkProps) {

  return (
    <div className={"space-y-6"}>
      <SectionIntro
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
      />
      <div className={"grid grid-cols-1 gap-4 items-stretch md:grid-cols-3"}>
        {items.map((work) => (
          <WorkCard key={work.title} {...work} />
        ))}
      </div>
    </div>
  )
}
