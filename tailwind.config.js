module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        askar:
{
  50: '#fff6dd',
  100: '#fae5b3',
  200: '#f5d388',
  300: '#efc25a',
  400: '#ebb02d',
  500: '#d29714',
  600: '#a3750d',
  700: '#755406',
  800: '#473200',
  900: '#1b1000',
},

navCol:

{
  50: '#f2ebff',
  100: '#d3c9ec',
  200: '#2B3148',
  300: '#9584c9',
  400: '#7761b8',
  500: '#5d479e',
  600: '#49377c',
  700: '#34275a',
  800: '#1f1738',
  900: '#0b0619',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
