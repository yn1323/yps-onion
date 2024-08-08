import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta = {
  title: 'atoms/Typography',
  component: Typography,
  args: {
    children: 'Typography',
    type: 'h1',
  },
} satisfies Meta<typeof Typography>;
export default meta;

export const Basic: StoryObj<typeof meta> = {
  render: (args) => (
    <div>
      <Typography {...args} type="h1" />
      <Typography {...args} type="h2" />
      <Typography {...args} type="h3" />
      <Typography {...args} type="h4" />
      <Typography {...args} type="h5" />
      <Typography {...args} type="h6" />
      <Typography {...args} type="description" />
    </div>
  ),
};
