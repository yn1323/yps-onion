import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const { Basic } = composeStories(stories);

describe('SelectButton Components', () => {
  const onSelectMock = vi.fn<(value: string) => void>();
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Call onSelect Function', async () => {
    render(<Basic onSelect={onSelectMock} />);
    const select = screen.getByLabelText('Select Label');
    expect(select).toHaveValue('3');

    await userEvent.selectOptions(select, '2');
    expect(select).toHaveValue('2');
    expect(onSelectMock).toHaveBeenCalledWith('2');
  });
});
