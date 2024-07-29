import { useToast } from '@/components/atoms/Toast';
import { signUpUser } from '@/components/features/forms/UserForm/actions';
import { Schema } from '@/components/features/forms/UserForm/schema';
import { useAuth } from '@/src/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

export const useUserForm = () => {
  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });
  const { userId } = useAuth();
  const { showToast } = useToast();

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const isSucceeded = await signUpUser({ userId, userName: data.userName });
    if (isSucceeded) {
      showToast({ message: 'ユーザー登録が完了しました', type: 'success' });
      // TODO redirect
    } else {
      showToast({ message: 'ユーザー登録に失敗しました', type: 'error' });
    }
  };

  return { methods, onSubmit };
};
