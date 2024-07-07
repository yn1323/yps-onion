import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
  title: 'atoms/Card',
  component: Card,
  args: {
    children: 'Card',
  },
} satisfies Meta<typeof Card>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
