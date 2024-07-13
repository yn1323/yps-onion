import { Toast } from '@/components/atoms/Toast';
import { useResetPasswordForm } from '@/components/features/Signin/ResetPasswordForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { ResetPasswordForm } from '.';

const meta = {
  title: 'features/Login/ResetPasswordForm',
  component: ResetPasswordForm,
  decorators: [
    (Story) => {
      const hooks = useResetPasswordForm();
      return (
        <>
          <Story {...hooks} />
          <Toast />
        </>
      );
    },
  ],
} satisfies Meta<typeof ResetPasswordForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
