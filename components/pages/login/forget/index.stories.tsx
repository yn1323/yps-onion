import { LoginForgetPageInner } from '@/components/pages/login/forget';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/LoginForgetPage',
  component: LoginForgetPageInner,
} satisfies Meta<typeof LoginForgetPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
