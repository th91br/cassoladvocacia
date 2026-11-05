/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1324',
          900: '#0E1A32',
          850: '#132342',
          800: '#182C52',
          700: '#213A6B',
        },
        cassol: {
          blue: '#1E3668',
          dark: '#14264A',
          light: '#325296',
          subtle: '#E5EBF5',
        },
        paper: {
          canvas: '#F5EFE4',
          surface: '#FCFBF8',
          card: '#EFE8DC',
          border: '#DFD5C4',
        },
        graphite: {
          DEFAULT: '#141821',
          muted: '#3E4656',
          subtle: '#687285',
        },
        brass: {
          DEFAULT: '#B69246',
          dark: '#967530',
          light: '#C8A96B',
          subtle: '#F6F0E2',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(10, 19, 36, 0.05), 0 1px 3px 0 rgba(10, 19, 36, 0.03)',
        'card': '0 10px 30px -6px rgba(10, 19, 36, 0.07), 0 4px 12px -2px rgba(182, 146, 70, 0.06)',
        'elevation': '0 24px 48px -12px rgba(10, 19, 36, 0.14)',
        'bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'wider-tag': '0.16em',
      }
    },
  },
  plugins: [],
}
