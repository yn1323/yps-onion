import { MainPageInner } from '@/app/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'app/Page',
  component: MainPageInner,
} satisfies Meta<typeof MainPageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
