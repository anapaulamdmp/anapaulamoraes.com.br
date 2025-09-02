import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { designTokens } from "./src/lib/design-system";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // your components
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['var(--font-dmSans)', ...fontFamily.serif],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        accent: "var(--accent)",
      },

      textColor: {
        soft: "var(--text-soft)",
        default: "var(--text-default)",
      },

      screens: {
        'md720': '720px',
      },

      backgroundImage: {
        /*'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',*/
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config;
