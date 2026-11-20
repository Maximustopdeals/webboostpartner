
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FCFAF6",
          secondary: "#F0ECE4",
        },
        foreground: {
          DEFAULT: "#242424",
          muted: "#6B6761",
        },
        brand: {
          DEFAULT: "#FB6311",
          hover: "#E0550A",
          accessible: "#B84308",
          "accessible-hover": "#A83B08",
        },
        border: {
          subtle: "#E8E4DD",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(36, 36, 36, 0.05)",
      },
    },
  },
  plugins: [],
};
