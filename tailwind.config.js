/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      clipPath: {
        'triangle': 'polygon(51.7% 0%, 100% 100%, 0% 100%)', 
        'triangle-2': 'polygon(51.7% 0%, 100% 100%, 0% 100%)', 
      },
    },
  },
  plugins: [],
}
