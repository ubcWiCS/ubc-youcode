/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
         montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'teal': '#4ECDC4',
        'dark-green': '#1A535C',
        'light-green': '#E9FFE9',
       
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '1080px',
        // => @media (min-width: 992px) { ... }
      
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}
