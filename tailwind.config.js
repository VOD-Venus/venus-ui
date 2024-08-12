const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bluish: {
          gray: 'rgba(245,247,250)',
        },
        rua: {
          gray: {
            100: '#aabfc5',
            600: 'rgb(66,66,66)',
            700: 'hsl(220, 13%, 18%)', // code background in dark
            800: 'rgb(35,38,38)', // card background in dark
            900: 'rgb(24,25,26)', // body background in dark
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
