'use server';

import type { GetAuthUser } from '@/app/api/auth/user/[userId]/route';
import { auth } from '@/src/helpers/auth/auth';
import { nextPath } from '@/src/helpers/next';
import { serverFetch } from '@/src/services/common/fetch';
import { redirect } from 'next/navigation';

const SafePaths = ['/signup/user'];

export const checkUser = async () => {
  const { getUser } = auth();
  const pathname = nextPath();

  const {
    data: { user },
  } = await getUser();

  const userId = user?.id ?? '';

  if (!userId) {
    redirect('/login');
  }

  const result = await serverFetch<GetAuthUser>(`/api/auth/user/${userId}`, {
    next: {
      revalidate: 1800,
    },
  });

  if (
    (!result || !result.success) &&
    SafePaths.every((p) => !pathname?.includes(p))
  ) {
    console.log('User Registration: No User Id Found');
    redirect('/signup/user');
  } else if (result.success && SafePaths.some((p) => pathname?.includes(p))) {
    console.log('User Registration: User Id Found');
    redirect('/dashboard');
  }

  // 登録済み
  console.log('User Registration: User Id Found', userId);

  return result;
};
