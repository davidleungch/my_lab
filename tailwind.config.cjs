/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 1.7s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    fontFamily: {
      "noto-serif": ["noto-serif", "sans-serif"],
    },
  },
  plugins: [],
};
