const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-monserrat)", ...fontFamily.sans],
        heading: ["var(--font-poiretone)", ...fontFamily.sans],
      },
      colors: {
        primary: "#6FE0E7",
        secondary: "#4C88FF",
      },
      backgroundColor: {
        primary: "#1F2D57",
        secondary: "#4C88FF",
      },
    },
  },
  plugins: [],
};
