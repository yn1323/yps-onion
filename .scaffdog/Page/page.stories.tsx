import type { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.component | pascal }}PageInner } from './page';

const meta = {
  title: 'app/{{ inputs.path }}',
  component: {{ inputs.component | pascal }}PageInner,
} satisfies Meta<typeof {{ inputs.component | pascal }}PageInner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
