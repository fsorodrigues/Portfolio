const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: {
        light: colors.violet,
        dark: colors.yellow
      },
      gray: colors.gray,
    },
    fontFamily: {
      mono: ['Cousine', 'ui-monospace'],
    }
  },
  plugins: [],
  darkMode: "selector"
};
