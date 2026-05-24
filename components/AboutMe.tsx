import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="space-y-2 md:col-span-5">
          <p className="text-lg font-semibold uppercase text-muted-foreground">
            About Me
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Backend-leaning, practical, and production-minded.
          </h1>
        </div>
        <div className="items-center justify-end mt-auto md:col-span-7">
          <p className="font-medium text-muted-foreground">I am most comfortable behind the interface, making sure data, APIs, admin tools, integrations, and releases work reliably.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Card className={"p-5 md:col-span-5"}>
          <CardTitle className={"font-semibold"}>Short Bio</CardTitle>
          <CardDescription className={"font-semibold space-y-6"}>
            <p>I am a backend-focused web developer who has worked as a subcontractor on production web applications. I help maintain websites, manage CMS workflows, build and support backend APIs, and keep deployment pipelines moving.</p>
            <p>I can work with frontend tasks when needed, but my strongest area is backend and production support: APIs, Strapi, CI/CD, deployments, and site maintenance.</p>
          </CardDescription>
        </Card>
        <Card className={"md:col-span-7"}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 border-b pb-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">01</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Current Focus</span>
                <p className="font-semibold text-muted-foreground">
                  Backend APIs, Strapi CMS, CI/CD workflows, deployment support, and production website maintenance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-b pb-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">02</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Working style</span>
                <p className="font-semibold text-muted-foreground">
                  Practical task ownership, clear updates, careful production changes, and steady support for assigned work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-4 font-semibold">03</div>
              <div className="md:col-span-8">
                <span className="text-lg font-semibold">Best fit</span>
                <p className="font-semibold text-muted-foreground">
                  Backend support, CMS-heavy websites, maintenance work, API tasks, and teams that need someone steady with production details.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
