import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '.';

const meta = {
  title: 'features/Login/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
