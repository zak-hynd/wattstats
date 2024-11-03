/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#BB86FC',
        secondary: '#03DAC6',
        text: '#FFFFFF',
        textSecondary: '#A1A1A1',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      maxWidth: {
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
