import defaultTheme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E0001B",
          charcoal: "#4B4C4C",
          light: "#FFFFFF",
        },
        background: {
          slate: "#0D0E0F",
          elevated: "#161719",
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["'JetBrains Mono'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
