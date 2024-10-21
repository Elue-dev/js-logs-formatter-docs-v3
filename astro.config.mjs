// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import AutoImport from "astro-auto-import";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import { rehypeExternalLinks } from "./plugins/rehype-external-links.mjs";
import { rehypeTable } from "./plugins/rehype-table.mjs";
import icon from "astro-icon";
import { SIDE_BAR_CONFIG } from "./src/config/sidebar-config";
import { EXPRESSIVE_CODE_OPTIONS } from "./src/config/expressive-code-options";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, autolinkConfig],
      rehypeTable,
      rehypeExternalLinks,
    ],
  },
  integrations: [
    icon(),
    starlight({
      title: "JS Logs Formatter",
      plugins: [
        starlightDocSearch({
          appId: import.meta.env.VITE_ALGOLIA_APP_ID,
          apiKey: import.meta.env.VITE_ALGOLIA_API_KEY,
          indexName: import.meta.env.VITE_ALGOLIA_INDEX_ID,
        }),
      ],
      logo: {
        src: "./src/assets/logo.png",
      },
      customCss: ["./src/styles/styles.css"],
      social: {
        github: "https://github.com/Elue-dev/js-logs-formatter",
      },
      // @ts-ignore
      expressiveCode: EXPRESSIVE_CODE_OPTIONS,
      components: {
        Pagination: "./src/starlight-overrides/Pagination.astro",
        MobileMenuToggle: "./src/starlight-overrides/MobileMenuToggle.astro",
      },
      // @ts-ignore
      sidebar: SIDE_BAR_CONFIG,
    }),
    sitemap(),
    tailwind(),
    AutoImport({
      imports: [
        {
          "starlight-package-managers": ["PackageManagers"],
        },
      ],
    }),
  ],
});
