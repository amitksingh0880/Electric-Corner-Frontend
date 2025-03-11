// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./src/**/*.{js,ts,jsx,tsx,html}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideAndRotate: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)', opacity: 0 },
          '100%': { transform: 'translateX(0) rotate(360deg)', opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(450%)' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 1s ease-out',
        'slide-rotate': 'slideAndRotate 1s ease-out',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};

  