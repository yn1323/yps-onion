import { createClient } from '@/src/configs/supabase/client';
import { useState } from 'react';

export const useAuth = () => {
  const [userId, setUserId] = useState('');
  const client = createClient();

  client.auth.onAuthStateChange((_, session) => {
    setUserId(session?.user.id || '');
  });

  return {
    userId,
  };
};
