const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        orange: colors.orange,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        teal: colors.teal,
        primary: '#005059',
        customGray: {
          450: '#BEBEBE',
          550: '#707070',
        },
        primaryLight: '#0050590d',
      },
    },
  },
  variants: {
    extend: {},
  },
};
