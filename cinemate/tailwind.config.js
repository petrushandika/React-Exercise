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
        darkbg: "#1E293B",
        blue: {
          850: "7dd3fc",
        },
      },
    },
  },
  plugins: [],
};
