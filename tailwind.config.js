/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: { //keyframes for the custom animation of wiggle
          '0%, 100%' : {transform: 'rotate(-12deg)'},
          '50%': {transform: 'rotate(12deg)'}
        }
      },
      colors: {
        tailwindblue: "#16becb",
        tailwinddarkblue: "#161d2d", //colors can be added here
        tailwindcream: "#e9e2d1",
        tailwindclay: "#b53b2f"
      },
      fontFamily: {
        tradewinds: ['Trade Winds', 'cursive'] //fonts are added here after imported in input.css
      }
    },
  },
  plugins: [],
}
