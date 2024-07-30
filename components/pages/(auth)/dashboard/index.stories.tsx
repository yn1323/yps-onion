import { DashboardPageInner } from '@/components/pages/(auth)/dashboard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/DashboardPage',
  component: DashboardPageInner,
} satisfies Meta<typeof DashboardPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
