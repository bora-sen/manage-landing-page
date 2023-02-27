/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      colors:{
        'primary-red':'hsl(12, 88%, 59%)',
        'primary-blue':'hsl(228, 39%, 23%)',
        'dark-grey-blue':'hsl(227, 12%, 61%)',
        'darker-blue':'hsl(233, 12%, 13%)',
        'pale-red':'hsl(13, 100%, 96%)',
        'grey-light':'hsl(0, 0%, 98%)',
      },
      fontFamily:{
        'vietnam-pro': ['Be Vietnam Pro', 'sans-serif']
      },
      backgroundImage:{
        'background-pattern':"url('/src/Sections/Layout/Assets/bg-tablet-pattern.svg')"
      }
    },
  },
  plugins: [],
}
