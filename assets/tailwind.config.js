/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {},
    extend: {},
    plugins: [
      require('flowbite/plugin')
    ]
  },
}