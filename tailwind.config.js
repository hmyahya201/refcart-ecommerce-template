/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:  "'Poppins', 'sans-serif'",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        primary: "#FD3D57"
      }
    },
  },
  plugins: [],
}
