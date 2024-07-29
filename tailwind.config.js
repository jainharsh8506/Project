/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "Yeseva-One": ["Yeseva One", "sans-serif"],
        "Work-Sans": ["Work Sans", "sans-serif"],
      },
      maxWidth: {
        '7xl': '80rem', // default 1280px
        '8xl': '90rem', // adding 1440px
        '9xl': '100rem', // adding 1600px
      }
    }
  },
  plugins: [],
};
