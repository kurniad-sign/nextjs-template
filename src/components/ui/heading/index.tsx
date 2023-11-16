import { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';

import { cn } from '@/src/lib/utils';

import { DistributiveOmit, fixedForwardRef } from '../../common/types';
import { As, ELEMENT_OPTIONS } from './types';
import { headingVariant, HeadingVariantProps } from './variant';

const UnHeading = <TAs extends As>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as'
  > &
    HeadingVariantProps,
  ref: ForwardedRef<any>
) => {
  const {
    as: Component = ELEMENT_OPTIONS.DIV,
    children,
    className,
    size,
    textAlign,
    ...rest
  } = props;
  const sizeHeading =
    Component === 'h1'
      ? 'heading-1'
      : Component === 'h2'
        ? 'heading-2'
        : Component === 'h3'
          ? 'heading-3'
          : Component === 'h4'
            ? 'heading-4'
            : Component === 'h5'
              ? 'heading-5'
              : Component === 'h6'
                ? 'heading-6'
                : ('default' as HeadingVariantProps['size']);

  return (
    <Component
      ref={ref}
      role={Component === 'div' ? 'heading' : undefined}
      className={cn(
        headingVariant({ size: sizeHeading, textAlign, className })
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const Heading = fixedForwardRef(UnHeading);
