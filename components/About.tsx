import CardImage, {CardImageProps} from "@/components/CardImage";

export default function About() {

  const PERSONAL_WORKS: CardImageProps[] = [{
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    title: "Storia.ph Wedding Platform",
    description: "Supported a live wedding-related web app through website management, backend tasks, CMS updates, and production maintenance.",
    badges: ["Website Management", "Backend", "CMS"]
  }, {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    title: "Confidential AI Platform",
    description: "Contributed to backend and platform work for a private AI product under subcontractor terms. Details kept confidential.",
    badges: ["APIs", "CI/CD", "Private"]
  }, {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    title: "Contractor Web Tasks",
    description: "Handled assigned production tasks as a subcontractor, including Strapi management, API work, deployments, and site fixes.",
    badges: ["Strapi", "Backend APIs", "Deployment"]
  }]

  return (
    <div className={"space-y-6"}>
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-2"}>
          <p className={"text-lg font-semibold uppercase text-muted-foreground"}>Selected Work</p>
          <h1 className={"text-5xl font-bold"}>Production work I have supported.</h1>
        </div>
        <div className={"items-center justify-end mt-auto"}>
          <p className={"font-medium text-muted-foreground"}>
            Most of my work has been done as a subcontractor, taking on assigned tasks for live client and company projects.</p>
        </div>
      </div>
      <div className={"grid grid-cols-3 gap-4 items-stretch"}>
        {
          PERSONAL_WORKS.map((work, index) => (
            <CardImage key={index} src={work.src} title={work.title} description={work.description} badges={work.badges} />
          ))
        }
      </div>
    </div>
  )
}