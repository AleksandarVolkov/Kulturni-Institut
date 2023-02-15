/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "Raleway"],
      serif: ["ui-serif", "Cinzel"],
      mono: ["ui-monospace", "DM Mono"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
