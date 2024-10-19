/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: "#000",
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: "#000",
      },
    },
  },
  plugins: [starlightPlugin()],
};
