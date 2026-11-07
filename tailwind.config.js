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
          DEFAULT: '#d4af37',
          light: '#e8c547',
        },
        night: '#07070a',
        ink: '#f3efe6',
        muted: '#a89f8e',
      },
    },
  },
  plugins: [],
}
