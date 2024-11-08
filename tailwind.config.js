/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{razor,html,cshtml}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Noto Serif', 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

