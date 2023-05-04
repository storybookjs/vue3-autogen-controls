import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./components/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        FlatBlue: "#BFCDE0",
        DeepBlue: "#0D0E25",
        RegularRed: "#EB8273",
      },
      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
