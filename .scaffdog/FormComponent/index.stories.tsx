import { use{{ inputs.component | pascal }} } from '@/components/{{ inputs.path }}/{{ inputs.component | pascal }}/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { {{ inputs.component | pascal }} } from '.';

const meta = {
  title: '{{ inputs.path }}/{{ inputs.component | pascal }}',
  component: {{ inputs.component | pascal }},
  decorators: [
    (Story) => {
      const hooks = use{{ inputs.component | pascal }}();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof {{ inputs.component | pascal }}>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
