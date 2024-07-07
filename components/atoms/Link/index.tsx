import LibLink from 'next/link';
import type { ComponentProps } from 'react';

type Props = {
  children: string;
} & ComponentProps<typeof LibLink>;

export const Link = ({ children, ...props }: Props) => {
  return (
    <LibLink {...props} className="text-gray-900 hover:underline">
      aaa
    </LibLink>
  );
};
