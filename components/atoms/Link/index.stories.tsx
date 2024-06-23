import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

const meta = {
  title: 'atoms/Link',
  component: Link,
  args: {
    children: 'Link',
    href: '/',
  },
  parameters: {},
} satisfies Meta<typeof Link>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
