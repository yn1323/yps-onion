import type { Meta, StoryObj } from '@storybook/react';
import RegisterPage from './page';

const meta = {
  title: 'app/login/new',
  component: RegisterPage,
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
