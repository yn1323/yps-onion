'use client';

import { Button } from '@/components/atoms/Button';
import { useUserForm } from '@/components/features/forms/UserForm/hooks';
import { Input } from '@/components/forms/Input';
import { FormProvider } from 'react-hook-form';

export const UserForm = () => {
  const formData = useUserForm();
  return <UserFormInner {...formData} />;
};

type Props = ReturnType<typeof useUserForm>;

export const UserFormInner = ({ methods, onSubmit }: Props) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <Input label="ユーザー名" id="user" />
        <Button type="submit">登録</Button>
      </form>
    </FormProvider>
  );
};
