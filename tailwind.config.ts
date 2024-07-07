import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `rgba(var(--primary), <alpha-value>)`,
        secondary: `rgba(var(--secondary), <alpha-value>)`,
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.8rem" }],
        "4.5xl": ["2.5rem", { lineHeight: "3rem" }],
      },
      backgroundImage: {
        "gradient-picture": "linear-gradient(24deg, var(--tw-gradient-stops))",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
};

export default config;
