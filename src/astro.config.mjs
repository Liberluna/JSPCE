import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  site: "https://jspce.ame-x.net", // 暫定
});