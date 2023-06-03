/** @type {import('tailwindcss').Config} */

export default {
    content: ["./*.html", "./src/**/*.html"],
    theme: {
        extend: {
            boxShadow: {
                "shadow-1": "0px 24px 40px rgba(121, 127, 136, 0.05)",
            },
        },
    },
    plugins: [],
};
