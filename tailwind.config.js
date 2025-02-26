/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        linerTo: {
          'from': { transform: 'translateX(0)' },
          'to': {transform: 'translateX(40px) rotate(200deg)'},   
        },
        linerOT: {
          'from': { transform: 'translateX(0)' },
          'to': {transform: 'translateX(-40px) rotate(360deg)'},   
        },
      },
      animation: {
        linerTo: 'linerTo 1s ease-in-out both',
        linerOT: 'linerOT 1s ease-in-out both',

      }
    },
  },
  plugins: [],
}

