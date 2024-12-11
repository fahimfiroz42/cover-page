/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CC9FE",
        secondary: "#37AFE1",
        accent: "#0D92F4",
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

