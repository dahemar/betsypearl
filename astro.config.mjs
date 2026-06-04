import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
  },
  redirects: {
    '/events-projects': '/portfolio',
    '/artists': '/portfolio',
  },
});
