import type { Meta, StoryObj } from '@storybook/react';
import UserSignupPage from './page';

const meta = {
  title: 'app/(auth)/signup/user',
  component: UserSignupPage,
} satisfies Meta<typeof UserSignupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
