import { Schema } from '@/components/features/forms/ShopForm/schema';
import { Schema as UserFormSchema } from '@/components/features/forms/UserForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import type { z } from 'zod';

type UserShopFormArgs = {
  withUserSignup?: boolean;
};

export const useShopForm = ({ withUserSignup }: UserShopFormArgs) => {
  const targetSchema = withUserSignup ? Schema.merge(UserFormSchema) : Schema;
  type SchemaType = z.infer<typeof targetSchema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(targetSchema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log(data);
  };

  return { methods, onSubmit };
};
