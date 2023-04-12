/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#B3B3B6",
      },
      listStyleType: {
        square: "square",
      },
      container: {
        center: true,
        padding: 4,
      },
    },
  },
  plugins: [],
};
