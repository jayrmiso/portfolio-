import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import type { HeroContent } from "@/lib/portfolio-types";

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
      <div className={"space-y-6 lg:col-span-6 xl:col-span-5"}>
        <p className={"text-xs font-semibold uppercase tracking-widest text-muted-foreground"}>{content.statusLine}</p>
        <h1 className={"max-w-4xl text-4xl font-extrabold tracking-tighter md:text-6xl 2xl:text-7xl"}>{content.headline}</h1>
        <p className={"max-w-3xl text-sm font-medium text-muted-foreground md:text-base"}>{content.description}</p>
        <div className={"flex flex-col gap-3 sm:flex-row sm:items-center"}>
          <Button asChild size={"lg"}
                  className={"cursor-pointer rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>
            <Link href={content.primaryCtaHref}>{content.primaryCtaLabel}</Link>
          </Button>
          <Button asChild size={"lg"} variant={"outline"}
                  className={"cursor-pointer rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>
            <Link href={content.secondaryCtaHref}>{content.secondaryCtaLabel}</Link>
          </Button>
        </div>
        <div className={"grid grid-cols-1 gap-3 sm:grid-cols-3"}>
          {content.metrics.map((metric) => (
            <Card key={`${metric.value}-${metric.label}`} size={"sm"} className={"w-full"}>
              <CardHeader>
                <CardTitle>
                  <span className={"text-3xl font-bold"}>{metric.value}</span>
                </CardTitle>
                <CardDescription>
                  <span className={"text-xs font-bold"}>{metric.label}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className={"lg:col-span-6 xl:col-span-7"}>
        {content.heroImageUrl ? (
          <div className="mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card">
            <img
              src={content.heroImageUrl}
              alt={content.heroImageAlt ?? "Hero image"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ) : null}
        <Card size={"default"} className={"ml-auto w-full max-w-3xl"}>
          <CardHeader className="grid-cols-[1fr_auto] items-center border-b border-border">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-foreground/30" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/10" />
            </div>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {content.terminalTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 py-4">
            {content.terminalLines.map((line, index) => (
              <div key={`${line.prompt}-${index}`} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 border-b border-border/70 py-2 text-sm last:border-b-0">
                <span className="font-bold text-muted-foreground">{line.prompt}</span>
                <span className={line.prompt === "ok" ? "font-bold text-foreground" : "text-muted-foreground"}>
                  {line.value}
                </span>
              </div>
            ))}
            <div className={"flex flex-wrap items-center gap-2 pt-4"}>
              {content.terminalBadges.map((badge) => (
                <Badge key={badge} variant="outline" className={"rounded-full px-3 py-2 font-semibold"}>
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

  );
}
