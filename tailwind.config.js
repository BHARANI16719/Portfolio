/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          700: '#0d6e5e',
          800: '#0a5a4a',
        }
      }
    },
  },
  plugins: [],
}
