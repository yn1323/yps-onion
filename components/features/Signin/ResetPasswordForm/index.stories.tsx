import type { Meta, StoryObj } from '@storybook/react';
import { ResetPasswordForm } from '.';

const meta = {
  title: 'features/Login/ResetPasswordForm',
  component: ResetPasswordForm,
} satisfies Meta<typeof ResetPasswordForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
