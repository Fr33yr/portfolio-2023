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
        primary: "#E34038",
        secondary: "#FFE7E2",
      },
      backgroundColor: {
        primary: "#0F0F0F",
        secondary: "#2673B8",
        lightblack: "#141414"
      },
    },
  },
  plugins: [],
};
