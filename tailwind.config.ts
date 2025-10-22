import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 1px 4px rgba(0,0,0,0.16)",
      },
      colors: {
        redTheme: "#8B0000",
        blueTheme: "#0D3B66",
      },
    },
  },
  plugins: [],
} satisfies Config;
