import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        cream: "#EFEAE3",
      },
      colors: {
        blackish: "#0B0600",
      },
    },
    animation: {
      preserve3d: "preserve3d 26s infinite reverse",
      preserve3d2: "preserve3d2 26s infinite reverse",
    },
    keyframes: {
      preserve3d: {
        " 0%": {
          transform: " translate3D(30px , 30px , 0)",
        },
        " 50% ": {
          transform: "translate3D(20px , 70px , 0)",
        },
        "100% ": {
          transform: "translate3D(40px , 70px , 0))"
        },
      },
      preserve3d2: {
        " 0%": {
          transform: " translate3D(40px , -30px , 0)",
        },
        " 50% ": {
          transform: "translate3D(20px , -70px , 0)",
        },
        "100% ": {
          transform: "translate3D(50px , -70px , 0))"
        },
      },
    },
  },
  plugins: []
};
export default config;
