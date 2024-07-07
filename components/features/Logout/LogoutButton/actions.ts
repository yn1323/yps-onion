'use server';

import { createClient } from '@/src/configs/supabase/server';

export const logout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error.message);
  }

  return { succeeded: !error, message: error?.message ?? '' };
};
