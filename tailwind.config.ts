import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue10: "#EBEEFB",
        blue50: "#3353D3",
        neutral20: "#CACDD0",
        neutral80: "#313437",
        gray10: "#7B8389",
        gray20: "#6A6A6A",
        yellow50: "#FFD159",
      },
    },
  },
  plugins: [],
};
export default config;
