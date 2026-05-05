// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  compressHTML: false,
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  integrations: [mdx(), sitemap()],
  site: 'https://tokensquirrel.com',
});
