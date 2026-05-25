import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import type { WorkItem } from "@/lib/portfolio-content";

export default function WorkCard({ title, description, badges, status, meta }: WorkItem) {
  return (
    <div className="group/card h-full transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_30px_80px_-24px_rgba(0,0,0,0.28)]">
      <Card className="h-full border-border/70 group-hover/card:border-foreground/20">
        <div className="portfolio-fine-grid-bg flex min-h-40 flex-col justify-end gap-3 border-b border-border bg-muted p-4 transition-colors duration-300 group-hover/card:bg-muted/70">
        <Badge variant="outline" className="w-fit rounded-full bg-background px-3 py-2 font-semibold">
          {status}
        </Badge>
        <div className={"flex flex-wrap items-center gap-2"}>
          {
            badges.map((badge, index) => (
              <Badge key={index} variant="outline" className={"rounded-full bg-background px-3 py-2 font-semibold"}>
                {badge}
              </Badge>
            ))
          }
        </div>
      </div>
      <CardHeader>
        <CardTitle>
          <span>{title || 'Placeholder'}</span>
        </CardTitle>
        <CardDescription className={"space-y-6"}>
          <p className={"whitespace-normal hyphens-auto"}>{description || 'Lorem ipsum'}</p>
          {meta.length > 0 && (
            <div className="grid gap-2 border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
        </CardDescription>
      </CardHeader>
      </Card>
    </div>
  )
}
