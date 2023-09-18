import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 5px 30px 0px rgba(0, 0, 0, 0.10)',
        'custom-2': '0px 5px 30px 0px #A445ED'
      },
      spacing: {
        '58': '58px',
        '59': '59px',
        '351': '351px',
        '51': '51px'
      },
      colors: {
        'dark-grayish': '#2D2D2D',
        pipe: '#E9E9E9',
        purple: '#A445ED',
        grayish: '#757575',
        ccc: '#ccc',
        liteblk: '#050505',
        lite: '#F4F4F4',
        liteblk2: '#1F1F1F',
        error: '#FF5252',
        purp: 'rgba(164, 69, 237, 1)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Inconsolata', 'monospace']
      },
      transitionDuration: {
        '4': '4ms'
      },
      borderRadius: {
        mid: '34px',
        '1/2': '50%'
      },
      width: {
        '75': '75px'
      },
      height: {
        '75': '75px'
      }
    }
  },
  plugins: []
} satisfies Config;
