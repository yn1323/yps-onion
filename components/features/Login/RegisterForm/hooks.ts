import { Schema as LoginSchema } from '@/components/features/Login/schema';
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

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log(data);
  };

  return { methods, onSubmit };
};
