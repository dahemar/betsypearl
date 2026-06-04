import {
  HOME_TILE_LAYOUT,
  NAV_LINKS,
  PROJECT_GALLERY_TONES,
  type HomeTileKey,
} from '../../data/layout';
import { fallbackSite } from '../../data/fallback';
import type { Project, SiteContent, SiteMeta, WelcomeTile } from '../../data/site';

export type SheetRowsBundle = {
  settings: string[][];
  home: string[][];
  portfolio: string[][];
  visuals: string[][];
  about: string[][];
  contact: string[][];
};

function rowsToObjects(rows: string[][]): Record<string, string>[] {
  if (!rows.length) return [];
  const headers = rows[0].map((h) => String(h ?? '').trim().toLowerCase());
  return rows.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      if (header) obj[header] = String(row[index] ?? '').trim();
    });
    return obj;
  });
}

function rowHasContent(row: Record<string, string>, fields: string[]): boolean {
  return fields.some((field) => Boolean(row[field]));
}

function parseSettingsRows(rows: string[][]): SiteMeta | null {
  const objects = rowsToObjects(rows);
  if (!objects.length) return null;

  const keyed = Object.fromEntries(
    objects
      .filter((row) => row.field)
      .map((row) => [row.field, row.value ?? '']),
  );

  if (keyed.name || keyed.description) {
    return {
      name: keyed.name || fallbackSite.siteMeta.name,
      description: keyed.description || fallbackSite.siteMeta.description,
    };
  }

  return {
    name: objects[0].name || fallbackSite.siteMeta.name,
    description: objects[0].description || fallbackSite.siteMeta.description,
  };
}

function parseHomeRows(rows: string[][]): WelcomeTile[] {
  const byKey = new Map<string, { image?: string; link?: string }>();
  for (const row of rowsToObjects(rows)) {
    const key = row.tile as HomeTileKey;
    if (!key) continue;
    byKey.set(key, {
      image: row.image || undefined,
      link: row.link || undefined,
    });
  }

  return HOME_TILE_LAYOUT.map((layout) => {
    const { key, linkFromSheet, ...base } = layout;
    const sheet = byKey.get(key);
    return {
      ...base,
      image: sheet?.image || base.image,
      href: linkFromSheet && sheet?.link ? sheet.link : base.href,
    };
  });
}

function galleryForIndex(index: number): Project['gallery'] {
  return [
    PROJECT_GALLERY_TONES[index % PROJECT_GALLERY_TONES.length],
    PROJECT_GALLERY_TONES[(index + 1) % PROJECT_GALLERY_TONES.length],
    PROJECT_GALLERY_TONES[(index + 2) % PROJECT_GALLERY_TONES.length],
  ];
}

function parsePortfolioRows(rows: string[][]): Project[] {
  return rowsToObjects(rows)
    .filter((row) => rowHasContent(row, ['title', 'text', 'image']))
    .map((row, index) => ({
      title: row.title || 'untitled',
      subtitle: row.subtitle || '',
      text: row.text || '',
      image: row.image || undefined,
      gallery: galleryForIndex(index),
    }));
}

function parseVisualRows(rows: string[][]): string[] {
  return rowsToObjects(rows)
    .map((row) => row.image)
    .filter(Boolean);
}

function parseAboutRows(rows: string[][]): string {
  const objects = rowsToObjects(rows);
  if (!objects.length) return '';
  return objects[0].text || objects[0].content || '';
}

function parseContactRows(rows: string[][]): string[] {
  return rowsToObjects(rows)
    .map((row) => row.email)
    .filter(Boolean);
}

export function parseSiteFromSheets(rows: SheetRowsBundle): SiteContent | null {
  const siteMeta = parseSettingsRows(rows.settings);
  const welcomeTiles = parseHomeRows(rows.home);
  const projects = parsePortfolioRows(rows.portfolio);
  const visualImages = parseVisualRows(rows.visuals);
  const aboutText = parseAboutRows(rows.about);
  const contactEmails = parseContactRows(rows.contact);

  if (!projects.length && !aboutText && !contactEmails.length && !visualImages.length) {
    return null;
  }

  return {
    siteMeta: siteMeta ?? fallbackSite.siteMeta,
    navLinks: NAV_LINKS,
    welcomeTiles: welcomeTiles.length ? welcomeTiles : fallbackSite.welcomeTiles,
    projects: projects.length ? projects : fallbackSite.projects,
    aboutText: aboutText || fallbackSite.aboutText,
    contactEmails: contactEmails.length ? contactEmails : fallbackSite.contactEmails,
    visualImages: visualImages.length ? visualImages : fallbackSite.visualImages,
  };
}
