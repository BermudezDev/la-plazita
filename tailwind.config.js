/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      'hero' : 'url(./public/hero.jpg)'
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

