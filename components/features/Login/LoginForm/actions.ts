'use server';

import { createClient } from '@/src/configs/supabase/server';

export const login = async ({
  email,
  password,
}: { email: string; password: string }) => {
  const supabase = createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message);
  }

  return { succeeded: !error, message: error?.message ?? '' };
};
