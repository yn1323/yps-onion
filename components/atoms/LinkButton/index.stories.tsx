import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '.';

const meta = {
  title: 'atoms/LinkButton',
  component: LinkButton,
  args: {
    children: 'ButtonLink',
    href: '/',
  },
} satisfies Meta<typeof LinkButton>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
