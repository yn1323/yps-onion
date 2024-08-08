import { Button } from '@/components/atoms/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { ToastInner, useToast } from '.';

const meta = {
  title: 'atoms/Toast',
  component: ToastInner,
  args: {
    isOpen: true,
    isClosable: true,
    autoClose: true,
    message: 'This is a toast message',
    type: 'success',
    onClose: () => {},
  },
} satisfies Meta<typeof ToastInner>;
export default meta;

export const Success: StoryObj<typeof meta> = {};

export const ErrorPattern: StoryObj<typeof meta> = {
  args: {
    type: 'error',
  },
};

export const Operation = {
  render: () => {
    const { showToast } = useToast();
    return (
      <div>
        <Button
          onClick={() => {
            showToast({
              message: 'This is a toast message',
              type: 'success',
            });
          }}
        >
          show
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'show' });
    await userEvent.click(button);
  },
};
