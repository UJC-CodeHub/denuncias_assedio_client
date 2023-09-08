/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14a4dc",
        mutedVariant1: "#eff2f3",
        mutedVariant2: "#b4b4b4",
        footer: "#263642",
        primaryHoverVariant: "#169dd3"
      }
    },
  },
  plugins: [],
}
