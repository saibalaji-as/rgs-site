/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          DEFAULT: '#C8A2C8',
          light: '#E6D6F2',
          dark: '#6A4C93',
        },
        charcoal: '#2E2E2E',
        'light-grey': '#F7F7FA',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(200, 162, 200, 0.1)',
        'soft-lg': '0 10px 40px rgba(200, 162, 200, 0.15)',
      },
    },
  },
  plugins: [],
}
