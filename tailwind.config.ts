import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libreBaskerville: ['var(--font-libre-baskerville)', ...fontFamily.serif],
        dmSerifText: ['var(--font-dm-serif-text)', ...fontFamily.serif],
        frankRuhlLibre: ['var(--font-frank-ruhl-libre)', ...fontFamily.serif],
        caladea: ['var(--font-caladea)', ...fontFamily.serif],
        dmSans: ['var(--font-dmSans)', ...fontFamily.serif],
        shrikhand: ['var(--font-shrikhand)', ...fontFamily.sans], // Shrikhand é mais decorativa, mas pode ser ajustada
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
