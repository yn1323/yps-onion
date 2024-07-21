import { Button } from '@/components/atoms/Button';
import { type Option, Select } from '@/components/forms/Select';
import { select } from '@/src/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', selected: true },
] as const satisfies Option[];

const ZOD_SCHEMA = z
  .string()
  .superRefine(select({ options, forceSelect: true }));

const meta = {
  title: 'forms/Select',
  component: Select,
  args: {
    label: 'Select Label',
    options,
    placeholder: 'Select an option',
    id: 'select',
    forceSelect: false,
    description: '',
    disabled: false,
  },
  decorators: [
    (_, { args }) => {
      const id = args.id ?? '';
      const Schema = z.object({ [id]: ZOD_SCHEMA });
      type SchemaType = z.infer<typeof Schema>;
      const methods = useForm<SchemaType>({
        resolver: zodResolver(Schema),
      });
      const onSubmit: SubmitHandler<SchemaType> = (d) => {
        console.log(d);
      };

      return (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <Select {...args} label="Basic" />
            <Select {...args} disabled label="Disabled" />
            <Select
              {...args}
              label="Description"
              description="Description......."
            />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof Select>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const Invalid: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submit = canvas.getByRole('button', { name: 'Submit' });
    await userEvent.click(submit);
  },
};
