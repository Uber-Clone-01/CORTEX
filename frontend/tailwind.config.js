/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF69B4",
        neonBlue: "#1E90FF",
        neonPurple: "#800080",
        neonWhite: "#F5F5F5",
      },
      

    },
  },
  plugins: [],
}

