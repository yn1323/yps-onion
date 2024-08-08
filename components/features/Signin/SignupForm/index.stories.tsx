import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from '.';

const meta = {
  title: 'features/Login/SignupForm',
  component: SignupForm,
} satisfies Meta<typeof SignupForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
