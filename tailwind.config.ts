import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: "#1F1D20",
        ember: "#6A312F",
        clay: "#803E2F",
        sand: "#A79986",
        charcoal: "#3E3D38",
      },
      fontFamily: {
        sans: ['"amifer"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;