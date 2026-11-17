/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#d4a017',
          light: '#f0c14a',
          deep: '#b8860b',
        },
        night: '#000000',
        ink: '#f7f4ee',
        muted: '#a39b8c',
        chrome: '#d0d5dc',
      },
    },
  },
  plugins: [],
}
