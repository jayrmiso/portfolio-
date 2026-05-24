import WorkCard from "@/components/portfolio/WorkCard";
import { workItems } from "@/lib/portfolio-content";
import SectionIntro from "@/components/sections/SectionIntro";

export default function AboutWork() {
  return (
    <div className={"space-y-6"}>
      <SectionIntro
        eyebrow="~/selected-work"
        title="Production work and support experience."
        description="A snapshot of the backend, CMS, deployment, and maintenance work I have supported across live projects."
      />
      <div className={"grid grid-cols-1 gap-4 items-stretch md:grid-cols-3"}>
        {
          workItems.map((work) => (
            <WorkCard key={work.title} {...work} />
          ))
        }
      </div>
    </div>
  )
}
