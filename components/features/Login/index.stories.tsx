import type { Meta, StoryObj } from '@storybook/react';
import { Login } from '.';

const meta = {
  title: 'features/Login',
  component: Login,
  args: {},
  parameters: {},
} satisfies Meta<typeof Login>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
