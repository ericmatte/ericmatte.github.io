module.exports = {
  theme: {
    // Sync with _variables.scss
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#ffffff",
      greenery: {
        "default": "#0f6973",
        "50": "#ebf5f2",
        "100": "#d9e4e3",
        "200": "#b8d0d1",
        "300": "#80aeb1",
        "400": "#488c92",
        "600": "#0f555f",
        "700": "#0a414b",
        "800": "#05373c"
      },
      peachy: {
        "default": "#f5a08c",
        "50": "#faebe6",
        "100": "#f8e5df",
        "200": "#fad7d2",
        "300": "#f5beaf",
        "400": "#f5a591",
        "600": "#ec917d",
        "700": "#e1826e",
        "800": "#d7735f"
      }
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px"
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: [
        "Constantia",
        "Lucida Bright",
        "Lucidabright",
        "Lucida Serif",
        "Lucida",
        "DejaVu Serif",
        "Bitstream Vera Serif",
        "Liberation Serif",
        "Georgia",
        "serif"
      ],
      mono: ["Roboto", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },

    fontSize: {
      "root": "18px", // 18px (use px to avoid default browser value since it breaks a lot in responsive)
      "3xs": ".556rem", // 10px
      "2xs": ".667rem", // 12px
      "xs": ".778rem", // 14px
      "sm": ".889rem", // 16px
      "md": ".944rem", // 17px
      "base": "1rem", // 18px
      "lg": "1.111rem", // 20px
      "xl": "1.333rem", // 24px
      "2xl": "1.778rem", // 32px
      "3xl": "2rem", // 36px
      "4xl": "2.222rem", // 40px
      "5xl": "2.667rem", // 48px
      "6xl": "3.333rem", // 60px
      "7xl": "4.444rem" // 80px
    },

    lineHeight: {
      overlap: 0.85,
      inherit: "inherit",
      none: "1",
      tight: "1.2",
      snug: "1.3",
      normal: "1.5",
      relaxed: "1.625",
      loose: "1.7"
    },

    inset: {
      "0": 0,
      "auto": "auto",
      "1/2": "50%"
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },

    textColor: theme => theme("colors"),

    backgroundColor: theme => theme("colors"),

    borderWidth: {
      "default": "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "12": "12px",
      "16": "16px"
    },

    borderColor: theme => ({
      default: theme("colors.gray"),
      ...theme("colors")
    }),

    borderRadius: {
      "none": "0",
      "sm": ".125rem",
      "default": ".25rem",
      "md": ".4rem",
      "lg": ".8rem",
      "xl": "1.25rem",
      "2xl": "2.5rem",
      "3xl": "4rem",
      "full": "9999px"
    },

    spacing: {
      "auto": "auto",
      "px": "1px",
      "0": "0",
      "0.1": "0.1rem",
      "1": "0.2778rem",
      "2": "0.5rem",
      "3": "0.7778rem",
      "4": "1rem",
      "5": "1.278rem",
      "6": "1.5rem",
      "8": "2rem",
      "10": "2.5rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "26": "6.5rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
      "100": "25rem",
      "full": "100%"
    },

    width: theme => ({
      ...theme("dimensions"),
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "2/6": "33.33333%",
      "3/6": "50%",
      "4/6": "66.66667%",
      "5/6": "83.33333%",
      "1/12": "8.33333%",
      "2/12": "16.66667%",
      "3/12": "25%",
      "4/12": "33.33333%",
      "5/12": "41.66667%",
      "6/12": "50%",
      "7/12": "58.33333%",
      "8/12": "66.66667%",
      "9/12": "75%",
      "10/12": "83.33333%",
      "11/12": "91.66667%",
      "screen": "100vw"
    }),

    height: theme => ({
      ...theme("dimensions"),
      screen: "100vh"
    }),

    dimensions: {
      "auto": "auto",
      "px": "1px",
      "0": "0",
      "0.5": "0.5rem",
      "1": "1rem",
      "2": "2rem",
      "2.5": "2.5rem",
      "3": "3rem",
      "3.5": "3.5rem",
      "4": "4rem",
      "5": "5rem",
      "6": "6rem",
      "7": "7rem",
      "8": "8rem",
      "9": "9rem",
      "10": "10rem",
      "11": "11rem",
      "12": "12rem",
      "13": "13rem",
      "14": "14rem",
      "16": "16rem",
      "18": "18rem",
      "20": "20rem",
      "22": "22rem",
      "25": "25rem",
      "30": "30rem",
      "35": "35rem",
      "40": "40rem",
      "50": "50rem",
      "60": "60rem",
      "100": "100rem",
      "full": "100%"
    },

    minWidth: theme => theme("dimensions"),

    minHeight: theme => ({
      ...theme("dimensions"),
      ...theme("screens")
    }),

    maxWidth: theme => ({
      ...theme("dimensions"),
      ...theme("screens")
    }),

    padding: theme => ({
      ...theme("spacing")
    }),

    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),

    boxShadow: {
      "default": "0 2px 4px 0 rgba(0,0,0,0.10)",
      "md": "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
      "lg": "0 10px 18px 0 rgba(0,0,0,0.11), 0 6px 10px 0 rgba(0,0,0,0.08)",
      "xl": "0 30px 45px 0 rgba(0,0,0,0.10), 0 10px 30px 0 rgba(0,0,0,0.08)",
      "2xl": "0 30px 60px -12px rgba(0,0,0,0.15), 0 18px 36px -18px rgba(0,0,0,.3), 0 -12px 36px -8px rgba(0,0,0,.025)",
      "inner": "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      "outline": "0 0 0 3px rgba(52,144,220,0.5)",
      "none": "none"
    }
  },
  variants: {},
  plugins: []
};
