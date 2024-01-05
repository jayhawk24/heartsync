import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            fontFamily: {
                sans: ["var(--font-gilroy)"]
            },
            colors: {
                primary: {
                    DEFAULT: "#e25b51",
                    "50": "#fdf4f3",
                    "100": "#fce6e4",
                    "200": "#fad1ce",
                    "300": "#f5b1ac",
                    "400": "#eb6f66",
                    "500": "#e25b51",
                    "600": "#ce3e34",
                    "700": "#ad3128",
                    "800": "#8f2c25",
                    "900": "#782a24",
                    "950": "#41110e"
                }
            }
        }
    },
    plugins: []
};
export default config;
