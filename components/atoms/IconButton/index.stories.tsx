import type { Meta, StoryObj } from '@storybook/react';
import { FaArrowLeft } from 'react-icons/fa6';
import { IconButton } from '.';

const meta = {
  title: 'atoms/IconButton',
  component: IconButton,
  args: {
    disabled: false,
    color: 'primary',
    icon: <FaArrowLeft />,
    href: '',
    label: '',
    type: 'button',
    onClick: () => {},
  },
  parameters: {},
} satisfies Meta<typeof IconButton>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};

const Disabled = [true, false] as const;

export const Patterns: StoryObj<typeof meta> = {
  render: (args) => {
    return (
      <>
        {Disabled.map((disabled, i) => (
          <IconButton key={i} {...args} disabled={disabled} />
        ))}
      </>
    );
  },
};
