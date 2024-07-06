'use client';

import { Schema as LoginSchema } from '@/components/features/Login/schema';
import { supabase } from '@/src/constants/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

const Schema = LoginSchema.pick({ mail: true, password: true })
  .extend({
    passwordConfirmation: LoginSchema.shape.password,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'パスワードが一致しません',
    path: ['passwordConfirmation'],
  });

export const useRegisterForm = () => {
  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    try {
      const { error: signUpError } = await supabase.auth.signUp({
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
