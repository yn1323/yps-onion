import type { Meta, StoryObj } from '@storybook/react';
import { ShopForm } from '.';

const meta = {
  title: 'features/forms/ShopForm',
  component: ShopForm,
} satisfies Meta<typeof ShopForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const WithUserSignup: StoryObj<typeof meta> = {
  args: {
    withUserSignup: true,
  },
};
