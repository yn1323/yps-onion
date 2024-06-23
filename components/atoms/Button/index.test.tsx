import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach } from 'node:test';
import { describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('Button Components', () => {
  const onClickMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Basic', async () => {
    render(<Basic onClick={onClickMock} />);

    const button = screen.getByRole('button', { name: 'Button' });
    await user.click(button);
    expect(onClickMock).toHaveBeenCalledOnce();
    expect(button).not.toBeDisabled();
  });
  test('Disabled', async () => {
    render(<Basic disabled onClick={onClickMock} />);

    const button = screen.getByRole('button', { name: 'Button' });
    await user.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
