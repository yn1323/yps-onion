import type { Meta, StoryObj } from '@storybook/react';
import { Center } from '.';

const meta = {
  title: 'layouts/Center',
  component: Center,
  args: {
    children: 'Center',
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Center>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
