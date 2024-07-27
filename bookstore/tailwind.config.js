/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        backgroundprimary: "#FEFEFE",
        backgroundsecondary: "#EEF2F3",
        primary: "#FFE4C9",
        secondary: "#EA9F58",
      },
    },
  },
  plugins: [],
};
