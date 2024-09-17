// @ts-check
import { defineConfig } from "astro/config";

import sectionize from "@hbsnow/rehype-sectionize";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.peppert.de",
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [sectionize],
  },
});
