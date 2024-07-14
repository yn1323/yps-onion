import { Toast } from '@/components/atoms/Toast';
import { useSigninForm } from '@/components/features/Signin/SigninForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { SigninForm } from '.';

const meta = {
  title: 'features/Signin/SigninForm',
  component: SigninForm,
  decorators: [
    (Story) => {
      const hooks = useSigninForm();
      return (
        <>
          <Story {...hooks} />
          <Toast />
        </>
      );
    },
  ],
} satisfies Meta<typeof SigninForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
