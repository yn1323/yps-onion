import type { Meta, StoryObj } from '@storybook/react';
import ShopSignupPage from './page';

const meta = {
  title: 'app/(auth)/signup/shop',
  component: ShopSignupPage,
} satisfies Meta<typeof ShopSignupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
