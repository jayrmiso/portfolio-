import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

const footerLinks: { label: string; href: string }[] = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
];

export default function Footer() {
  return (
    <footer className="space-y-8">
      <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-primary p-6 text-primary-foreground md:grid-cols-12 md:p-8">
        <div className="space-y-4 md:col-span-8">
          <Badge variant="secondary" className="rounded-full px-4 py-2">Available for practical web work</Badge>
          <div className="space-y-3">
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
              Need help with backend, CMS, or production website support?
            </h2>
            <p className="max-w-2xl text-sm font-medium text-primary-foreground/70 md:text-base">
              I am open to backend tasks, Strapi/CMS support, API work, deployments,
              CI/CD fixes, and website maintenance.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 md:col-span-4 md:items-end">
          <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold">
            <Link href="mailto:you@example.com">Email me</Link>
          </Button>
          <p className="text-xs font-medium text-primary-foreground/70">
            Replace this email with your real contact address.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border pt-6 text-sm font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>Arjay - Backend-focused web developer.</p>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
