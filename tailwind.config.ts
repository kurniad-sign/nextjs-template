import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        page: 'hsl(var(--background))',
        component: {
          100: 'hsl(var(--component-background-1))',
          200: 'hsl(var(--component-background-2))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          hover: 'hsl(var(--surface-hover))',
          disabled: 'hsl(var(--surface-disabled))',
          primary: {
            DEFAULT: 'hsl(var(--surface-primary))',
            hover: 'hsl(var(--surface-primary-hover))',
          },
          success: {
            DEFAULT: 'hsl(var(--surface-success))',
            hover: 'hsl(var(--surface-success-hover))',
          },
          warning: {
            DEFAULT: 'hsl(var(--surface-warning))',
            hover: 'hsl(var(--surface-warning-hover))',
          },
          danger: {
            DEFAULT: 'hsl(var(--surface-danger))',
            hover: 'hsl(var(--surface-danger-hover))',
          },
        },
        body: {
          DEFAULT: 'hsl(var(--text))',
          disabled: 'hsl(var(--text-disabled))',
          secondary: {
            DEFAULT: 'hsl(var(--text-secondary))',
            disabled: 'hsl(var(--text-secondary-disabled))',
          },
          tertiary: {
            DEFAULT: 'hsl(var(--text-tertiary))',
            disabled: 'hsl(var(--text-tertiary-disabled))',
          },
          primary: {
            DEFAULT: 'hsl(var(--text-primary))',
            hover: 'hsl(var(--text-primary-hover))',
            active: 'hsl(var(--text-primary-active))',
          },
          success: {
            DEFAULT: 'hsl(var(--text-success))',
            hover: 'hsl(var(--text-success-hover))',
            active: 'hsl(var(--text-success-active))',
          },
          warning: {
            DEFAULT: 'hsl(var(--text-warning))',
            hover: 'hsl(var(--text-warning-hover))',
            active: 'hsl(var(--text-warning-active))',
          },
          danger: {
            DEFAULT: 'hsl(var(--text-danger))',
            hover: 'hsl(var(--text-danger-hover))',
            active: 'hsl(var(--text-danger-active))',
          },
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
          hover: 'hsl(var(--border-hover))',
          disabled: 'hsl(var(--border-disabled))',
          primary: {
            DEFAULT: 'hsl(var(--border-primary))',
            hover: 'hsl(var(--border-primary-hover))',
          },
          success: {
            DEFAULT: 'hsl(var(--border-success))',
            hover: 'hsl(var(--border-success-hover))',
          },
          warning: {
            DEFAULT: 'hsl(var(--border-warning))',
            hover: 'hsl(var(--border-warning-hover))',
          },
          danger: {
            DEFAULT: 'hsl(var(--border-danger))',
            hover: 'hsl(var(--border-danger-hover))',
          },
        },
        shape: {
          DEFAULT: 'hsl(var(--shape))',
          hover: 'hsl(var--shape-hover)',
          active: 'hsl(var--shape-active)',
          disabled: 'hsl(var(--shape-disabled))',
          secondary: {
            DEFAULT: 'hsl(var(--shape-secondary))',
            hover: 'hsl(var(--shape-secondary-hover))',
          },
          primary: {
            DEFAULT: 'hsl(var(--shape-primary))',
            hover: 'hsl(var(--shape-primary-hover))',
            active: 'hsl(var(--shape-primary-active))',
          },
          success: {
            DEFAULT: 'hsl(var(--shape-success))',
            hover: 'hsl(var(--shape-success-hover))',
            active: 'hsl(var(--shape-success-active))',
          },
          warning: {
            DEFAULT: 'hsl(var(--shape-warning))',
            hover: 'hsl(var(--shape-warning-hover))',
            active: 'hsl(var(--shape-warning-active))',
          },
          danger: {
            DEFAULT: 'hsl(var(--shape-danger))',
            hover: 'hsl(var(--shape-danger-hover))',
            active: 'hsl(var(--shape-danger-active))',
          },
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'general-sans': 'var(--font-general-sans)',
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
