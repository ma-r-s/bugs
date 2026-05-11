import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#fbf7ec",
          100: "#f6efd9",
          200: "#ede1ba",
          300: "#dfca8a",
          400: "#caa965",
        },
        ink: {
          50: "#efe7d2",
          100: "#d9c69c",
          400: "#6b5a3f",
          600: "#3d3122",
          700: "#2a2114",
          900: "#15100a",
        },
        botanical: {
          400: "#7a8c5e",
          500: "#5a6b42",
          600: "#3f4c2d",
          700: "#2b3520",
        },
        cinnabar: {
          500: "#a13929",
          600: "#7d2a1d",
        },
      },
      fontFamily: {
        display: [
          '"Cormorant Garamond"',
          "Iowan Old Style",
          "Georgia",
          "serif",
        ],
        serif: ['"EB Garamond"', "Iowan Old Style", "Georgia", "serif"],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        hand: ['"Caveat"', "Marker Felt", "cursive"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(42, 33, 20, 0.08), 0 8px 24px -8px rgba(42, 33, 20, 0.15)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
