import { createClient } from '@/src/configs/setup/supabase/server';

export const auth = () => {
  const client = createClient();

  const getUser = async () => await client.auth.getUser();

  return {
    getUser,
  };
};
