// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "JS Logs Formatter",
      logo: {
        src: "./src/assets/logo.png",
      },
      customCss: ["./src/styles/styles.css"],
      social: {
        github: "https://github.com/Elue-dev/js-logs-formatter",
      },
      sidebar: [
        {
          label: "Introduction",
          slug: "docs/introduction",
        },
        {
          label: "Basic Usage",
          slug: "docs/basic-usage",
        },
        {
          label: "Advanced Usage",
          items: [
            {
              label: "Customising Log Outputs",
              slug: "docs/advanced-usage/customising-log-outputs",
            },
            {
              label: "API Reference",
              slug: "docs/advanced-usage/api-reference",
            },
          ],
        },
        {
          label: "Contributing",
          slug: "docs/contributing",
        },
      ],
    }),
    tailwind(),
  ],
});
