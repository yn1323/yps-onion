import type { Meta, StoryObj } from "@storybook/react";
import { LogoutButton } from ".";

const meta = {
  title: 'features/Logout/LogoutButton',
  component: LogoutButton ,
  args: {},
  parameters: {},
} satisfies Meta<typeof LogoutButton >;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
