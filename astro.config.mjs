// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import db from '@astrojs/db';


import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.alandev.site',

  prefetch: true,
  output:'server',
  integrations: [mdx(), react(), db(), sitemap()],
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
  redirects: {
    '/es': '/es/portfolio',
    '/en': '/en/portfolio',
  }
});
