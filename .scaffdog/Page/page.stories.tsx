import type { Meta, StoryObj } from '@storybook/react';
import {{ inputs.component | pascal }}Page from './page';

const meta = {
  title: 'app/{{ inputs.path }}',
  component: {{ inputs.component | pascal }}Page,
} satisfies Meta<typeof {{ inputs.component | pascal }}Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
