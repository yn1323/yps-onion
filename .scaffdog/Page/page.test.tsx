import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { test } from 'vitest';
import * as stories from './page.stories';

const { Basic } = composeStories(stories);

test('/{{ inputs.path }}', () => {
  render(<Basic />);
});
