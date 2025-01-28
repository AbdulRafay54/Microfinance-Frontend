/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDefault: "#07619D",
        customGreen: "#84C226",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
