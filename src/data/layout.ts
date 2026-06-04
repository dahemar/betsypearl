import type { NavLink, WelcomeTile } from './site';

/** Menú fijo — no editable en Sheets. */
export const NAV_LINKS: NavLink[] = [
  { href: '/portfolio', label: 'portfolio' },
  { href: '/visuals', label: 'visuals' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export type HomeTileKey = 'logo' | 'portfolio' | 'visuals' | 'about' | 'contact' | 'instagram';

export type HomeTileLayout = WelcomeTile & {
  key: HomeTileKey;
  /** Si true, el enlace puede sobreescribirse desde Sheets (p. ej. instagram). */
  linkFromSheet?: boolean;
};

export const HOME_TILE_LAYOUT: HomeTileLayout[] = [
  {
    key: 'logo',
    title: 'betsy pearl',
    href: '/',
    kind: 'section',
    tone: 'paper',
    image: '/images/logo-center.jpg',
    x: '45%',
    y: '40%',
    rotate: '0deg',
    width: '220px',
    height: '220px',
  },
  {
    key: 'portfolio',
    title: 'portfolio',
    href: '/portfolio',
    kind: 'section',
    tone: 'ink',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.01 (1).jpeg',
    x: '12%',
    y: '66%',
    rotate: '-6deg',
    width: '180px',
    height: '170px',
  },
  {
    key: 'visuals',
    title: 'visuals',
    href: '/visuals',
    kind: 'section',
    tone: 'warm',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (1).jpeg',
    x: '72%',
    y: '32%',
    rotate: '4deg',
    width: '180px',
    height: '170px',
  },
  {
    key: 'about',
    title: 'about',
    href: '/about',
    kind: 'section',
    tone: 'soft',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (2).jpeg',
    x: '8%',
    y: '28%',
    rotate: '-5deg',
    width: '160px',
    height: '150px',
  },
  {
    key: 'contact',
    title: 'contact',
    href: '/contact',
    kind: 'section',
    tone: 'bright',
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02 (3).jpeg',
    x: '82%',
    y: '64%',
    rotate: '-6deg',
    width: '150px',
    height: '120px',
  },
  {
    key: 'instagram',
    title: 'instagram',
    href: 'https://instagram.com/',
    kind: 'external',
    tone: 'bright',
    linkFromSheet: true,
    image: '/images/WhatsApp Image 2026-03-26 at 14.51.02.jpeg',
    x: '45%',
    y: '80%',
    rotate: '2deg',
    width: '140px',
    height: '110px',
  },
];

export const PROJECT_GALLERY_TONES = ['soft', 'paper', 'warm', 'ink', 'bright'] as const;

export const VISUAL_JOURNAL_LAYOUT = [
  { size: 'xs' as const, orient: 'portrait' as const, align: 'top' as const },
  { size: 'lg' as const, orient: 'landscape' as const, align: 'bottom' as const },
  { size: 'lg' as const, orient: 'landscape' as const, align: 'top' as const },
  { size: 'xs' as const, orient: 'portrait' as const, align: 'bottom' as const },
  { size: 'xs' as const, orient: 'square' as const, align: 'top' as const },
  { size: 'lg' as const, orient: 'portrait' as const, align: 'bottom' as const },
  { size: 'lg' as const, orient: 'portrait' as const, align: 'top' as const },
  { size: 'xs' as const, orient: 'square' as const, align: 'bottom' as const },
];
