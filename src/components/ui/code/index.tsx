import { forwardRef } from 'react';

import { cn } from '@/src/lib/utils';

interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Code = forwardRef<HTMLDivElement, CodeProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Code.displayName = 'Code';

export { Code };
