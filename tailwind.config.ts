import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#213555',
        'primary-medium': '#3E5879',
        'primary-darker': '#0c1b31',
        'accent-orange': '#e48038',
        'light-cream': '#F5EFE7',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#1DA851',
        primary: {
          50: '#f5efe7',
          100: '#F5EFE7',
          200: '#e8dcc9',
          300: '#d8c4b6',
          400: '#e48038',
          500: '#e48038',
          600: '#d16f2a',
          700: '#b85e1c',
          800: '#9f4d0e',
          900: '#863c00',
        },
        secondary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#64819a',
          600: '#4a6a84',
          700: '#3e5879',
          800: '#32455a',
          900: '#213555',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

