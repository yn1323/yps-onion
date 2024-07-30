import { MainPageInner } from '@/components/pages';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/root',
  component: MainPageInner,
} satisfies Meta<typeof MainPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
