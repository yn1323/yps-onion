import { useToast } from '@/components/atoms/Toast';
import { resetPassword } from '@/components/features/Signin/ResetPasswordForm/actions';
import { Schema as LoginSchema } from '@/components/features/Signin/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

const Schema = LoginSchema.pick({ mail: true });

export const useResetPasswordForm = () => {
  const { showToast } = useToast();
  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const result = await resetPassword({
      email: data.mail,
    });

    if (result.succeeded) {
      showToast({
        message:
          'パスワードをリセットしました。登録メールアドレスを確認してください。',
      });
    } else {
      showToast({
        type: 'error',
        message: 'エラーが発生しました。再度時間をおいて試してください。',
      });
    }
  };

  return { methods, onSubmit };
};
