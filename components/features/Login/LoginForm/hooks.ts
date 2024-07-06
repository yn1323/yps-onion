import { Schema } from '@/components/features/Login/schema';
import { supabase } from '@/src/constants/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

export const useLoginForm = () => {
  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    try {
      const { error: signUpError } = await supabase.auth.signInWithPassword({
        email: data.mail,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (signUpError) {
        throw signUpError;
      }
      alert('登録完了メールを確認してください');
    } catch (e) {
      console.error(e);
      alert('エラーが発生しました');
    }
  };

  return { methods, onSubmit };
};
