'use server';

import { revalidatePath } from 'next/cache';

export const revalidateAuth = async () => {
  revalidatePath('/api/auth/user');
};
