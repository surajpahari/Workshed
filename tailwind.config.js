/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            width: {
                '288': '72rem',
                '224': '56rem',
            },
            colors: {
                purple: '#1e266d',
                icons: '#343a40'
            }

        },
    },
    plugins: [],
}

