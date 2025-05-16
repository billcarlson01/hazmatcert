/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002d72',
        accent: '#0072ce',
        graytext: '#444444',
      },
    },
  },
  plugins: [],
}
