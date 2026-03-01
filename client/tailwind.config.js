/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',    // warm orange
        secondary: '#1A1A2E',  // deep navy
        accent: '#F9A03F',     // lighter orange
        background: '#f8f9fa', // light mode bg
        'dark-bg': '#121212',  // dark mode bg
        surface: '#ffffff',    // light mode card bg
        'dark-surface': '#1e1e1e', // dark mode card bg
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
