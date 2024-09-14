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
        blue20: "#ADBAED",
        blue50: "#3353D3",

        neutral20: "#CACDD0",
        neutral40: "#959CA1",
        neutral50: "#7B8389",
        neutral60: "#62696E",
        neutral80: "#313437",

        gray10: "#7B8389",
        gray20: "#6A6A6A",

        red50: "#E72222",

        yellow20: "#FEFFB7",
        yellow50: "#FFD159",
        yellow80: "#B3923E",
      },
      boxShadow: {
        card: "0px 0px 7px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
