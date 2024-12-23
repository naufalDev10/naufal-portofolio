/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        linearBg:
          "linear-gradient(180deg, rgba(0, 13, 9, 1) 66%, rgba(0, 57, 39, 1) 100%)",
      },
      colors: {
        primaryColor: "#00f4a7",
      },
    },
  },
  plugins: [],
};
