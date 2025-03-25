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
        lightHeading: "#0A0A14",
        darkHeading: "#E1E1FF",
        lightDescription: "#666666",
      },
      animation: {
        attention: 'attention 2s ease-in-out',
      },
      keyframes: {
        attention: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '20%': { transform: 'scale(1.2)', opacity: 0.8 },
          '50%': { transform: 'scale(1)', opacity: 1 },
          '80%': { transform: 'scale(1.2)', opacity: 0.8 },
          '100%': { transform: 'scale(0.8)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

