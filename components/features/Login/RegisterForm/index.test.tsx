import { RegisterFormInner } from '@/components/features/Login/RegisterForm';
import { useRegisterForm } from '@/components/features/Login/RegisterForm/hooks';
import { composeStories } from '@storybook/react';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('RegisterForm Components', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  describe('Email Error', () => {
    test('Required', async () => {
      render(<Basic />);
      const emailInput = screen.getByLabelText('メールアドレス');
      fireEvent.focus(emailInput);
      fireEvent.blur(emailInput);
      expect(await screen.findByText('必須項目です')).toBeInTheDocument();
    });
    test('Error to be removed', async () => {
      render(<Basic />);
      const emailInput = screen.getByLabelText('メールアドレス');
      fireEvent.focus(emailInput);
      fireEvent.blur(emailInput);
      expect(await screen.findByText('必須項目です')).toBeInTheDocument();
      await user.type(emailInput, '0123456789@123.com');
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(screen.queryByText('必須項目です')).not.toBeInTheDocument();
      });
    });
  });
  describe('Submit', () => {
    const onSubmitMock = vi.fn();
    test('Submit validation', async () => {
      const { result } = renderHook(() => useRegisterForm());
      render(
        <RegisterFormInner
          methods={result.current.methods}
          onSubmit={onSubmitMock}
        />,
      );
      const submitButton = screen.getByText('メールアドレスでログイン');
      await user.click(submitButton);
      expect(onSubmitMock).not.toHaveBeenCalled();

      const emailInput = screen.getByLabelText('メールアドレス');
      const passwordInput = screen.getByLabelText('パスワード');
      await user.type(emailInput, 'aaa@aaa.com');
      await user.type(passwordInput, '0123456789');
      await user.click(submitButton);

      // react-hook-formの利用しない引数も含まれるためexpect.objectContaining, expect.arrayContainingで判定しない
      expect(onSubmitMock.mock.calls[0][0]).toStrictEqual({
        mail: 'aaa@aaa.com',
        password: '0123456789',
      });
    });
  });
});
