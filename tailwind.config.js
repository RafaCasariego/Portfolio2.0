/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: ['"Readex Pro"', 'sans-serif'],
      },
      colors: {
        crema: '#d3d2cd',
        grisoscuro: '#28282a',
        azulGradienteInicio: '#1b1b1b',
        azulIntermedio: '#272727',
        azulGradienteFin: '#1b1b1b',
      },
    },
  },
  plugins: [],
}
