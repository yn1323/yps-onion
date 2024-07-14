import { useUserRegistration } from '@/components/features/initialRegister/UserRegistration/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { UserRegistration } from '.';

const meta = {
  title: 'features/initialRegister/UserRegistration',
  component: UserRegistration,
  decorators: [
    (Story) => {
      const hooks = useUserRegistration();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof UserRegistration>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
