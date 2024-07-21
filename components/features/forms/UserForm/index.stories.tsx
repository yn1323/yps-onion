import { useUserForm } from '@/components/features/forms/UserForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { UserForm } from '.';

const meta = {
  title: 'features/forms/UserForm',
  component: UserForm,
  decorators: [
    (Story) => {
      const hooks = useUserForm();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof UserForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
