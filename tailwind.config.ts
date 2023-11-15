import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        purpose: "#0d28f2",
        darkGrey: "#1e1927",
        grey: {
          DEFAULT: "#56535d",
          20: "hsl(220,27%,98%)",
          50: "hsl(220,27%,95%)",
          100: "hsl(220,27%,90%)",
          200: "hsl(220,24%,80%)",
          300: "hsl(220,20%,70%)",
          400: "hsl(220,13%,60%)",
          500: "hsl(220,10%,50%)",
          600: "hsl(220,10%,40%)",
          700: "hsl(220,10%,30%)",
          800: "hsl(220,10%,20%)",
          900: "hsl(220,10%,10%)",
        },
        blueGrey: "#919cae",
        softGrey: "#c8cdd6",
        lightGrey: "#eff1f5",
        white: "#ffffff",
        red: "#ff0012",
        green: "#20c997",
        turquoise: "#36bbc3",
        softBlue: "#3596fe",
        purple: "#8e57ff",
        yellow: "#ffc107",
        orange: "#ff7223",
        coral: "#ff5a5a",
        brown: "#b98131",
      },
    },
  },
  plugins: [],
} satisfies Config;
