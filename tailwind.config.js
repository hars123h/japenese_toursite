/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hannari': ['Hannari', 'sans-serif']
      },
      screens: {
        'cstm':'1100px',
        'xcstm':'320px',
        'nokn':'480px',
        
      }
    },
  },
  plugins: [],
}