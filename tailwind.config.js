/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
    //   fontFamily: {
    //     'montserrat': ['Montserrat'],
    // },
      colors: {
        'aboutText':'#050505',
        'brown': '#863a6f',
        'gry' : '#555555',
        'skin':'#F4F4F4',
        'maroon':'#7B2869'
      },
      screens: {
        'xs':'380px',
        's':'500px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}
