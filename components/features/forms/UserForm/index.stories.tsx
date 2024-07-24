import type { Meta, StoryObj } from '@storybook/react';
import { UserForm } from '.';

const meta = {
  title: 'features/forms/UserForm',
  component: UserForm,
} satisfies Meta<typeof UserForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
