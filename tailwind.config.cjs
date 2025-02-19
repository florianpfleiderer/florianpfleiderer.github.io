const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dark: {
          bg: "#121212",
          surface: "#1E1E1E",
          text: "#E0E0E0",
        },
      },
    },
  },

  plugins: [],
};

module.exports = config;
