/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/main.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeColor: "#919191",
        navbarBlack:"#222222",
      },
      width:{
        200: "20%",
        300: "30%",
        400: "40%",
        500: "50%",
        600: "60%",
        700: "70%",
        800: "80%",
        900: "90%",
      }
    },
  },
  plugins: [],
};
