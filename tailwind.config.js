/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1380px",
      // => @media (min-width: 1280px) { ... }
      "max-xl": { max: "1379px" },
      "max-lg": { max: "1023px" },
      "max-mm": { max: "798px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "539px" },
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa"],
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}
