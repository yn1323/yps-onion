'use server';

import { revalidatePath } from 'next/cache';

export const revalidateAuth = () => {
  revalidatePath('/api/auth/user');
};
