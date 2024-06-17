import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from './page';

const meta = {
  title: 'app/login/page',
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
