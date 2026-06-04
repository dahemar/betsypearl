import { defineMiddleware } from 'astro:middleware';
import { loadSiteData, type LoadedSiteData } from './lib/cms/loadSiteData';

declare module 'astro' {
  interface Locals {
    site: LoadedSiteData;
  }
}

export const onRequest = defineMiddleware(async (_context, next) => {
  _context.locals.site = await loadSiteData();
  return next();
});
