'use client';

import { useToast } from '@/components/atoms/Toast';
import { signup } from '@/components/features/Signin/SignupForm/actions';
import { Schema as LoginSchema } from '@/components/features/Signin/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

const Schema = LoginSchema.pick({ mail: true, password: true })
  .extend({
    passwordConfirmation: LoginSchema.shape.password,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'パスワードが一致しません',
    path: ['passwordConfirmation'],
  });

export const useSignupForm = () => {
  const { showToast } = useToast();
  const router = useRouter();

  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const result = await signup({
      email: data.mail,
      password: data.password,
    });

    if (result.succeeded) {
      showToast({
        message: '登録が完了しました。登録完了メールを確認してください。',
      });
      router.push('/login');
    } else {
      showToast({
        type: 'error',
        message: 'エラーが発生しました。再度時間をおいて試してください。',
      });
    }
  };

  return { methods, onSubmit };
};
