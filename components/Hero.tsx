import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className={"space-y-6 md:col-span-5"}>
        <p className={"text-xs font-semibold uppercase tracking-widest text-muted-foreground"}>Backend-Focused Web
          Developer</p>
        <h1 className={"text-4xl font-bold md:text-5xl"}>Reliable websites, CMS workflows, and backend systems.</h1>
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
        <div className={"grid grid-cols-1 gap-4 sm:grid-cols-3"}>
          <Card size={"sm"} className={"mx-auto w-full max-w-sm"}>
            <CardHeader>
                <CardTitle>
                  <span className={"text-3xl font-bold"}>6+</span>
                </CardTitle>
              <CardDescription>
                <span className={"text-xs font-bold"}>Production projects</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card size={"sm"} className={"mx-auto w-full max-w-sm"}>
            <CardHeader>
              <CardTitle>
                <span className={"text-3xl font-bold"}>3</span>
              </CardTitle>
              <CardDescription>
                <span className={"text-xs font-bold"}>Core strengths</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card size={"sm"} className={"mx-auto w-full max-w-sm"}>
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
      <div className={"items-center justify-center my-auto ml-auto md:col-span-7"}>
        <Card size={"default"} className={"mx-auto w-full max-w-lg"}>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace desk with a laptop and office setup"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>What I focus on</CardTitle>
            <CardDescription className={"space-y-4"}>
              <p>Reliable backend work, CMS support, deployment flow, and practical fixes that keep production websites moving.</p>
              <div className={"flex flex-wrap items-center gap-3"}>
                <Badge className={"rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>Backend</Badge>
                <Badge className={"rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>Strapi</Badge>
                <Badge className={"rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>CI/CD</Badge>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>

  );
}
