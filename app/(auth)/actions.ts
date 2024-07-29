'use server';

import type { PostUserExistence } from '@/app/(auth)/auth/user/route';
import { auth } from '@/src/hooks/auth';
import { serverFetch } from '@/src/services/common/fetch';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const SafePaths = ['/signup/user'];

export const checkUser = async () => {
  const { getUser } = auth();
  const heads = headers();

  const pathname = heads.get('next-url');

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

  const result = await serverFetch<PostUserExistence>('/auth/user', {
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
