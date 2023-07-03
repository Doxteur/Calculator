/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // random color palette
      colors: {
        primary: "#023047",
        secondary: "#219ebc",
        tertiary: "#ffb703",
        quaternary: "#fb8500",
        quinary: "#8ecae6",
      },
    },
  },
  plugins: [],
};
