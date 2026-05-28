export type PortfolioWorkItem = {
  title: string;
  description: string;
  badges: string[];
  status: string;
  meta: string[];
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export type PortfolioProcessStep = {
  id?: string;
  number: string;
  title: string;
  description: string;
};

export type PortfolioStackGroup = {
  id?: string;
  title: string;
  text: string;
  badge: string;
};

export type SectionIntroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export type HeroTerminalLine = {
  prompt: string;
  value: string;
};

export type HeroContent = {
  statusLine: string;
  headline: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  metrics: HeroMetric[];
  terminalTitle: string;
  terminalLines: HeroTerminalLine[];
  terminalBadges: string[];
  heroImageUrl?: string | null;
  heroImageAlt?: string | null;
};

export type AboutProfileContent = {
  cardTitle: string;
  paragraph: string;
  tags: string[];
  avatarImageUrl?: string | null;
  avatarImageAlt?: string | null;
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavigationContent = {
  brandInitials: string;
  brandName: string;
  headerLinks: NavLink[];
  footerLinks: NavLink[];
};

export type FooterContent = {
  badge: string;
  headline: string;
  description: string;
  emailLabel: string;
  emailHref: string;
  emailHint: string;
  bottomText: string;
};
