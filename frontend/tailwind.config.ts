import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      fontFamily: { sans: (string | { fontFeatureSettings: string })[] };
      colors: {
        secondary: { dark: string; DEFAULT: string };
        "neutral-dark": { dark: string; DEFAULT: string };
        "neutral-light": { dark: string; DEFAULT: string };
        accent: { dark: string; DEFAULT: string };
        primary: { dark: string; DEFAULT: string }
      }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
      colors: {
        primary: {
          DEFAULT: '#4B49AC', // Modo claro
          dark: '#4B49AC',    // Modo oscuro
        },
        secondary: {
          DEFAULT: '#98BDFF', // Modo claro
          dark: '#98BDFF',    // Modo oscuro
        },
        accent: {
          DEFAULT: '#7DA0FA', // Modo claro
          dark: '#7DA0FA',    // Modo oscuro
        },
        'neutral-light': {
          DEFAULT: '#7978E9', // Modo claro
          dark: '#7978E9',    // Modo oscuro
        },
        'neutral-dark': {
          DEFAULT: '#F3797E', // Modo claro
          dark: '#F3797E',    // Modo oscuro
        },
      },
    },
  },
  plugins: [],
};
export default config;
