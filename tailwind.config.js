/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#B3B3B6",
        "gray-dark": "#292929",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
