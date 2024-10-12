// @ts-check
import { defineConfig } from 'astro/config'

import sectionize from '@hbsnow/rehype-sectionize'
import tailwind from '@astrojs/tailwind'
import yaml from '@rollup/plugin-yaml'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.peppert.de',
  integrations: [tailwind(), icon()],
  markdown: {
    rehypePlugins: [
      // @ts-ignore
      sectionize,
    ],
  },
  vite: {
    plugins: [yaml()],
  },
})