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
        brand: {
          50: "#ecfdf3",
          100: "#d1fae0",
          200: "#a7f3c6",
          300: "#6ee7a0",
          400: "#34d070",
          500: "#15803d",
          600: "#047738",
          700: "#065f30",
          800: "#074d28",
          900: "#0a3d22",
          950: "#042f1a",
        },
        gold: {
          300: "#F6E27A",
          400: "#E8C845",
          500: "#D4A847",
          600: "#B8922E",
        },
        surface: {
          50: "#f8faf9",
          100: "#f0f4f1",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;