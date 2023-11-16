import { cva, VariantProps } from 'class-variance-authority';

export const textVariant = cva('leading-normal', {
  variants: {
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-inherit',
      primary: 'text-body-primary',
      success: 'text-body-success',
      warning: 'text-body-warning',
      danger: 'text-body-danger',
    },
    size: {
      small: 'text-xs',
      base: 'text-base',
      large: 'text-xl',
    },
    uppercased: {
      true: 'uppercase',
    },
    strikeThrough: {
      true: 'line-through',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    color: 'default',
    italic: false,
    size: 'base',
    strikeThrough: false,
    uppercased: false,
    textAlign: 'left',
    weight: 'normal',
  },
});

export type TextVariantProps = VariantProps<typeof textVariant>;
