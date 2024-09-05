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
        primary: "#1c1c1c",
        secondary: "#343434",
        backgroundprimary: "#FEFEFE",
        backgroundsecondary: "#EEF2F3",
        darkbg: "#1E293B",
      },
      backgroundImage: {
        tertiary:
          "linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
      },
    },
  },
  plugins: [],
};
