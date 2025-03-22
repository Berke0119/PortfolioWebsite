/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bodyDark: "#252128",
        bodyLight: "#ffffff",
        lightHeading: "#1F2937",
        darkHeading: "#AEBCCF",
        lightDescription: "#6B7280",
        
      }
    },
  },
  plugins: [],
}

