// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
//   plugins: [require("daisyui")],
//   darkTheme: "dark",
//   darkMode: ["selector", "[data-theme='dark']"],
//   // DaisyUI theme colors
//   daisyui: {
//     themes: [
//       {
//         light: {
//           primary: "#93BBFB",
//           "primary-content": "#212638",
//           secondary: "#DAE8FF",
//           "secondary-content": "#212638",
//           accent: "#93BBFB",
//           "accent-content": "#212638",
//           neutral: "#212638",
//           "neutral-content": "#ffffff",
//           "base-100": "#ffffff",
//           "base-200": "#f4f8ff",
//           "base-300": "#DAE8FF",
//           "base-content": "#212638",
//           info: "#93BBFB",
//           success: "#34EEB6",
//           warning: "#FFCF72",
//           error: "#FF8863",

//           "--rounded-btn": "9999rem",

//           ".tooltip": {
//             "--tooltip-tail": "6px",
//           },
//           ".link": {
//             textUnderlineOffset: "2px",
//           },
//           ".link:hover": {
//             opacity: "80%",
//           },
//         },
//       },
//       {
//         dark: {
//           primary: "#212638",
//           "primary-content": "#F9FBFF",
//           secondary: "#323f61",
//           "secondary-content": "#F9FBFF",
//           accent: "#4969A6",
//           "accent-content": "#F9FBFF",
//           neutral: "#F9FBFF",
//           "neutral-content": "#385183",
//           "base-100": "#385183",
//           "base-200": "#2A3655",
//           "base-300": "#212638",
//           "base-content": "#F9FBFF",
//           info: "#385183",
//           success: "#34EEB6",
//           warning: "#FFCF72",
//           error: "#FF8863",

//           "--rounded-btn": "9999rem",

//           ".tooltip": {
//             "--tooltip-tail": "6px",
//             "--tooltip-color": "oklch(var(--p))",
//           },
//           ".link": {
//             textUnderlineOffset: "2px",
//           },
//           ".link:hover": {
//             opacity: "80%",
//           },
//         },
//       },
//     ],
//   },
//   theme: {
//     extend: {
//       boxShadow: {
//         center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
//       },
//       animation: {
//         "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//       },
//     },
//   },
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f7fcff",
          "200": "#8d9091",
          "300": "#0d0d0d",
          "400": "rgba(16, 28, 65, 0.03)",
          "500": "rgba(4, 4, 4, 0.4)",
          "600": "rgba(13, 13, 13, 0.6)",
          "700": "rgba(4, 4, 4, 0.6)",
        },
        "white-base": "#fff",
        "base-blue": "#3a96ad",
        ntblack: "#040404",
        darkslategray: {
          "100": "#383838",
          "200": "#333",
          "300": "#292d32",
          "400": "rgba(53, 53, 54, 0.35)",
          "500": "rgba(51, 51, 51, 0.09)",
        },
        skyblue: "#54b0c7",
        black: "#000",
        whitesmoke: {
          "100": "#efefef",
          "200": "#e9e9e9",
        },
        dimgray: "rgba(87, 87, 87, 0.03)",
        darkgray: "#b3b3b3",
        silver: "#c9c9c9",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "6xs": "7px",
        "42xl": "61px",
        "15xl": "34px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
