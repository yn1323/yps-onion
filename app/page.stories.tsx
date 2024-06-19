import Page from '@/app/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'app/Page',
  component: Page,
  args: {
    children: 'Page',
    color: 'primary',
  },
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
