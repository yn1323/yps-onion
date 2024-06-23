import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="rounded-lg border border-gray-100 p-3 shadow-sm">
      {children}
    </div>
  );
};
