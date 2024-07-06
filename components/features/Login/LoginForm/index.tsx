'use client';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { useLoginForm } from '@/components/features/Login/LoginForm/hooks';
import { Input } from '@/components/forms/Input';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

export const LoginForm = () => {
  const formData = useLoginForm();
  return <LoginFormInner {...formData} />;
};

type Props = ReturnType<typeof useLoginForm>;

export const LoginFormInner = ({ methods, onSubmit }: Props) => {
  return (
    <Card className="flex w-96 flex-col gap-8 p-8">
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
      <div className="-mx-2 flex items-center gap-6">
        <hr className="grow" />
        <span>or</span>
        <hr className="grow" />
      </div>
      <Button color="secondary" icon={<FcGoogle />}>
        Googleでログイン
      </Button>
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
