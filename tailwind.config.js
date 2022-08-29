/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgraybg: '#363636',
        darkgraybg: '#1B1B1B'
      },

      fontFamily: {
        Roboto: ["Ubuntu","sans-serif"],
      },
    },
  },
  plugins: [],
}
