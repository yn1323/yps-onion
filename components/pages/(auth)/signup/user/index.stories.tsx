import { SignupUserPageInner } from '@/components/pages/(auth)/signup/user';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/SignupUserPage',
  component: SignupUserPageInner,
} satisfies Meta<typeof SignupUserPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
