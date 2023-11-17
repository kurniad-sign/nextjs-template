import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariant = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'disabled:cursor-not-allowed',
    'rounded-md',
    'text-sm',
    'font-medium',
    'text-body',
    'transition-all',
    'outline-none',
    'shadow-sm',
    'data-[pressed=true]:scale-[0.95]',
    'disabled:bg-surface-disabled',
    'disabled:text-shape-disabled',
    'data-[focus-visible=true]:ring-2',
    'data-[focus-visible=true]:ring-[#0F6FC9]/30',
  ],
  {
    variants: {
      size: {
        default: 'min-w-12 min-h-8 px-3 py-2',
        small: 'h-8 px-2 text-xs',
        large: 'h-11 px-4 text-base',
      },
      variant: {
        primary: [
          'bg-shape-primary',
          'text-component-100',
          'data-[hovered=true]:bg-shape-primary-hover',
        ],
        'primary-subtle': [
          'bg-surface-primary',
          'text-body-primary',
          'data-[hovered=true]:bg-surface-primary-hover',
          'data-[hovered=true]:text-body-primary-hover',
        ],
        secondary: [
          'bg-component-100',
          'text-body-tertiary',
          'border',
          'border-border',
          'data-[hovered=true]:bg-surface-hover',
          'data-[hovered=true]:border-border-hover',
        ],
        ghost: [
          'bg-component-100/30',
          'data-[hovered=true]:bg-surface-hover',
          'text-body-tertiary',
        ],
        danger: [
          'bg-shape-danger',
          'text-component-100',
          'data-[hovered=true]:bg-shape-danger-hover',
          'data-[focus-visible=true]:ring-shape-danger/30',
        ],
        'danger-subtle': [
          'bg-surface-danger',
          'text-body-danger',
          'data-[hovered=true]:bg-surface-danger-hover',
          'data-[hovered=true]:text-body-danger-hover',
          'data-[focus-visible=true]:ring-shape-danger/30',
        ],
      },
      fullWidth: {
        true: 'w-full',
      },
      circled: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'primary',
      circled: false,
      fullWidth: false,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
