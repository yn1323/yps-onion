import { useRegisterForm } from '@/components/features/Login/RegisterForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { RegisterForm } from '.';

const meta = {
  title: 'features/Login/RegisterForm',
  component: RegisterForm,
  decorators: [
    (Story) => {
      const hooks = useRegisterForm();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof RegisterForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
