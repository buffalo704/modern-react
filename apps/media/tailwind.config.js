const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes:{
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation:{
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};
