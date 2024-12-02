import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neutral: {
          900: '#17181A',
          800: '#2A2E35',
          700: '#444A53',
          600: '#656C76',
          500: '#88929F',
          400: '#B3BCC8',
          300: '#D8E0EA',
          200: '#EBF0F7',
          100: '#FCFCFF',
        },
        primary: {
          900: '#105048',
          800: '#0E7F70',
          700: '#2F9E91',
          600: '#51C2B3',
          500: '#7ADFD2',
          400: '#98F3E7',
          300: '#B5F6EE',
          200: '#D0FAF5',
          100: '#EFFFFD',
        },
        secondary: {
          900: '#000749',
          800: '#273189',
          700: '#404BAC',
          600: '#5E69C9',
          500: '#858FE9',
          400: '#ADB5FC',
          300: '#C6CCFE',
          200: '#D3DDFE',
          100: '#F6F8FF',
        },
        success: {
          900: '#411166',
          800: '#571E83',
          700: '#732CA9',
          600: '#8D45C3',
          500: '#AD64E5',
          400: '#CD95F7',
          300: '#E2BAFF',
          100: '#FBF7FF',
        },
        danger: {
          900: '#802323',
          800: '#9C2A2A',
          700: '#A74747',
          600: '#BE6161',
          500: '#DC7F7F',
          400: '#F6A3A3',
          300: '#FFD0D0',
          200: '#FFE5E5',
          100: '#FFF4F4',
        },
        warning: {
          900: '#F38B11',
          800: '#F7A748',
          700: '#FBB868',
          600: '#FFC784',
          500: '#FFD5A4',
          400: '#FFDEB8',
          300: '#FFEBD4',
          200: '#FEF2E4',
          100: '#FFF9F2',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
        serif: ['var(--font-libre-baskerville)'],
      },
    },
  },
  plugins: [],
} satisfies Config
