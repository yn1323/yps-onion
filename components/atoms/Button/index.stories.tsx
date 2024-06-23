import { Button } from '@/components/atoms/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { FcGoogle } from 'react-icons/fc';

const meta = {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'Button',
    color: 'primary',
    fullWidth: false,
    disabled: false,
    type: 'button',
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Icon: StoryObj<typeof meta> = {
  args: {
    icon: <FcGoogle />,
  },
};

export const FullWidth: StoryObj<typeof meta> = {
  args: {
    fullWidth: true,
  },
};

const Icons = [true, false] as const;
const Disabled = [true, false] as const;
const Colors = ['primary', 'secondary'] as const;

export const Patterns: StoryObj<typeof meta> = {
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-2">
        {Icons.map((icon, i) => (
          <div key={i} className="flex gap-2">
            {Colors.map((color, j) => (
              <div key={j} className="flex gap-2">
                {Disabled.map((disabled, k) => (
                  <Button
                    key={k}
                    {...args}
                    icon={icon ? <FcGoogle /> : undefined}
                    color={color}
                    disabled={disabled}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
