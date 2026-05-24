import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

const terminalLines: { prompt: string; value: string; muted?: boolean }[] = [
  {
    prompt: "$",
    value: "cms.sync --provider strapi",
  },
  {
    prompt: "ok",
    value: "content models stable",
  },
  {
    prompt: "$",
    value: "api.routes --verify",
  },
  {
    prompt: "ok",
    value: "backend endpoints responding",
  },
  {
    prompt: "$",
    value: "deploy.pipeline --watch",
  },
  {
    prompt: "ok",
    value: "release flow ready",
  },
];

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
      <div className={"space-y-6 md:col-span-5"}>
        <p className={"text-xs font-semibold uppercase tracking-widest text-muted-foreground"}>status: backend-focused web developer</p>
        <h1 className={"max-w-2xl text-4xl font-extrabold tracking-tighter md:text-6xl"}>Reliable websites, CMS workflows, and backend systems.</h1>
        <p className={"text-sm font-medium text-muted-foreground"}>I work on production websites and web applications,
          focusing on backend APIs, Strapi CMS, CI/CD, deployments, and practical website maintenance.</p>
        <div className={"flex flex-col gap-3 sm:flex-row sm:items-center"}>
          <Button asChild size={"lg"}
                  className={"cursor-pointer rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>
            <Link href="#work">View Work</Link>
          </Button>
          <Button asChild size={"lg"} variant={"outline"}
                  className={"cursor-pointer rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
        <div className={"grid grid-cols-1 gap-3 sm:grid-cols-3"}>
          <Card size={"sm"} className={"w-full"}>
            <CardHeader>
                <CardTitle>
                  <span className={"text-3xl font-bold"}>6+</span>
                </CardTitle>
              <CardDescription>
                <span className={"text-xs font-bold"}>Production projects</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card size={"sm"} className={"w-full"}>
            <CardHeader>
              <CardTitle>
                <span className={"text-3xl font-bold"}>3</span>
              </CardTitle>
              <CardDescription>
                <span className={"text-xs font-bold"}>Core strengths</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card size={"sm"} className={"w-full"}>
            <CardHeader>
              <CardTitle>
                <span className={"text-3xl font-bold"}>24h</span>
              </CardTitle>
              <CardDescription>
                <span className={"text-xs font-bold"}>Response goal</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className={"md:col-span-7"}>
        <Card size={"default"} className={"mx-auto w-full max-w-xl"}>
          <CardHeader className="grid-cols-[1fr_auto] items-center border-b border-border">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-foreground/30" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/10" />
            </div>
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              production-check.sh
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 py-4">
            {terminalLines.map((line, index) => (
              <div key={`${line.prompt}-${index}`} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 border-b border-border/70 py-2 text-sm last:border-b-0">
                <span className="font-bold text-muted-foreground">{line.prompt}</span>
                <span className={line.prompt === "ok" ? "font-bold text-foreground" : "text-muted-foreground"}>
                  {line.value}
                </span>
              </div>
            ))}w
            <div className={"flex flex-wrap items-center gap-2 pt-4"}>
              <Badge variant="outline" className={"rounded-full px-3 py-2 font-semibold"}>Backend</Badge>
              <Badge variant="outline" className={"rounded-full px-3 py-2 font-semibold"}>Strapi</Badge>
              <Badge variant="outline" className={"rounded-full px-3 py-2 font-semibold"}>CI/CD</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

  );
}
