import { Button } from '@/components/atoms/Button';
import { time } from '@/src/helpers/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { TimePicker } from '.';

const ZOD_SCHEMA = z.string().min(1).superRefine(time(15));

const meta = {
  title: 'forms/TimePicker',
  component: TimePicker,
  args: {
    disabled: false,
    placeholder: 'Enter Time',
    label: 'TimePicker Label',
    id: 'TimePicker',
  },
  decorators: [
    (Story, { args }) => {
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
            <Story {...args} label="Basic" />
            <Story {...args} disabled label="Disabled" />
            <Story
              {...args}
              label="Description"
              description="Description......."
            />
            <Story {...args} label="Required" />
            <Button type="submit">Submit</Button>
          </form>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof TimePicker>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const Invalid: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submit = canvas.getByRole('button', { name: 'Submit' });
    await userEvent.click(submit);
  },
};
