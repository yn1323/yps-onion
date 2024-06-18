import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('Button Components', () => {
  const onClickMock = vi.fn();
  test('Params', async () => {
    render(<Basic onClick={onClickMock}>button</Basic>);

    const button = screen.getByRole('button', { name: 'button' });
    await user.click(button);

    expect(onClickMock).toHaveBeenCalledOnce();
  });
});
