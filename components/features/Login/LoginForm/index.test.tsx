import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach } from 'node:test';
import { describe, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('LoginForm Components', () => {
  // const onClickMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  describe('Error Check', () => {
    test('Email Error', async () => {
      render(<Basic />);
      const emailInput = screen.getByLabelText('メールアドレス');
      user.type(emailInput, '');
      user.tab();
      await screen.findByText('必須項目です。');
    });
  });
});
