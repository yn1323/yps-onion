import { createClient } from '@/src/configs/supabase/client';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return children;
};

export default AuthLayout;
