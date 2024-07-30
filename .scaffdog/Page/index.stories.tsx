import { {{ inputs.component | pascal }}PageInner } from '@/components/pages/{{ inputs.path }}';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'pages/{{ inputs.component | pascal }}Page',
  component: {{ inputs.component | pascal }}PageInner,
} satisfies Meta<typeof {{ inputs.component | pascal }}PageInner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
