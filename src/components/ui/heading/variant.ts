import { cva, VariantProps } from 'class-variance-authority';

export const headingVariant = cva(
  'scroll-m-20 font-general-sans tracking-tight leading-[125%]',
  {
    variants: {
      size: {
        default: 'text-md font-medium',
        'heading-1': 'text-5xl font-semibold',
        'heading-2': 'text-4xl font-semibold',
        'heading-3': 'text-3xl font-semibold',
        'heading-4': 'text-2xl font-medium',
        'heading-5': 'text-xl font-medium',
        'heading-6': 'text-lg font-medium',
      },
      textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'default',
      textAlign: 'left',
    },
  }
);

export type HeadingVariantProps = VariantProps<typeof headingVariant>;
