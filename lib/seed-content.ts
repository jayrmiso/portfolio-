import type {
  AboutProfileContent,
  FooterContent,
  HeroContent,
  NavigationContent,
  PortfolioProcessStep,
  PortfolioStackGroup,
  PortfolioWorkItem,
  SectionIntroContent,
} from "./portfolio-types";

export const fallbackWorkItems: PortfolioWorkItem[] = [
  {
    title: "Storia.ph Wedding Platform",
    description:
      "Supported a live wedding-related web app through website management, backend tasks, CMS updates, and production maintenance.",
    badges: ["CMS", "Backend", "Maintenance"],
    status: "public",
    meta: ["role: subcontractor web developer", "focus: reliability and support"],
    imageUrl: "/images/work/storia-ph.png",
    imageAlt: "Dashboard view representing wedding platform operations and CMS workflow.",
  },
  {
    title: "Confidential AI Platform",
    description:
      "Contributed to backend and platform work for a private AI product under subcontractor terms. Details kept confidential.",
    badges: ["APIs", "CI/CD", "Private"],
    status: "confidential",
    meta: ["role: backend/platform support", "focus: private production work"],
    imageUrl: "/images/work/confidential-ai.png",
    imageAlt: "Abstract secure AI platform operations panel with deployment telemetry.",
  },
  {
    title: "Contractor Web Tasks",
    description:
      "Handled assigned production tasks as a subcontractor, including Strapi management, API work, deployments, and site fixes.",
    badges: ["Strapi", "Deploy", "Fixes"],
    status: "ongoing pattern",
    meta: ["role: task owner", "focus: practical delivery"],
    imageUrl: "/images/work/contractor-tasks.png",
    imageAlt: "Task board showing maintenance tickets, deployment checks, and API updates.",
  },
];

export const fallbackProcessSteps: PortfolioProcessStep[] = [
  {
    number: "01",
    title: "Inspect",
    description:
      "Understand the code, CMS, deployment flow, and task requirements before changing things.",
  },
  {
    number: "02",
    title: "Implement",
    description:
      "Make scoped backend, CMS, or website updates without unnecessary rewrites.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Check build, lint, deployments, and production behavior before calling the task done.",
  },
];

export const fallbackStackGroups: PortfolioStackGroup[] = [
  {
    title: "CMS",
    text: "Strapi, content models, admin workflows, and content updates.",
    badge: "structured content",
  },
  {
    title: "Backend",
    text: "API routes, integrations, data flow, and production fixes.",
    badge: "server logic",
  },
  {
    title: "Delivery",
    text: "CI/CD, deployments, build checks, and release support.",
    badge: "ship safely",
  },
  {
    title: "Frontend Support",
    text: "Next.js, responsive UI, shadcn components, and practical polish.",
    badge: "clean UI",
  },
];

export const fallbackHeroContent: HeroContent = {
  statusLine: "status: backend-focused web developer",
  headline: "Reliable websites, CMS workflows, and backend systems.",
  description:
    "I work on production websites and web applications, focusing on backend APIs, Strapi CMS, CI/CD, deployments, and practical website maintenance.",
  primaryCtaLabel: "View Work",
  primaryCtaHref: "#work",
  secondaryCtaLabel: "Contact",
  secondaryCtaHref: "#contact",
  metrics: [
    { value: "6+", label: "Production projects" },
    { value: "3", label: "Core strengths" },
    { value: "24h", label: "Response goal" },
  ],
  terminalTitle: "production-check.sh",
  terminalLines: [
    { prompt: "$", value: "cms.sync --provider strapi" },
    { prompt: "ok", value: "content models stable" },
    { prompt: "$", value: "api.routes --verify" },
    { prompt: "ok", value: "backend endpoints responding" },
    { prompt: "$", value: "deploy.pipeline --watch" },
    { prompt: "ok", value: "release flow ready" },
  ],
  terminalBadges: ["Backend", "Strapi", "CI/CD"],
  heroImageUrl: "/images/site/hero-ops-v2.png",
  heroImageAlt: "Backend engineering workstation with monitoring dashboards and deployment telemetry, no people.",
};

export const fallbackAboutProfileContent: AboutProfileContent = {
  cardTitle: "Short positioning",
  paragraph:
    "I am a backend-focused web developer who has worked as a subcontractor on production web applications. I help maintain websites, manage CMS workflows, build and support backend APIs, and keep deployment pipelines moving.",
  tags: ["calm", "practical", "production-minded"],
  avatarImageUrl: "/images/site/about-workspace.png",
  avatarImageAlt: "Abstract technical workspace with backend dashboards and engineering notes.",
};

export const fallbackNavigationContent: NavigationContent = {
  brandInitials: "AR",
  brandName: "Arjay",
  headerLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  footerLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
  ],
};

export const fallbackFooterContent: FooterContent = {
  badge: "Available for practical web work",
  headline: "Need help with backend, CMS, or production website support?",
  description:
    "I am open to backend tasks, Strapi/CMS support, API work, deployments, CI/CD fixes, and website maintenance.",
  emailLabel: "Email me",
  emailHref: "mailto:you@example.com",
  emailHint: "Replace this email with your real contact address.",
  bottomText: "Arjay - Backend-focused web developer.",
};

export const fallbackSectionIntros: Record<
  "work" | "process" | "stack",
  SectionIntroContent
> = {
  work: {
    eyebrow: "~/selected-work",
    title: "Production work and support experience.",
    description:
      "A snapshot of the backend, CMS, deployment, and maintenance work I have supported across live projects.",
  },
  process: {
    eyebrow: "~/process",
    title: "Practical, careful, production-minded.",
    description:
      "I approach backend and website support work with a simple flow: understand the system, make scoped changes, and verify the result.",
  },
  stack: {
    eyebrow: "~/stack",
    title: "Tools grouped by practical use.",
    description:
      "Each area reflects the kind of production website, backend, CMS, and deployment work I can support.",
  },
};
