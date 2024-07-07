import { useToast } from '@/components/atoms/Toast';
import { login } from '@/components/features/Login/LoginForm/actions';
import { Schema } from '@/components/features/Login/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

export const useLoginForm = () => {
  const { showToast } = useToast();
  const router = useRouter();

  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const result = await login({
      email: data.mail,
      password: data.password,
    });

    if (result.succeeded) {
      showToast({
        message: 'ログインに成功しました。',
      });
      router.push('/dashboard');
    } else {
      showToast({
        type: 'error',
        message: 'エラーが発生しました。再度時間をおいて試してください。',
      });
    }
  };

  return { methods, onSubmit };
};
