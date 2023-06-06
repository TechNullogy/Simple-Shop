/** @type {import('tailwindcss').Config} */

export default {
    content: ["./*.html", "./src/**/*.html"],
    theme: {
        extend: {
            boxShadow: {
                "shadow-1": "0px 24px 40px rgba(121, 127, 136, 0.05)",
                "shadow-2": "0px 14px 24px 10px #7E8AAB1C",
            },
        },
    },
    plugins: [],
};
