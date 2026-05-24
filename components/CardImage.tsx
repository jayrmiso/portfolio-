import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Badge} from "@/components/ui/badge";

export interface CardImageProps {
  src: string;
  title: string;
  description: string
  badges: string[]
  imageAlt?: string
}

export default function CardImage({ src, title, description, badges = ["Badge A", "Badge B", "Badge C"], imageAlt }: CardImageProps) {
  return (
    <Card className="border-b border-border h-full">
      <img
        src={src || "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"}
        alt={imageAlt || `${title} project preview`}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>
          <span>{title || 'Placeholder'}</span>
        </CardTitle>
        <CardDescription className={"space-y-6"}>
          <p className={"whitespace-normal hyphens-auto"}>{description || 'Lorem ipsum'}</p>
          <div className={"flex flex-wrap items-center gap-3"}>
            {
              badges.map((badge, index) => (
                <Badge key={index} className={"rounded-full px-4 py-4 font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"}>
                  {badge}
                </Badge>
              ))
            }
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
