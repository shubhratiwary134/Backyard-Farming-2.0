/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'], 
        heading:['"Playfair Display"','serif'],
        caveat: ['"Caveat"', 'cursive'],
        Montserrat:['"Montserrat"','cursive'],
        poppins: ["poppins",'sans-serif ']
      },
    },
  },
  plugins: [],
}

