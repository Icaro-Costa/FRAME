/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF8B3D', // Softer Orange
                secondary: '#4A90E2', // Softer Blue
                dark: '#2D2D2D', // Softer Black
                light: '#FDFBF7', // Cream/Pastel background
                surface: '#F5F2EB', // Slightly darker for cards/sections
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
