import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Success } = composeStories(stories);

describe('Toast Components', () => {
  const onCloseMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Event handler', async () => {
    render(<Success onClose={onCloseMock} />);
    const closeButton = screen.getByRole('button', { name: 'closeToast' });
    await user.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledOnce();
  });
});
