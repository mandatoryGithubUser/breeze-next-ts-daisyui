import daisyui from 'daisyui'
import forms from '@tailwindcss/forms'
import typeography from '@tailwindcss/typography'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    daisyui: {
        themes: ['light', 'dark'],
    },
    plugins: [forms, typeography, daisyui],
}
