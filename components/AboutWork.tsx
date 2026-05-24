import CardImage, {CardImageProps} from "@/components/CardImage";

export default function AboutWork() {

  const PERSONAL_WORKS: CardImageProps[] = [{
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    title: "Storia.ph Wedding Platform",
    description: "Supported a live wedding-related web app through website management, backend tasks, CMS updates, and production maintenance.",
    badges: ["CMS", "Backend", "Maintenance"],
    status: "public",
    meta: ["role: subcontractor web developer", "focus: reliability and support"]
  }, {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    title: "Confidential AI Platform",
    description: "Contributed to backend and platform work for a private AI product under subcontractor terms. Details kept confidential.",
    badges: ["APIs", "CI/CD", "Private"],
    status: "confidential",
    meta: ["role: backend/platform support", "focus: private production work"]
  }, {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    title: "Contractor Web Tasks",
    description: "Handled assigned production tasks as a subcontractor, including Strapi management, API work, deployments, and site fixes.",
    badges: ["Strapi", "Deploy", "Fixes"],
    status: "ongoing pattern",
    meta: ["role: task owner", "focus: practical delivery"]
  }]

  return (
    <div className={"space-y-6"}>
      <div className={"grid grid-cols-1 md:grid-cols-12 gap-4"}>
        <div className={"space-y-2 md:col-span-5"}>
          <p className={"text-xs font-semibold uppercase tracking-widest text-muted-foreground"}>~/selected-work</p>
          <h1 className={"text-4xl font-extrabold tracking-tighter md:text-5xl"}>Case-study cards with more proof.</h1>
        </div>
        <div className={"items-center justify-end mt-auto md:col-span-7"}>
          <p className={"font-medium text-muted-foreground"}>
            Instead of simple project cards, show context, scope, and responsibility. This makes backend/support work easier to understand.</p>
        </div>
      </div>
      <div className={"grid grid-cols-1 gap-4 items-stretch md:grid-cols-3"}>
        {
          PERSONAL_WORKS.map((work, index) => (
            <CardImage
              key={index}
              src={work.src}
              title={work.title}
              description={work.description}
              badges={work.badges}
              status={work.status}
              meta={work.meta}
            />
          ))
        }
      </div>
    </div>
  )
}
