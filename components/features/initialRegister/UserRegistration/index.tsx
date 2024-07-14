'use client';

import { Button } from '@/components/atoms/Button';
import { useUserRegistration } from '@/components/features/initialRegister/UserRegistration/hooks';
import { Input } from '@/components/forms/Input';
import { FormProvider } from 'react-hook-form';

export const UserRegistration = () => {
  const formData = useUserRegistration();
  return <UserRegistrationInner {...formData} />;
};

type Props = {} & ReturnType<typeof useUserRegistration>;

export const UserRegistrationInner = ({ methods, onSubmit }: Props) => {
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
