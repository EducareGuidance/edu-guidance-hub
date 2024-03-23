/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
        'perpetua': ['Perpetua', 'serif'],
      },
    },
  },
  plugins: [],
}