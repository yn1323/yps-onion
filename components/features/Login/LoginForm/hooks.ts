import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const Schema = z.object({
  mail: z.string().min(1).max(100).email(),
  password: z
    .string()
    .superRefine(betweenLength(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)),
});

export const useLoginForm = () => {
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
