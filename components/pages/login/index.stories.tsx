import { LoginPage } from '@/components/pages/login';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/login',
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
