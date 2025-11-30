/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          dark: '#0e402d',
          medium: '#295135',
          light: '#5a6650',
          accent: '#9fcc2e',
        },
      },
    },
  },
  plugins: [],
}

