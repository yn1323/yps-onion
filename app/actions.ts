'use server';

import { revalidateAuthUser } from '@/app/api/auth/user/route';

export const revalidateAuth = async () => {
  await revalidateAuthUser();
};
