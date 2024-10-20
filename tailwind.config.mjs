/** @type {import('tailwindcss').Config} */
import starlightPlugin from "@astrojs/starlight-tailwind";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        kinde: {
          amber: {
            100: "#FFF4DB",
            900: "#95680E",
          },
          blue: {
            100: "#EBF2FF",
            900: "#002D80",
          },
          grey: {
            50: "#F5F5F5",
            100: "#EBEBEB",
            200: "#DBDBDB",
            300: "#C9C9C9",
            400: "#ABABAB",
            500: "#878787",
            600: "#636363",
            700: "#4D4D4D",
            800: "#2B2B2B",
            900: "#0F0F0F",
          },
          purple: {
            100: "#F4E5FF",
            500: "#903DD1",
          },
          red: {
            100: "#FFEBEB",
            900: "#800000",
          },
        },
      },
    },
  },
  plugins: [starlightPlugin()],
};
