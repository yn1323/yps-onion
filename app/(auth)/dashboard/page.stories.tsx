import type { Meta, StoryObj } from '@storybook/react';
import DashboardPage from './page';

const meta = {
  title: 'app/(auth)/dashboard',
  component: DashboardPage,
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
