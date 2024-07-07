import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: Props) => {
  const arrayedChildren = Array.isArray(children) ? children : [children];

  return (
    <div
      className={twMerge(
        'rounded-lg border border-gray-100 p-3 shadow-sm',
        className,
      )}
    >
      {arrayedChildren}
    </div>
  );
};
