import { Button } from '@/components/atoms/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    color: 'primary',
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    color: 'secondary',
  },
};
