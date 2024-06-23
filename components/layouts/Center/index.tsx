import type { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export const Center = ({ children }: Props) => {
  const arrayedChildren = Array.isArray(children) ? children : [children];
  return (
    <div className="grid h-full w-full place-items-center">
      {arrayedChildren}
    </div>
  );
};
