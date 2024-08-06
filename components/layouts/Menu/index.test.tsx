import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('Menu Components', () => {
  const onClickMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Basic', async () => {
    render(<Basic />);
  });
});
