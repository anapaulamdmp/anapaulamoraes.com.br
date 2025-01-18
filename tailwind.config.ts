import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'],
        dmSerifText: ['"DM Serif Text"', 'serif'],
        frankRuhlLibre: ['"Frank Ruhl Libre"', 'serif'],
        caladea: ['"Caladea"', 'serif'],
        shrikhand: ['Shrikhand', 'cursive'],
      },

      screens: {
        'md720': '720px', // Adding custom breakpoint
      },

      backgroundImage: {
        /*'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',*/
      },
    },
  },
  plugins: [],
}
export default config
