import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('IconButton Components', () => {
  const onClickMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Click Handler', async () => {
    render(<Basic onClick={onClickMock} label="back" />);
    const button = screen.getByRole('button', { name: 'back' });
    await user.click(button);
    expect(onClickMock).toHaveBeenCalledOnce();
  });
  test('Link Handler', async () => {
    render(<Basic onClick={onClickMock} label="back" href="/" />);
    const button = screen.getByRole('button', { name: 'back' });
    await user.click(button);
    expect(onClickMock).not.toHaveBeenCalledOnce();
  });
});
