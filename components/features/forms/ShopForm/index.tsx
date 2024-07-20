'use client';

import { Button } from '@/components/atoms/Button';
import { useShopForm } from '@/components/features/forms/ShopForm/hooks';
import { Input } from '@/components/forms/Input';
import { TimePicker } from '@/components/forms/TimePicker';
import { FormProvider } from 'react-hook-form';

export const ShopForm = () => {
  const formData = useShopForm();
  return <ShopFormInner {...formData} />;
};

type Props = ReturnType<typeof useShopForm>;

export const ShopFormInner = ({ methods, onSubmit }: Props) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <Input label="店舗名" id="name" />
        <div>
            
        </div>
        <TimePicker label="開始" id="start" />
        <TimePicker label="終了" id="end" />

        <Button type="submit">登録</Button>
      </form>
    </FormProvider>
  );
};
