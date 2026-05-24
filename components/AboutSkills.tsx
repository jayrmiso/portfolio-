import {Card, CardContent, CardTitle} from "@/components/ui/card";

export default function AboutSkills () {
  const CORE_CAPABILITIES = ["Backend APIs", "Strapi CMS", "CI/CD", "Deployments", "Website Maintenance", "Frontend Support"]
  const HOW_I_CAN_HELP: { bold: string, text: string }[] = [{
    bold: "CMS",
    text: "Managing content structures, admin workflows, and Strapi-related updates."
  }, {
    bold: "Backend",
    text: "Supporting API routes, integrations, bug fixes, and data flow."
  }, {
    bold: "Production",
    text: "Helping with deployments, CI/CD, website updates, and maintenance tasks."
  }]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="space-y-2 md:col-span-5">
          <p className="text-lg font-semibold uppercase text-muted-foreground">
            Skills
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Tools and work I can handle.</h1>
        </div>
        <div className="items-center justify-end mt-auto md:col-span-7">
          <p className="font-medium text-muted-foreground">
            A focused skill set for backend-leaning web development, CMS workflows, and live website support.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Card className="p-5 md:col-span-5">
          <CardTitle>
            <span className="text-lg font-bold">Core capabilities</span>
          </CardTitle>
          <CardContent className="space-y-6 p-0">
            <div className="grid grid-cols-2 gap-4">
              {
                CORE_CAPABILITIES.map((cp, index) => (
                  <Card key={index} className={"justify-center bg-muted px-5 text-sm font-semibold"}>{cp}</Card>
                ))
              }
            </div>
          </CardContent>
        </Card>
        <Card className="p-5 md:col-span-7">
          <CardTitle>
            <span className="text-lg font-bold">How I can help</span>
          </CardTitle>
          <CardContent className="space-y-6 p-0">
            <div className="space-y-4">
              {
                HOW_I_CAN_HELP.map((help, index) => (
                  <div key={index}>
                    <span className={"text-sm font-semibold"}>{help.bold}: </span>
                    <span>{help.text}</span>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

}
