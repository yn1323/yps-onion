import { Toast } from '@/components/atoms/Toast';
import { useSignupForm } from '@/components/features/Signin/SignupForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from '.';

const meta = {
  title: 'features/Login/SignupForm',
  component: SignupForm,
  decorators: [
    (Story) => {
      const hooks = useSignupForm();
      return (
        <>
          <Story {...hooks} />
          <Toast />
        </>
      );
    },
  ],
} satisfies Meta<typeof SignupForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
