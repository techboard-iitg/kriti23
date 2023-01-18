/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        tableCellBorder: '#4A6CB2',
        tableBorder: '#032538',
        customBlue: {
          100: "#EDF8FE",
          200: "#4A6CB2",
          300: "#032538",
        }
      },
    },
    
  },
  plugins: [],
}