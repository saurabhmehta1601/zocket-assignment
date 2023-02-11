/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eudoxus: ["Eudoxus Sans", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
