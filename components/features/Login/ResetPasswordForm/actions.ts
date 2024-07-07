'use server';

import { createClient } from '@/src/configs/supabase/server';

export const resetPassword = async ({ email }: { email: string }) => {
  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.log(error.message);
  }

  return { succeeded: !error, message: error?.message ?? '' };
};
