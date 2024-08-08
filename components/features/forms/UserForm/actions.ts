'use server';

import type { PostAuthUser } from '@/app/api/auth/user/[userId]/route';
import { serverFetch } from '@/src/services/common/fetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type SignUpUserArgs = {
  userId: string;
  userName: string;
};
export const signUpUser = async ({ userId, userName }: SignUpUserArgs) => {
  const result = await serverFetch<PostAuthUser>(`/api/auth/user/${userId}`, {
    method: 'POST',
    query: {
      userId,
      userName,
    },
  });

  if (result.success) {
    revalidatePath('/');
  }

  return result.success;
};

export const successRedirect = () => {
  redirect('/dashboard');
};
