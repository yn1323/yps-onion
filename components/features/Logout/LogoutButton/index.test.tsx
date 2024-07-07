import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import * as stories from './index.stories';

const { Basic } = composeStories(stories);

describe('LogoutButton Components', () => {
  test('Basic', async () => {
    render(<Basic />);
  });
});
