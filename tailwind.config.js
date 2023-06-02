/** @type {import('tailwindcss').Config} */
// import ProfilePhotoIcon from "../../../public/ProfilePhotoIcon.png";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        transparent: "transparent",
        white: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        // bg: ProfilePhotoIcon,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dgd: "-webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9)",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      satoshi: ["Satoshi"],
    },
  },
  plugins: [],
};
