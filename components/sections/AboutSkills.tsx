import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { stackGroups } from "@/lib/portfolio-content";
import SectionIntro from "@/components/sections/SectionIntro";

export default function AboutSkills () {
  return (
    <div className="space-y-6">
      <SectionIntro
        eyebrow="~/stack"
        title="Tools grouped by practical use."
        description="Each area reflects the kind of production website, backend, CMS, and deployment work I can support."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((item) => (
          <div key={item.title} className="group/card h-full transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.22)]">
            <Card className="min-h-44 justify-between border-border/70 p-5 group-hover/card:border-foreground/20">
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
          </div>
        ))}
      </div>
    </div>
  )

}
