import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { test } from 'vitest';
import * as stories from './index.stories';

const { Basic } = composeStories(stories);

test('App Router: Works with Server Components', async () => {
  render(<Basic />);
});
