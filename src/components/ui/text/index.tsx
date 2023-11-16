import { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';

import { cn } from '@/src/lib/utils';

import { DistributiveOmit, fixedForwardRef } from '../../common/types';
import { textVariant, TextVariantProps } from './variant';

type TextAs = 'p' | 'div' | 'span';
enum ELEMENT_OPTIONS {
  PARAGRAPH = 'p',
  SPAN = 'span',
  DIV = 'div',
}

const TextComponent = <TAs extends TextAs>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'p' : TAs>,
    'as'
  > &
    TextVariantProps,
  ref: ForwardedRef<any>
) => {
  const {
    as: Component = ELEMENT_OPTIONS.PARAGRAPH,
    color = 'default',
    children,
    className,
    italic = false,
    size = 'base',
    strikeThrough = false,
    textAlign = 'left',
    uppercased = false,
    weight = 'normal',
    ...restProps
  } = props;

  return (
    <Component
      className={cn(
        textVariant({
          color,
          italic,
          size,
          strikeThrough,
          textAlign,
          uppercased,
          weight,
          className,
        })
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const Text = fixedForwardRef(TextComponent);
