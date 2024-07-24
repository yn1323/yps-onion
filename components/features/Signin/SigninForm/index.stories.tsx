import type { Meta, StoryObj } from '@storybook/react';
import { SigninForm } from '.';

const meta = {
  title: 'features/Signin/SigninForm',
  component: SigninForm,
} satisfies Meta<typeof SigninForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
