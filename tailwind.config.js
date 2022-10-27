/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px', // mobile: 360-768

      'tablet': '768px', // tablet: 768-1024
      'tablet-max': { max: '768px' },

      'laptop': '1024px',
      'laptop-max-min': { max: '1023px', min: '769px' },

      'desk': '1536px',
      'desk-max': { max: '1536px' },
    },
    maxWidth: {
      '1/12': '8.333333%',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '3/4': '75%',
      'full': '100%',
      'fullhd': '1440px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-neutral': '#fed7aa',
        'primary-gray': '#94a3b8',
        'blue-background': '#c7e6f8',
        'gray': {
          'subtitle': '#475569',
          'disabled': '#e2e8ef',
          'separator': '#cad5e1',
          'background': '#f1f5f9',
          'title': '#1e293b',
        },
        'orange-icon': '#f97316',
        'orange-title': '#ea580c',
        'green-background': '#d5ede1',
        'link': '#dd6b20',
        'orange': {
          100: '#ec6930',
          200: '#e8560d',
          300: '#ea580b',
          400: '#d24114',
        },
        'brand': {
          700: '#d24115',
        },
        'slate': {
          300: '#cbd5e1',
          700: '#334155',
        }
      },
    },
  },
  plugins: [],
}
