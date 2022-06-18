/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //use any Javascript or HTML file as content 
  theme: {
    extend: { //We are extending everything in order to keep the existing things Tailwind provides. 
              //If you want to override something, declare it outside of the extend object
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite', //insantiate wiggle animation
      },
      keyframes: {
        wiggle: { //keyframes for the custom animation of wiggle
          '0%, 100%' : {transform: 'rotate(-12deg)'},
          '50%': {transform: 'rotate(12deg)'}
        }
      },
      colors: { //custom colors can be added here
        tailwindblue: "#16becb",
        tailwinddarkblue: "#161d2d",
        tailwindcream: "#e9e2d1",
        tailwindclay: "#b53b2f",
        examplegreen: "rgb(12,159,100)"
      },
      fontFamily: {
        tradewinds: ['Trade Winds', 'cursive'] //fonts are added here after imported in input.css
      }
    },
  },
  plugins: [],
}
