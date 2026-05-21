import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={"space-y-6"}>
        <p className={"text-xs font-semibold uppercase tracking-widest text-muted-foreground"}>Backend-Focused Web
          Developer</p>
        <h1 className={"text-5xl font-bold"}>Reliable websites, CMS workflows, and backend systems.</h1>
        <p className={"text-s text-muted-foreground font-medium"}>I work on production websites and web applications,
          focusing on backend APIs, Strapi CMS, CI/CD, deployments, and practical website maintenance.</p>
        <div className={"flex items-center gap-3"}>
          <Button size={"lg"}
                  className={"cursor-pointer rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>View
            Work</Button>
          <Button size={"lg"} variant={"outline"}
                  className={"cursor-pointer rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>Contact</Button>
        </div>
        <div className={"grid grid-cols-3 gap-4"}>
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
      <div className={"items-center justify-center my-auto"}>
        <Card size={"default"} className={"mx-auto w-full max-w-md"}>
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>What I focus on</CardTitle>
            <CardDescription className={"space-y-4"}>
              <p>Reliable backend work, CMS support, deployment flow, and practical fixes that keep production websites moving.</p>
              <div className={"flex items-center gap-3"}>
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