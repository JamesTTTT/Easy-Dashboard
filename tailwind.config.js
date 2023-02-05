/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "000000",
        navigation: "",
        background: "#f3f1ef",
      },
      borderRadius: {
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
