/** @type {import('tailwindcss').Config} */
export default {  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        brightColor: "#F2CF05", 
        sombreColor: "#DCB253",
        backgroundColor: "#b7bca9",
        lighText: "#959595",
        ghostWhite: "#F8F8FF",
      },
    },
  },
  plugins: [],
}

