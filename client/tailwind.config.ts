import type { Config } from "tailwindcss";

const Config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "blue-slate": "#0e7490",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default Config;
