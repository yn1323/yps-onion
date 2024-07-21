import { useShopForm } from '@/components/features/forms/ShopForm/hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { ShopForm } from '.';

const meta = {
  title: 'features/forms/ShopForm',
  component: ShopForm,
  decorators: [
    (Story) => {
      const hooks = useShopForm();
      return <Story {...hooks} />;
    },
  ],
} satisfies Meta<typeof ShopForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
