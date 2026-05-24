type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <div className="space-y-2 md:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
          {title}
        </h1>
      </div>
      <div className="items-center justify-end mt-auto md:col-span-7">
        <p className="font-medium text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
