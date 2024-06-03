/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-sc': ['Cormorant SC', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'redish': '#FF3147',
      },
    },
  },
  plugins: [],
}