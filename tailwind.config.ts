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
        primary: "#0eb4bd",
        secondary: "#d3e9ff",
        accent: "#92d400",
        text: "#4d4c5f",
        background: "#fefefe",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
