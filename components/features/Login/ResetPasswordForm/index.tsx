'use client';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { useResetPasswordForm } from '@/components/features/Login/ResetPasswordForm/hooks';
import { Input } from '@/components/forms/Input';
import Link from 'next/link';
import { FormProvider } from 'react-hook-form';

export const ResetPasswordForm = () => {
  const formData = useResetPasswordForm();
  return <ResetPasswordFormInner {...formData} />;
};

type Props = ReturnType<typeof useResetPasswordForm>;

export const ResetPasswordFormInner = ({ methods, onSubmit }: Props) => {
  return (
    <Card className="flex w-96 flex-col gap-5 p-8">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <Input label="メールアドレス" id="mail" />
          <Button type="submit">パスワードリセット</Button>
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
