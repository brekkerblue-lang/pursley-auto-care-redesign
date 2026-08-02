/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly (Python/Pillow pixel-picker) from the shop's own
        // real logo graphic -- a turbocharger mark with a teal-to-blue
        // gradient on a pure black background, stamped "2024" (the year
        // this shop rebranded from Ayers Automotive to Pursley Auto Care).
        // See README for exact sample points/coordinates.
        turbo: {
          50: '#F2F9FE',
          100: '#E3F0FB',
          200: '#C7E1F6',
          300: '#A8D0F0',
          400: '#7FB8E8',
          500: '#5FA2DE', // sampled mid-blue from the turbo pipe
          600: '#3F7FBE',
          700: '#2C5C91',
          800: '#4758A1', // sampled indigo from the lower turbo shadow
        },
        teal: {
          50: '#F0FAFA',
          100: '#E1F5F5',
          300: '#A8DEDE',
          400: '#7FCBCB',
          500: '#57B7B8', // sampled teal from the top of the turbo pipe
          600: '#3E9495',
          700: '#2C6F70',
          800: '#1F5152',
        },
        void: {
          DEFAULT: '#0A0A0C', // sampled pure black from the logo background
          800: '#131316',
          900: '#060607',
        },
        cream: {
          DEFAULT: '#F7F9FB',
          100: '#EDF1F5',
        },
      },
      fontFamily: {
        display: ['"Rajdhani"', '"Archivo Black"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
