export type WelcomeTile = {
  title: string;
  href: string;
  kind: 'section' | 'project' | 'external';
  tone: 'soft' | 'ink' | 'warm' | 'paper' | 'bright';
  image?: string;
  x: string;
  y: string;
  rotate: string;
  width: string;
  height: string;
};

export type Project = {
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  gallery: ('soft' | 'ink' | 'warm' | 'paper' | 'bright')[];
};

export type SiteMeta = {
  name: string;
  description: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SiteContent = {
  siteMeta: SiteMeta;
  navLinks: NavLink[];
  welcomeTiles: WelcomeTile[];
  projects: Project[];
  aboutText: string;
  contactEmails: string[];
  visualImages: string[];
};
