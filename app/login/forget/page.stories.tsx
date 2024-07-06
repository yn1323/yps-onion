import type { Meta, StoryObj } from '@storybook/react';
import PasswordForgetPage from './page';

const meta = {
  title: 'app/login/forget',
  component: PasswordForgetPage,
} satisfies Meta<typeof PasswordForgetPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
