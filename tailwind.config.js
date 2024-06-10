/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'nexus': {
          100: '#e2f3fc',
          200: '#bfe7f8',
          300: '#86d4f3',
          400: '#45beeb',
          500: '#1b9ccd',
          600: '#0f86ba',
          700: '#0e6b96',
          800: '#0f5a7d',
          850: '#183753',
          900: '#134b67',
        },
        'dashboard': {
          200: '#EDEDEE',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
