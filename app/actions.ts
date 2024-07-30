'use server';

import { revalidatePath } from 'next/cache';

export const revalidateAuth = async () => {
  await revalidatePath('/api/auth/user');
};
