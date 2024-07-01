import { Button } from '@/components/atoms/Button';
import { FormProviderDecorator } from '@/config/Decorators';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '.';

const meta = {
  title: 'forms/Input',
  component: Input,
  args: {
    disabled: false,
  },
  parameters: {},
  decorators: [
    FormProviderDecorator,
    (_, { args }) => {
      const Schema = z.object({ Form: ZODSCHEMA });
      type SchemaType = z.infer<typeof Schema>;
      const methods = useForm<SchemaType>({
        resolver: zodResolver(Schema),
      });
      const onSubmit: SubmitHandler<SchemaType> = (data) => {};

      return (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input {...args} />
            <Box textAlign="right">
              <Button colorScheme="green" mt={4} type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof Input>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
