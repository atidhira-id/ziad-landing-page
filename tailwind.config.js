/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: '#1D77FF',
        'brand-title': '#1C7AFD',
        'brand-text': '#46556C',
      },
    },
    plugins: [],
  },
}
