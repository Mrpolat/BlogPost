
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'town': "url('/src/image/resim.jpg')",
        'adem': "url('/src/image/ademdgn.jpg')",
      },
      colors: {
        "opacity": "rgba(0, 0, 0, 0.5)",
        "lightgray": "#FEFBFD",
        "darkgray": "#ede3de",
      },
      inset: {
        '100px': '100px',
        '85%': '85%'
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/line-clamp'),
  ],
}