import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "780px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "back-blue": "#182138",
        "regal-green": "#475569",
        "pr-gray": "#CBD5E1",
        "pr-coffe": "#F2EBE3",
        "pr-darkblue": "#0D192B",
        "pr-lightpur": "#D6E1FF",
        "pr-veryblue": "#090B1A",
        "pr-lightgray": "#ECF2F8",
        "pr-darkgreen": "#24A224",
        "pr-graygray": "#F9F9F9",
        "pr-lightgreen": "#F5FCF4",
        "pr-dark-brown": "#9A2D8A",
        "pr-asmani": "#3DBEFF",
        "pr-darkasmani": "#6495ED",
        "pr-darkgray": "#3A3939",
        "pr-pink": "#FFD4C4",
        "pr-green": "#4ADE80",
        "pr-vaygray": "#64748B",
        "pr-royalblue": "#4225BA",
        "pr-darkpurple": "#281154",
        "pr-desgray": "#F5F5F5",

      },
    },
  },
  plugins: [],
}
export default config
