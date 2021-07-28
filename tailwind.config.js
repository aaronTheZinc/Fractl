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
        },
      },
      borderRadius: {
        px50: "50px"
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}