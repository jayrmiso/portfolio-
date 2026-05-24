import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function AboutSkills () {
  const STACK_GROUPS: { title: string, text: string, badge: string }[] = [{
    title: "CMS",
    text: "Strapi, content models, admin workflows, and content updates.",
    badge: "structured content"
  }, {
    title: "Backend",
    text: "API routes, integrations, data flow, and production fixes.",
    badge: "server logic"
  }, {
    title: "Delivery",
    text: "CI/CD, deployments, build checks, and release support.",
    badge: "ship safely"
  }, {
    title: "Frontend Support",
    text: "Next.js, responsive UI, shadcn components, and practical polish.",
    badge: "clean UI"
  }]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="space-y-2 md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            ~/stack
          </p>
          <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl">Group skills by usefulness.</h1>
        </div>
        <div className="items-center justify-end mt-auto md:col-span-7">
          <p className="font-medium text-muted-foreground">
            This reads better than a generic logo wall. Each block tells the visitor what kind of problem you can help with.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK_GROUPS.map((item) => (
          <Card key={item.title} className="min-h-44 justify-between p-5">
            <div className="space-y-3">
              <CardTitle>
                <span className="text-lg font-bold">{item.title}</span>
              </CardTitle>
              <CardContent className="p-0">
                <p className="text-sm font-medium text-muted-foreground">{item.text}</p>
              </CardContent>
            </div>
            <Badge variant="outline" className="w-fit rounded-full px-3 py-2 font-semibold">
              {item.badge}
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  )

}
