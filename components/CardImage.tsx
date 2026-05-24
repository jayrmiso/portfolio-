import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Badge} from "@/components/ui/badge";

export interface CardImageProps {
  src: string;
  title: string;
  description: string
  badges: string[]
  imageAlt?: string
  status?: string
  meta?: string[]
}

export default function CardImage({ title, description, badges = ["Badge A", "Badge B", "Badge C"], status = "production", meta = [] }: CardImageProps) {
  return (
    <Card className="h-full border-b border-border">
      <div className="portfolio-fine-grid-bg flex min-h-40 flex-col justify-end gap-3 border-b border-border bg-muted p-4">
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
  )
}
