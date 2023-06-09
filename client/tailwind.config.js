/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bg-start': '#E18D44',
      'bg-end': '#A82551',
      'black': '#000000',
      'gray': '#EBEBEB',
    },
    extend:{},
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        'dark-blue-text': '#170557',
      },
    },
  },
  plugins: [],
}