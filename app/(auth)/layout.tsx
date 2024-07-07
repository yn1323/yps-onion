import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  return children;
};

export default AuthLayout;
