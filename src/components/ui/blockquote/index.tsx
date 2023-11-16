import { forwardRef } from 'react';

import { cn } from '@/src/lib/utils';

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {}

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote
        className={cn('mt-6 border-l-2 pl-6 italic', className)}
        ref={ref}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';

export { Blockquote };
