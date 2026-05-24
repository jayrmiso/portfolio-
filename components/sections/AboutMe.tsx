import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import { processSteps } from "@/lib/portfolio-content";
import SectionIntro from "@/components/sections/SectionIntro";

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <SectionIntro
        eyebrow="~/process"
        title="Practical, careful, production-minded."
        description="I approach backend and website support work with a simple flow: understand the system, make scoped changes, and verify the result."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Card className={"p-5 md:col-span-5"}>
          <CardTitle className={"font-semibold"}>Short positioning</CardTitle>
          <CardDescription className={"font-semibold space-y-6"}>
            <p>I am a backend-focused web developer who has worked as a subcontractor on production web applications. I help maintain websites, manage CMS workflows, build and support backend APIs, and keep deployment pipelines moving.</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-border px-3 py-2 text-xs text-foreground">calm</span>
              <span className="rounded-full border border-border px-3 py-2 text-xs text-foreground">practical</span>
              <span className="rounded-full border border-border px-3 py-2 text-xs text-foreground">production-minded</span>
            </div>
          </CardDescription>
        </Card>
        <Card className={"md:col-span-7"}>
          <CardContent className="space-y-4">
            {processSteps.map((step) => (
              <div key={step.number} className="grid grid-cols-1 gap-4 border-b pb-4 last:border-b-0 last:pb-0 md:grid-cols-12">
                <div className="font-semibold md:col-span-4">{step.number}</div>
                <div className="md:col-span-8">
                  <span className="text-lg font-semibold">{step.title}</span>
                  <p className="font-semibold text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
