import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@rewind-ui/core/dist/theme/styles/Input.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/Select.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/Calendar.styles.js',
  ],
  theme: {
    extend: {
      colors: {
        greyBlack:"#1F1F1F",
        paleTan:"#F7F3F0",
        brightOrange:"#EA4F1B"
        
      }
    },
  },
  plugins: [],
}
export default config
