/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-pattern': "url('https://wallpaperaccess.com/full/250472.jpg')",
      }
    },
  },
  plugins: [],
}