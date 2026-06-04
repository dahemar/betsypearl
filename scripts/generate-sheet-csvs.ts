/**
 * CSV simplificado: solo texto e imágenes editables.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fallbackSite } from '../src/data/fallback.ts';
import { HOME_TILE_LAYOUT } from '../src/data/layout.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../data/sheets-import');

function escapeCsv(value: unknown) {
  const s = String(value ?? '');
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function toCsv(headers: string[], rows: Record<string, string>[]) {
  const lines = [headers.map(escapeCsv).join(',')];
  for (const row of rows) {
    lines.push(headers.map((h) => escapeCsv(row[h])).join(','));
  }
  return `${lines.join('\n')}\n`;
}

const settingsRows = [
  { field: 'name', value: fallbackSite.siteMeta.name },
  { field: 'description', value: fallbackSite.siteMeta.description },
];

const homeRows = HOME_TILE_LAYOUT.map((tile) => ({
  tile: tile.key,
  image: tile.image || '',
  link: tile.linkFromSheet ? tile.href : '',
}));

const portfolioRows = fallbackSite.projects.map((project) => ({
  title: project.title,
  subtitle: project.subtitle,
  text: project.text,
  image: project.image || '',
}));

const visualRows = fallbackSite.visualImages.map((image) => ({ image }));

const aboutRows = [{ text: fallbackSite.aboutText }];

const contactRows = fallbackSite.contactEmails.map((email) => ({ email }));

const files: Record<string, string> = {
  settings: toCsv(['field', 'value'], settingsRows),
  home: toCsv(['tile', 'image', 'link'], homeRows),
  portfolio: toCsv(['title', 'subtitle', 'text', 'image'], portfolioRows),
  visuals: toCsv(['image'], visualRows),
  about: toCsv(['text'], aboutRows),
  contact: toCsv(['email'], contactRows),
};

await fs.mkdir(outDir, { recursive: true });

for (const [name, content] of Object.entries(files)) {
  await fs.writeFile(path.join(outDir, `${name}.csv`), content);
}

console.log('Wrote', Object.keys(files).join(', '), '→', outDir);
