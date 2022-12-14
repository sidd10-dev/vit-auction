/** @type {import('tailwindcss').Config} */

/* font-family: 'Alegreya Sans', sans-serif;
font-family: 'Dancing Script', cursive;
font-family: 'Exo 2', sans-serif;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Josefin Slab', serif;
font-family: 'Libre Baskerville', serif;
font-family: 'Nunito', sans-serif;
font-family: 'Roboto Condensed', sans-serif;
font-family: 'Source Sans Pro', sans-serif;
font-family: 'Ubuntu', sans-serif; */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'Segoe UI', 'Arial', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Arial', 'Helvetica', 'Arial', 'sans-serif'],
        head: ['Source Sans Pro']
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
