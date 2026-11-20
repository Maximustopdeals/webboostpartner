/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F6F3",
        foreground: "#1C1917",
        brand: {
          DEFAULT: "#E04E2A",
          dark: "#C2410C",
          light: "#FFF0EB",
          muted: "#FDE8E0",
        },
        accent: {
          DEFAULT: "#2A9D8F",
          dark: "#1F7A6E",
          light: "#E6F4F1",
        },
        muted: {
          DEFAULT: "#EDE9E3",
          fg: "#57534E",
        },
        border: "#E7E5E4",
        card: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "650" }],
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(28, 25, 23, 0.05), 0 1px 4px -1px rgba(28, 25, 23, 0.03)",
        "soft-md": "0 6px 24px -4px rgba(28, 25, 23, 0.07), 0 3px 10px -2px rgba(28, 25, 23, 0.04)",
        "soft-lg": "0 12px 40px -6px rgba(28, 25, 23, 0.09), 0 6px 16px -4px rgba(28, 25, 23, 0.05)",
        "brand-glow": "0 6px 20px -4px rgba(224, 78, 42, 0.28)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
