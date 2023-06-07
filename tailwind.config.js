/** @type {import('tailwindcss').Config} */

export default {
    content: ["./*.html", "./src/**/*.html"],
    theme: {
        extend: {
            boxShadow: {
                "shadow-1": "0px 24px 40px rgba(121, 127, 136, 0.05)",
                "shadow-2": "0px 14px 24px 10px #7E8AAB1C",
            },
            colors: {
                "light-purple": "#626E94",
                "light-blue": "#00ADB5",
                pink1: "#E11D48",
                yellow1: "#FF9518",
                blue1: "#050F2C",
                grey1: "#f5f8fc",
                grey2: "#DEE2EE",
                grey3: "#D2D7E4",
                grey4: "#BDC5DD",
                grey5: "#7E8AAB",
            },
            spacing: {
                4.5: "1.125rem",
                5.5: "1.313rem",
            },
        },
    },
    plugins: [],
};
