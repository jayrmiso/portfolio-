import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import type { FooterContent, NavigationContent } from "@/lib/portfolio-types";

type FooterProps = {
  footerContent: FooterContent;
  navigationContent: NavigationContent;
};

export default function Footer({ footerContent, navigationContent }: FooterProps) {

  return (
    <footer className="space-y-8">
      <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-primary p-6 text-primary-foreground md:grid-cols-12 md:p-8">
        <div className="space-y-4 md:col-span-8">
          <Badge variant="secondary" className="rounded-full px-4 py-2">{footerContent.badge}</Badge>
          <div className="space-y-3">
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
              {footerContent.headline}
            </h2>
            <p className="max-w-2xl text-sm font-medium text-primary-foreground/70 md:text-base">
              {footerContent.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 md:col-span-4 md:items-end">
          <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]">
            <Link href={footerContent.emailHref}>{footerContent.emailLabel}</Link>
          </Button>
          <p className="text-xs font-medium text-primary-foreground/70">
            {footerContent.emailHint}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-6 text-sm font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>{footerContent.bottomText}</p>
        <nav className="flex flex-wrap gap-4">
          {navigationContent.footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
