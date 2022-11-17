/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '500px': '500px',
      },
      height: {
        '150px': '150px',
      },
      margin: {
        '500px': '500px',
      }
    },
  },
  plugins: [],
}
