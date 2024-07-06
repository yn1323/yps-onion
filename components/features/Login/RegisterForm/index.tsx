'use client';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { useRegisterForm } from '@/components/features/Login/RegisterForm/hooks';
import { Input } from '@/components/forms/Input';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';

export const RegisterForm = () => {
  const formData = useRegisterForm();
  return <RegisterFormInner {...formData} />;
};

type Props = ReturnType<typeof useRegisterForm>;

export const RegisterFormInner = ({ methods, onSubmit }: Props) => {
  const isLoading = methods.formState.isSubmitting;
  return (
    <Card className="flex w-96 flex-col gap-5 p-8">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <Input label="メールアドレス" id="mail" disabled={isLoading} />
          <Input
            label="パスワード"
            type="password"
            id="password"
            disabled={isLoading}
          />
          <Input
            label="パスワード(確認)"
            type="password"
            id="passwordConfirmation"
            disabled={isLoading}
          />
          <Button type="submit" isLoading={isLoading}>
            登録
          </Button>
        </form>
      </FormProvider>
      <p className="flex w-full flex-col gap-2 text-right text-gray-500 text-sm">
        <Link className="hover:underline" href="/login">
          ログイン画面に戻る
        </Link>
      </p>
    </Card>
  );
};
