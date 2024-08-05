'use server';

import type { PostAuthUserSignup } from '@/app/api/auth/user/signup/route';
import { serverFetch } from '@/src/services/common/fetch';
import { revalidatePath } from 'next/cache';

type SignUpUserArgs = {
  userId: string;
  userName: string;
};
export const signUpUser = async ({ userId, userName }: SignUpUserArgs) => {
  const result = await serverFetch<PostAuthUserSignup>(
    '/api/auth/user/signup',
    {
      method: 'POST',
      query: {
        userId,
        userName,
      },
    },
  );

  if (result.success) {
    revalidatePath('/');
  }

  return result.success;
};
