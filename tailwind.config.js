/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.js", 'components/**/*.js'],
  theme: {
      extend: {
          fontFamily: {
            laila: ['Laila', 'sans-serif'],
            lora: ['Lora', 'sans-serif'],
          },
          colors: {
              primary: "#FF6F3F",
              textMain: "#2B2B2B",
              textBody: "#44433F",
          }
      },
  },
  plugins: [],
};