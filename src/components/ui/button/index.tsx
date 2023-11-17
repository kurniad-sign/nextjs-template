'use client';

import { CSSProperties, forwardRef, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
  useHover,
} from 'react-aria';

import { mergeRefs } from '@/src/components/common/types';
import { cn } from '@/src/lib/utils';

import { buttonVariant, ButtonVariantProps } from './variant';

type ButtonProps = AriaButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    isLoading?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    title?: string;
    isSubmit?: boolean;
    width?: CSSProperties['width'];
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      children,
      className,
      disabled,
      iconLeft,
      iconRight,
      isLoading,
      isSubmit,
      size,
      title,
      variant,
      width,
      ...rest
    } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const { focusProps, isFocusVisible } = useFocusRing();
    const { hoverProps, isHovered } = useHover({
      ...props,
      isDisabled: disabled,
    });
    const { buttonProps, isPressed } = useButton(
      {
        ...rest,
        isDisabled: disabled,
      },
      ref
    );

    return (
      <button
        className={cn(buttonVariant({ size, variant, className }))}
        ref={mergeRefs([ref, forwardedRef])}
        data-pressed={isPressed || undefined}
        data-hovered={isHovered || undefined}
        data-focus-visible={isFocusVisible || undefined}
        {...mergeProps(buttonProps, focusProps, hoverProps)}
        style={{ width }}
        aria-label={title || undefined}
        type={isSubmit ? 'submit' : undefined}
      >
        {isLoading && (
          <Loader2 strokeWidth={3} className="w-4 h-4 me-2 animate-spin" />
        )}
        {!isLoading ||
          (iconLeft && (
            <span className={cn('me-2', size === 'small' && 'me-1')}>
              {iconLeft}
            </span>
          ))}
        {children}
        {!isLoading || (iconRight && <span className="ms-2">{iconRight}</span>)}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
