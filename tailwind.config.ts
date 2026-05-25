import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0A0F1E',
        bg: '#F8F6F1',
        'bg-soft': '#F2EFE8',
        card: '#FFFFFF',
        navy: '#1B2A4E',
        ink: '#0F172A',
        'ink-soft': '#334155',
        'ink-mute': '#64748B',
        line: '#E5E0D6',
        'line-soft': '#EFEBE0',
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#0D3B99',
        },
      },
      borderRadius: {
        sm: '12px',
        DEFAULT: '20px',
        lg: '28px',
        xl: '40px',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(37,99,235,0.35)',
        'glow-blue-lg': '0 0 80px rgba(37,99,235,0.25)',
        'card': '0 2px 20px rgba(15,23,42,0.06)',
        'card-hover': '0 8px 40px rgba(15,23,42,0.12)',
        'nav': '0 1px 0 rgba(229,224,214,0.8)',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.4, 0.64, 1)',
      },
      spacing: {
        'nav': '76px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
