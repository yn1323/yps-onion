import { headers } from 'next/headers';

export const nextPath = () => {
  const heads = headers();
  return heads.get('next-url');
};
