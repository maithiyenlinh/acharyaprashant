/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-neutral': '#fed6aa',
        'primary-blue': '#c7e6f8',
        'primary-gray': '#94a3b8',
        'orange': {
          100: '#ec6930',
          200: '#e8560d',
          300: '#ea580b',
          400: '#d24114',
        }
      },
    },
  },
  plugins: [],
}
