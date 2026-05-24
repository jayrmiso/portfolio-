export type WorkItem = {
  title: string;
  description: string;
  badges: string[];
  status: string;
  meta: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type StackGroup = {
  title: string;
  text: string;
  badge: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Storia.ph Wedding Platform",
    description:
      "Supported a live wedding-related web app through website management, backend tasks, CMS updates, and production maintenance.",
    badges: ["CMS", "Backend", "Maintenance"],
    status: "public",
    meta: ["role: subcontractor web developer", "focus: reliability and support"],
  },
  {
    title: "Confidential AI Platform",
    description:
      "Contributed to backend and platform work for a private AI product under subcontractor terms. Details kept confidential.",
    badges: ["APIs", "CI/CD", "Private"],
    status: "confidential",
    meta: ["role: backend/platform support", "focus: private production work"],
  },
  {
    title: "Contractor Web Tasks",
    description:
      "Handled assigned production tasks as a subcontractor, including Strapi management, API work, deployments, and site fixes.",
    badges: ["Strapi", "Deploy", "Fixes"],
    status: "ongoing pattern",
    meta: ["role: task owner", "focus: practical delivery"],
  },
];

export const processSteps: ProcessStep[] = [
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

export const stackGroups: StackGroup[] = [
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
