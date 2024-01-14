/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      text: "18px",
    },
    borderRadius: {
      default: "5px",
      caption: "9px",
      "tag-button": "16px",
      "chat-text-field": "20px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],

      lg: ["20px", "28px"],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    },
    colors: {
      primary: "#1d2745",
      secondary: "#1de5d4",
      tertiary: "#f52c50",
      white: "#ffffff",
      "dark-inactive": "rgba(255, 255, 255, 0.1)",
      mono100: "#f1f1f1",
      mono200: "#bebebe",
      mono300: "#d6d7d9",
      error: "#d01e1e",
      social: "#395997",
    },
    extend: {},
  },
  plugins: [],
};
