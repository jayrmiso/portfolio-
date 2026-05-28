import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import SectionIntro from "@/components/sections/SectionIntro";
import type { AboutProfileContent, PortfolioProcessStep, SectionIntroContent } from "@/lib/portfolio-types";

type AboutMeProps = {
  steps: PortfolioProcessStep[];
  intro: SectionIntroContent;
  profile: AboutProfileContent;
};

export default function AboutMe({ steps, intro, profile }: AboutMeProps) {

  return (
    <div className="space-y-6">
      <SectionIntro
        eyebrow={intro.eyebrow}
        title={intro.title}
        description={intro.description}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Card className={"p-5 md:col-span-5"}>
          {profile.avatarImageUrl ? (
            <div className="mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src={profile.avatarImageUrl}
                alt={profile.avatarImageAlt ?? "Profile image"}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ) : null}
          <CardTitle className={"font-semibold"}>{profile.cardTitle}</CardTitle>
          <CardDescription className={"font-semibold space-y-6"}>
            <p>{profile.paragraph}</p>
            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-2 text-xs text-foreground">{tag}</span>
              ))}
            </div>
          </CardDescription>
        </Card>
        <Card className={"md:col-span-7"}>
          <CardContent className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id ?? `${step.number}-${index}`} className="grid grid-cols-1 gap-4 border-b pb-4 last:border-b-0 last:pb-0 md:grid-cols-12">
                <div className="font-semibold md:col-span-4">{step.number}</div>
                <div className="md:col-span-8">
                  <span className="text-lg font-semibold">{step.title}</span>
                  <p className="font-semibold text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
