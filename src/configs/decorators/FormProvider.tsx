import { FormProvider, useForm } from 'react-hook-form';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const FormProviderDecorator = (Story: any) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};
