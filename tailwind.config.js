const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'opal': '#8AB9B5',
     'darkGray':'#2B4141'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'opal': '#8AB9B5',
      'darkGray':'#2B4141'
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      'opal': '#8AB9B5',
      'darkGray':'#2B4141',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
