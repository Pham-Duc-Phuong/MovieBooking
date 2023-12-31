/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          fontSize: {
              8: '8px',
              10: '10px',
              12: '12px',
              14: '14px',
              16: '16px',
              20: '20px',
          },
          fontWeight: {
              300: 300,
              400: 400,
              500: 500,
              600: 600,
              700: 700,
              800: 800,
              900: 900,
          },
          spacing: {
              2: '2px',
              3: '3px',
              4: '4px',
              6: '6px',
              8: '8px',
              10: '10px',
              12: '12px',
              14: '14px',
              16: '16px',
              18: '18px',
              20: '20px',
              22: '22px',
              24: '24px',
          },
          borderRadius: {
              6: '6px',
              10: '10px',
              16: '16px',
          },
          gridTemplateColumns: {
            'detailMovie': '400px auto',
            '16': 'repeat(16, minmax(0, 1fr))',
            'booking': 'auto 500px'
          },
          screens:{
            'phone': '280px'
          }
      },
  },
  plugins: [],
}
