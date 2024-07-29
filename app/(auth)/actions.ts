'use server';

import type { PostUserExistence } from '@/app/api/auth/user/route';
import { auth } from '@/src/helpers/auth/auth';
import { nextPath } from '@/src/helpers/next';
import { serverFetch } from '@/src/services/common/fetch';
import { redirect } from 'next/navigation';

const SafePaths = ['/signup/user'];

export const checkUser = async () => {
  const { getUser } = auth();
  const pathname = nextPath();

  if (SafePaths.some((p) => pathname?.includes(p))) {
    return;
  }

  const {
    data: { user },
  } = await getUser();

  const userId = user?.id ?? '';

  if (!userId) {
    redirect('/login');
  }

  const result = await serverFetch<PostUserExistence>('/api/auth/user', {
    method: 'POST',
    query: {
      userId,
    },
    next: {
      revalidate: 1800,
    },
  });

  // 登録なし&エラー
  if (!result || !result.exist) {
    console.log('User Registration: No User Id Found');
    redirect('/signup/user');
  }

  // 登録済み
  console.trace('User Registration: User Id Found', userId);
};
