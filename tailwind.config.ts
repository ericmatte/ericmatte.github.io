import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `rgba(var(--primary), <alpha-value>)`,
        secondary: `rgba(var(--secondary), <alpha-value>)`,
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
};

export default config;
