module.exports = {
  purge: [],
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: {
          offWhite: "#FBFBFB"
        },
        green: {
          positiveGreen: "#32CE67"
        },
        red: {
          negativeRed: "#CE3232"
        }
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}