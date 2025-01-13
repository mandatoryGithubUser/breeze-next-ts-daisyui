import daisyui from 'daisyui'
import forms from '@tailwindcss/forms'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {},
    daisyui: {
        themes: ['light', 'dark'],
    },
    plugins: [forms, daisyui],
}
