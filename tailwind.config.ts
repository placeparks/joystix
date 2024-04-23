import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
      },
      spacing: {
        '55p': '55%', 
      },
      fontFamily: {
        fontVT: "var(--font-VT323)",
        fontSegoe: "var(--font-Segoe_UI)",
      },
    },
  },
  plugins: [],
};
export default config;
