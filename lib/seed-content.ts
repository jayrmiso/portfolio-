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
      "Worked across frontend and backend to ship wedding website features, including AI image generation flows and onboarding moodboards.",
    badges: ["Next.js", "Node.js", "AI Features"],
    status: "public",
    meta: ["role: full-stack support", "focus: feature delivery + maintenance"],
    imageUrl: "/images/work/storia-ph.png",
    imageAlt: "Dashboard view representing wedding platform operations and CMS workflow.",
  },
  {
    title: "Confidential Client Platform",
    description:
      "Delivered outsourced feature work for a confidential platform, including backend API updates, AI-related implementation tasks, and production fixes under NDA-style constraints.",
    badges: ["APIs", "AI Implementation", "Confidential"],
    status: "private",
    meta: ["role: outsourced web developer", "focus: stable releases"],
    imageUrl: "/images/work/confidential-ai.png",
    imageAlt: "Abstract secure AI platform operations panel with deployment telemetry.",
  },
  {
    title: "AI Delivery and CI/CD Support",
    description:
      "Reduced manual deployment work by setting up CI/CD with GitHub Actions and supporting releases across AWS Elastic Beanstalk, Vercel, and Heroku.",
    badges: ["GitHub Actions", "CI/CD", "AWS Deployments"],
    status: "production support",
    meta: ["role: delivery owner", "focus: fewer manual steps"],
    imageUrl: "/images/work/contractor-tasks.png",
    imageAlt: "Task board showing maintenance tickets, deployment checks, and API updates.",
  },
];

export const fallbackProcessSteps: PortfolioProcessStep[] = [
  {
    number: "01",
    title: "Scope",
    description:
      "Clarify the requirement, constraints, and whether a standard implementation or an AI-assisted feature is the right fit.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Ship scoped frontend/backend changes, API updates, and AI-enabled flows when needed without overengineering.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Validate behavior through checks, deployments, and production testing, including result quality for AI-driven features.",
  },
];

export const fallbackStackGroups: PortfolioStackGroup[] = [
  {
    title: "CMS",
    text: "Strapi, content models, admin workflows, and content updates.",
    badge: "structured content",
  },
  {
    title: "Backend and APIs",
    text: "Node.js and TypeScript API work, integrations, data flow, and production fixes.",
    badge: "server-side delivery",
  },
  {
    title: "AI Engineering Focus",
    text: "AI feature integration for web apps, including image-generation workflows and practical implementation support.",
    badge: "ai-enabled apps",
  },
  {
    title: "Delivery and Ops",
    text: "CI/CD, deployments, build checks, and release support across multiple environments.",
    badge: "ship reliably",
  },
  {
    title: "Frontend Support",
    text: "Next.js, responsive UI, shadcn components, and practical polish.",
    badge: "clean UI",
  },
];

export const fallbackHeroContent: HeroContent = {
  statusLine: "status: full-stack developer (backend-leaning) with AI product experience",
  headline: "I build reliable web products, including AI-powered features when they add value.",
  description:
    "I have delivered production web work across frontend, backend APIs, CMS workflows, CI/CD, and maintenance since 2021. I also build AI-powered product features as part of practical client delivery.",
  primaryCtaLabel: "View Work",
  primaryCtaHref: "#work",
  secondaryCtaLabel: "Contact Me",
  secondaryCtaHref: "#contact",
  metrics: [
    { value: "2021-2026", label: "Delivery experience" },
    { value: "AI + Backend", label: "Current focus" },
    { value: "On-demand", label: "Production support" },
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
  cardTitle: "How I Work",
  paragraph:
    "I work as a backend-leaning full-stack developer across both standard web product work and AI-enabled features. My day-to-day includes building features, updating APIs, fixing production issues, and shipping changes safely.",
  tags: ["full-stack", "backend-leaning", "reliable"],
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
  badge: "Open to backend-leaning full-stack and AI product roles",
  headline: "Hiring for full-stack delivery with backend ownership and AI feature support?",
  description:
    "I am looking for roles where I can deliver production web features end-to-end, including backend APIs, CMS workflows, CI/CD, and AI-powered product capabilities.",
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
    title: "Recent work I can share.",
    description:
      "Public and confidentiality-safe examples across AI features, backend APIs, and production support.",
  },
  process: {
    eyebrow: "~/process",
    title: "Simple process, reliable output.",
    description:
      "My workflow stays practical: scope clearly, build the right solution, verify in deployment, and support follow-up fixes when needed.",
  },
  stack: {
    eyebrow: "~/stack",
    title: "Tools I use for production web and AI feature delivery.",
    description:
      "This stack reflects real client work across web platforms, backend services, and AI-enabled features.",
  },
};
