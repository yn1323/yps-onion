import { LoginSignupPageInner } from '@/components/pages/login/signup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/login/signup',
  component: LoginSignupPageInner,
} satisfies Meta<typeof LoginSignupPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
