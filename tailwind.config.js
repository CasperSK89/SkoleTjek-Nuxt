/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  css: ['~/assets/css/tailwindcss.css'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Outline', 'cursive',],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["emerald"],
    // darkMode: 'dark'
  },
  // darkMode:'class'
  darkMode: 'false',
}

