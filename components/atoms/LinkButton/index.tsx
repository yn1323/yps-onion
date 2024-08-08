import { Button } from '@/components/atoms/Button';
import LibLink from 'next/link';
import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof LibLink> & ComponentProps<typeof Button>;

export const LinkButton = ({ children, href, ...props }: Props) => {
  return (
    <LibLink href={href}>
      <Button {...props}>{children}</Button>
    </LibLink>
  );
};
