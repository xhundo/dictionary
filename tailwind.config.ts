import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 5px 30px 0px rgba(0, 0, 0, 0.10)'
      },
      spacing: {
        '58': '58px',
        '351': '351px',
        '51': '51px'
      },
      colors: {
        'dark-grayish': '#2D2D2D',
        pipe: '#E9E9E9',
        purple: '#A445ED',
        grayish: '#757575'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['Inconsolata', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
