/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        colors: {
            brand: {
                50: "#fcf8ff",
                100: "#7553eb1c",
                200: "#e59285ad",
                500: "#e59285e3",
                600: "#e59285",
                700: "#e46956",
                800: "#4c1c95",
                900: "#3c2b7d",
            },
            grey: {
                0: "#fff",
                20: "#f7f7f7",
                50: "#f5f5f5",
                100: "#d9d9d9",
                200: "#d4d4d4",
                300: "#a1a1a1",
                400: "#737373",
                500: "#41413f",
                600: "#262625",
                700: "#121212",
            },
        },
        fontFamily: {
            sans: ["poppins", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
