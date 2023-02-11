/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    screens: {
      es: "320px",
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      primary: {
        default: "#90AEFF",
        dark: "#1C1F29",
        light: "#EEF1FF",
        shades: {
          100: "#778FD0",
          200: "#5F70A2",
          300: "#485477",
          400: "#32384F",
          500: "#1C1F29",
        },
        tones: {
          100: "#9CB2F6",
          200: "#A7B6ED",
          300: "#B0BBE4",
          400: "#B9BFDB",
          500: "#C1C4D1",
        },
        tints: {
          100: "#A5BBFF",
          200: "#B9C8FF",
          300: "#CBD6FF",
          400: "#DDE3FF",
          500: "#EEF1FF",
        },
      },
      secondary: "#CEFC86",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
