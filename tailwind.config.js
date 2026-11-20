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
          DEFAULT: '#FCFAF6', // Warm Off-White
          secondary: '#F0ECE4', // Warm Beige (voor secties)
        },
        foreground: {
          DEFAULT: '#242424', // Diep Antraciet
          muted: '#5E5A54', // ✅ AANGEPAST: Donkerder warm grijs (voldoet aan contrast)
        },
        brand: {
          DEFAULT: '#C45000', // ✅ AANGEPAST: Dieper, rijker oranje (voldoet aan contrast)
          hover: '#A34000', // Iets donkerder voor hover states
        },
        border: {
          subtle: '#E8E4DD', // Subtiel warm grijs voor randen
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 36, 36, 0.05)',
      }
    },
  },
  plugins: [],
}
