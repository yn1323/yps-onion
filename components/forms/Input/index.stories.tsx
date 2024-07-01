import { Button } from '@/components/atoms/Button';
import { required } from '@/src/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '.';

const ZOD_SCHEMA = z.string().superRefine(required);

const meta = {
  title: 'forms/Input',
  component: Input,
  args: {
    type: 'text',
    maxLength: 20,
    disabled: false,
    placeholder: 'Enter text here',
    label: 'Input Label',
  },
  decorators: [
    (_, { args }) => {
      const id = 'input';
      const Schema = z.object({ [id]: ZOD_SCHEMA });
      type SchemaType = z.infer<typeof Schema>;
      const methods = useForm<SchemaType>({
        resolver: zodResolver(Schema),
      });
      const onSubmit: SubmitHandler<SchemaType> = () => {};

      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <Input {...args} label="Basic" />
            <Input {...args} disabled label="Disabled" />
            <Input
              {...args}
              label="Description"
              description="Description......."
            />
            <Input {...args} label="Required" />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof Input>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const Invalid: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submit = canvas.getByRole('button', { name: 'Submit' });
    await userEvent.click(submit);
  },
};
