import type { Config } from "tailwindcss";

const config: Config = {
  mode : "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "sans":"Noto Sans SC, sans-serif",
        "serif":"Bitter, serif"
      },
      colors: {
        primary:"#181D19",
    },
  },
  plugins: [],
}
};
export default config;
