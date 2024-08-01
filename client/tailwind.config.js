const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      keyframes: {
        menuReveal: {
          from: { opacity: "70%", transform: "translateY(-100%)" },
          to: { opacity: "100%", transform: "translateY(0%)" },
        },
        menuHide: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        slideLeft: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        slideRight: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 10s linear infinite",
        slideRight: "slideRight 10s linear infinite",
        menuReveal: "menuReveal 0.2s linear ",
        menuHide: "menuHide 0.3s linear",
      },
    },
  },
  plugins: [],
};
