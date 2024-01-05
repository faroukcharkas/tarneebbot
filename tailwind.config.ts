import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-[#BE0006]',
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'border-blue-700',
    'border-red-700',
    'border-green-700',
    'border-yellow-700',
    'rotate-90',
    'rotate-180',
    '-rotate-90]'
  ],
  theme: {
  },
  plugins: [],
}

export default config
