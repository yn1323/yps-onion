import { checkUser } from '@/app/(auth)/actions';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  await checkUser();
  return <main className="h-screen">{children}</main>;
};

export default AuthLayout;
