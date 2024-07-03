'use client';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { Input } from '@/components/forms/Input';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';

const Schema = z.object({
  mail: z.string().min(1).max(100).email(),
  password: z
    .string()
    .superRefine(betweenLength(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)),
});

export const LoginForm = () => {
  type SchemaType = z.infer<typeof Schema>;
  const methods = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log(data);
  };

  return (
    <Card className="flex w-96 flex-col gap-5 p-8">
      <Button color="secondary" icon={<FcGoogle />}>
        Googleでログイン
      </Button>
      <div className="-mx-2 flex items-center gap-6">
        <hr className="grow" />
        <span>or</span>
        <hr className="grow" />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <Input label="メールアドレス" id="mail" />
          <Input label="パスワード" type="password" id="password" />
          <Button type="submit">メールアドレスでログイン</Button>
        </form>
      </FormProvider>
      <p className="flex w-full flex-col gap-2 text-right text-gray-500 text-sm">
        <Link className="hover:underline" href="/login/new">
          新規登録
        </Link>
        <Link className="hover:underline" href="/login/forget">
          パスワードを忘れた方
        </Link>
      </p>
    </Card>
  );
};
