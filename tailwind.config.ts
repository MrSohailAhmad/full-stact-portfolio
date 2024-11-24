import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "34px",
        subHeading: "20px",
        para: "18px",

        // medium
        mheading: "24px",
        msubHeading: "15px",
        mpara: "14px",
      },

      fontFamily: {
        edu: ['"Edu AU VIC WA NT Pre"', "sans-serif"],
        "edu-bold": ["Edu AU VIC WA NT Hand Pre bold", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        "lexend-bold": ["Lexend bold", "sans-serif"],
        "lexend-extrabold": ["Lexend extra bold", "sans-serif"],
      },
      backgroundImage: {
        "gradient-color":
          "linear-gradient(to bottom, #4ebcd48a,#4ebca48a,#4ebad48a, #71bbb1ad)",
      },
      colors: {
        hWhite: "#fcfcfb",
        darkGreen: "#2c6e7c",
        lightGray: "#c8cfd0",
        fullGreen: "#62b0a5",
        lightGreen: "#b1d0ca",
        darkGray: "#aaaaaa",
      },
    },
  },
  plugins: [],
} satisfies Config;
