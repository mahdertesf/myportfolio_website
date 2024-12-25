/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light':'#c0c0c0',
        'glow':'#00ffff',
        'bg-dark':'#0a0a0a',
        'text-dark':'#e1e1e1',
        'primary':'#00adb5'
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
       keyframes: {
        glowBorder: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
          '100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
        },
         fadeIn:{
            '0%':{opacity: '0', transform:'translateY(20px)'},
            '100%':{opacity: '1',transform:'translateY(0px)'},
          },
         slideInLeft:{
            '0%':{opacity: '0', transform:'translateX(-20px)'},
            '100%':{opacity: '1',transform:'translateX(0px)'},
          },
           slideInRight:{
            '0%':{opacity: '0', transform:'translateX(20px)'},
            '100%':{opacity: '1',transform:'translateX(0px)'},
          },
      },
       animation: {
         glowBorder: 'glowBorder 2s ease-in-out infinite',
         fadeIn: 'fadeIn 1s ease-in-out',
         slideInLeft: 'slideInLeft 1s ease-in-out',
         slideInRight: 'slideInRight 1s ease-in-out'

       }
    },
  },
  plugins: [],
}