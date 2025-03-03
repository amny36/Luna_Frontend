/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary': '#06141B',
        'secondary': '#11212D',
        'tertiary': '#253745',
        'accent': '#4A5C6A',
        'highlight': '#9BA8AB',
        'light':'#CCD0CF'
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backdropBlur: ['hover', 'focus'],
    },
  },
}