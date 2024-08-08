import type { Option } from '@/components/forms/Select';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectButton } from '.';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', selected: true },
] as const satisfies Option[];

const meta = {
  title: 'atoms/SelectButton',
  component: SelectButton,
  args: {
    label: 'Select Label',
    options,
    placeholder: 'Select an option',
    forceSelect: false,
    disabled: false,
    onSelect: (value: string) => console.log(value),
  },
  parameters: {},
} satisfies Meta<typeof SelectButton>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
