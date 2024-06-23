import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach } from 'node:test';
import { describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('{{ inputs.component | pascal }} Components', () => {
  const onClickMock = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Basic', async () => {
    render(<Basic />);

  });
});
