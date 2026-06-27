import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain on GitHub Pages. Site is served at the root.
export default defineConfig({
  site: 'https://whiskerbeacon.com',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
