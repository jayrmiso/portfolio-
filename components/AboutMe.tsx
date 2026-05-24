import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="space-y-2 md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            ~/process
          </p>
          <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
            Show how you work.
          </h1>
        </div>
        <div className="items-center justify-end mt-auto md:col-span-7">
          <p className="font-medium text-muted-foreground">A clear process makes backend support work easier to trust because it shows how you approach production changes.</p>
        </div>
      </div>
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
            <div className="grid grid-cols-1 gap-4 border-b pb-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">01</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Inspect</span>
                <p className="font-semibold text-muted-foreground">
                  Understand the code, CMS, deployment flow, and task requirements before changing things.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-b pb-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">02</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Implement</span>
                <p className="font-semibold text-muted-foreground">
                  Make scoped backend, CMS, or website updates without unnecessary rewrites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">03</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Verify</span>
                <p className="font-semibold text-muted-foreground">
                  Check build, lint, deployments, and production behavior before calling the task done.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
