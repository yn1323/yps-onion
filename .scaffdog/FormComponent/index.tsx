'use client';

import { Button } from '@/components/atoms/Button';
import { use{{ inputs.component | pascal }} } from '@/components/{{ inputs.path }}/{{ inputs.component | pascal }}/hooks';
import { Input } from '@/components/forms/Input';
import { FormProvider } from 'react-hook-form';

export const {{ inputs.component | pascal }} = () => {
  const formData = use{{ inputs.component | pascal }}();
  return <{{ inputs.component | pascal }}Inner {...formData} />;
};

type Props = {} & ReturnType<typeof use{{ inputs.component | pascal }}>;

export const {{ inputs.component | pascal }}Inner = ({ methods, onSubmit }: Props) => {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <Input label="メールアドレス" id="mail" />
        <Input label="パスワード" type="password" id="password" />
        <Button type="submit">登録</Button>
      </form>
    </FormProvider>
  );
};
