/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "278px": "278px",
      },
      left: {
        "278px": "278px",
      },
      top: {
        screen: "100vh",
      },
      colors: {
        Dark: "#2B2D42",
        DarkBlue: "#03045E",
        CTA: "#90E0EF",
        Light: "#F6FFF8",
      },
    },
  },
  plugins: [],
};
