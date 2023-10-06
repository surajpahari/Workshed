/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        keyframes: {
            expand: {
                '0%': { width: '60px' },
                '100%': { width: '12rem' }
            },
            contract: {
                '0%': { width: '12rem' },
                '100%': { width: '60px' }
            }

        },
        extend: {
            transitionProperty: {
                'width': 'width',
                'left': 'left'
            },
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
    plugins: [
        require("daisyui"),
    ],
}

