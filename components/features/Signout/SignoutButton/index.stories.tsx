import type { Meta, StoryObj } from '@storybook/react';
import { SignoutButton } from '.';

const meta = {
  title: 'features/Signout/SignoutButton',
  component: SignoutButton,
} satisfies Meta<typeof SignoutButton>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
