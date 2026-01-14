/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#149cb8",
        "primary-dark": "#0e7a91",
        "accent-coral": "#FF8A6C",
        "background-light": "#fbfaf9",
        "background-dark": "#16181d",
        "surface-light": "#ffffff",
        "surface-dark": "#23262f",
        "text-primary": "#111718",
        "text-secondary": "#638288",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "sans": ["Manrope", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}