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
    // Decoratorにも存在するため1つ目の要素を抽出
    const closeButton = screen.getAllByRole('button', {
      name: 'closeToast',
    })[0];
    await user.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledOnce();
  });
});
