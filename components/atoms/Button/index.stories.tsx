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
const IsLoading = [true, false] as const;
const Colors = ['primary', 'secondary'] as const;

export const Patterns: StoryObj<typeof meta> = {
  render: (args) => {
    return (
      <div className="space-y-12 bg-gray-100">
        <div>
          <h1>Variant</h1>
          <div className="flex flex-wrap gap-2">
            {Icons.map((icon, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {Colors.map((color, j) => (
                  <div key={j} className="flex flex-wrap gap-2">
                    {Disabled.map((disabled, k) => (
                      <div key={k} className="flex flex-wrap gap-2">
                        {IsLoading.map((isLoading, l) => (
                          <Button
                            key={l}
                            {...args}
                            icon={icon ? <FcGoogle /> : undefined}
                            color={color}
                            disabled={disabled}
                            isLoading={isLoading}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>Outline</h1>
          <div className="flex flex-wrap gap-2">
            {Icons.map((icon, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {Colors.map((color, j) => (
                  <div key={j} className="flex flex-wrap gap-2">
                    {Disabled.map((disabled, k) => (
                      <div key={k} className="flex flex-wrap gap-2">
                        {IsLoading.map((isLoading, l) => (
                          <Button
                            key={l}
                            {...args}
                            theme={'outline'}
                            icon={icon ? <FcGoogle /> : undefined}
                            color={color}
                            disabled={disabled}
                            isLoading={isLoading}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>Skeleton</h1>
          <div className="flex flex-wrap gap-2">
            {Icons.map((icon, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {Colors.map((color, j) => (
                  <div key={j} className="flex flex-wrap gap-2">
                    {Disabled.map((disabled, k) => (
                      <div key={k} className="flex flex-wrap gap-2">
                        {IsLoading.map((isLoading, l) => (
                          <Button
                            key={l}
                            theme={'skeleton'}
                            {...args}
                            icon={icon ? <FcGoogle /> : undefined}
                            color={color}
                            disabled={disabled}
                            isLoading={isLoading}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
