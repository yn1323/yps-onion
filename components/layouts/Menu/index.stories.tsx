import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '.';

const meta = {
  title: 'layouts/Menu',
  component: Menu,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Menu>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
