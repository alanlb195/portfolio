// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import db from '@astrojs/db';


import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  prefetch: true,
  output:'server',
  integrations: [mdx(), react(), db()],
  adapter: vercel(),
});