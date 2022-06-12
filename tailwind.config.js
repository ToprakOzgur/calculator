const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(222, 26%, 31%)",
        "screen-bg": "hsl(224, 36%, 15%)",
        "keyboard-bg": " hsl(223, 31%, 20%)",
        "key-bg": "  hsl(225, 21%, 49%)",
        "key-bg-lite": "hsl(30, 25%, 89%)",
      },
    },
  },

  plugins: [],
};
