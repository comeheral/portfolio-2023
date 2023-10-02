/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'heading': ['"Clash Display"', 'sans-serif'],
      'text': ['Lexend', 'sans-serif']
    },
    extend: {
      colors: {
        'dark': '#11212C',
        'white': '#FFFFFF',
        'pastelblue': '#E6EDF5'
      },
    },
  },
  safelist: [
    'text-dark',
    'text-white',
    'bg-dark',
    'bg-white',
    'fill-dark',
    'fill-white'
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}

