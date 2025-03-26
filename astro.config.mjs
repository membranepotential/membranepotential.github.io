// @ts-check
import { defineConfig } from 'astro/config'

import sectionize from '@hbsnow/rehype-sectionize'
import yaml from '@rollup/plugin-yaml'

import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.peppert.de',
  integrations: [icon()],
  markdown: {
    rehypePlugins: [
      // @ts-ignore
      sectionize,
    ],
  },
  vite: {
    plugins: [yaml(), tailwindcss()],
  },
})
