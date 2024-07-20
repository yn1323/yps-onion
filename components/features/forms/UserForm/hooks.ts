import { Schema } from '@/components/features/forms/UserForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

export const useUserForm = () => {
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
