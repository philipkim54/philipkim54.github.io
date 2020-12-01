const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-hero':
          "url('https://hsimga.imagizer.com/homesnap-stock-photos/HSStockPhotos/11.jpg?w=3000&h=1688&crop=fit&format=auto')",
      }),
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto\\ Slab', 'serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      height: {
        'hero-sm': '250px',
        'hero-md': '300px',
        'hero-lg': '600px',
      },
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
