const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      roboto_slab: ['Roboto\\ Slab', 'serif'],
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
      borderWidth: ['hover'],
      transitionDelay: ['hover'],
      transitionDuration: ['hover'],
      transitionProperty: ['hover'],
      transitionTimingFunction: ['hover'],
    },
  },
  plugins: [],
}
