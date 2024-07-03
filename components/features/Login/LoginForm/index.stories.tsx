import { useLoginForm } from '@/components/features/Login/LoginForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '.';

const meta = {
  title: 'features/Login/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) => {
      const hooks = useLoginForm();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof LoginForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
