import type { Config } from "tailwindcss";

/**
 * Palette values are lifted verbatim from the compiled stylesheet of the
 * original build, so utility output matches the source page byte for byte.
 * `emerald` and `gold` are intentionally re-mapped to the brand violet/pink —
 * that remap exists in the original theme and the markup depends on it.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f9",
          100: "#eeeef2",
          200: "#dcdce4",
          300: "#c9c9d6",
          400: "#9a9aae",
          500: "#6b6b82",
          600: "#54546a",
          700: "#3d3d52",
          800: "#2a2a3a",
          900: "#1a1a26",
          950: "#0b0b12",
        },
        sage: {
          50: "#f6f4ff",
          100: "#ede8ff",
          200: "#ded5ff",
          300: "#c9baff",
          400: "#ab94fb",
          500: "#8f74f3",
        },
        emerald: {
          50: "#f7f5ff",
          100: "#efeaff",
          200: "#ded5fd",
          300: "#c2aef9",
          400: "#9c81f5",
          500: "#7a58ea",
          600: "#5f3ed1",
          700: "#4a2fa8",
          800: "#3a2584",
          900: "#2d1d66",
          950: "#1c1446",
        },
        gold: {
          50: "#fdf2f8",
          100: "#fbe1ec",
          200: "#f9c4dc",
          300: "#f89ac6",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#b01b61",
          800: "#8f1750",
          900: "#771745",
        },
      },
      boxShadow: {
        pharma: "0 10px 30px -12px rgba(80, 40, 160, 0.15)",
        luxe: "0 22px 60px -24px rgba(80, 40, 160, 0.4)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
