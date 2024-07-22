'use client';

import { Button } from '@/components/atoms/Button';
import { useShopForm } from '@/components/features/forms/ShopForm/hooks';
import { options } from '@/components/features/forms/ShopForm/schema';
import { Input } from '@/components/forms/Input';
import { Select } from '@/components/forms/Select';
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
        <Input label="店舗名" id="shopName" />
        <div>
          <span>シフト提出可能時間</span>
          <div className="flex gap-6 pt-2">
            <div className="grow">
              <TimePicker label="開始時間" id="start" />
            </div>
            <div className="grow">
              <TimePicker label="終了時間" id="end" />
            </div>
          </div>
        </div>
        <Select
          options={options}
          forceSelect
          label="シフト提出頻度"
          id="submitFrequency"
        />
        <Button type="submit">登録</Button>
      </form>
    </FormProvider>
  );
};
