import { ResetPasswordFormInner } from '@/components/features/Login/ResetPasswordForm';
import { useResetPasswordForm } from '@/components/features/Login/ResetPasswordForm/hooks';
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
import * as actions from './actions';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('ResetPasswordForm Components', () => {
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
    describe('Validation', () => {
      const onSubmitMock = vi.fn();
      test('Submit validation', async () => {
        const { result } = renderHook(() => useResetPasswordForm());
        render(
          <ResetPasswordFormInner
            methods={result.current.methods}
            onSubmit={onSubmitMock}
          />,
        );
        const submitButton = screen.getByText('パスワードリセット');
        await user.click(submitButton);
        expect(onSubmitMock).not.toHaveBeenCalled();

        const emailInput = screen.getByLabelText('メールアドレス');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.click(submitButton);

        // react-hook-formの利用しない引数も含まれるためexpect.objectContaining, expect.arrayContainingで判定しない
        expect(onSubmitMock.mock.calls[0][0]).toStrictEqual({
          mail: 'aaa@aaa.com',
        });
      });
    });

    describe('Signup Operation', () => {
      test('Submit validation', async () => {
        vi.spyOn(actions, 'resetPassword').mockResolvedValue({
          succeeded: true,
          message: '',
        });
        render(<Basic />);
        const submitButton = screen.getByText('パスワードリセット');
        const emailInput = screen.getByLabelText('メールアドレス');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.click(submitButton);
        expect(
          await screen.findByText(
            'パスワードをリセットしました。登録メールアドレスを確認してください。',
          ),
        ).toBeInTheDocument();
      });
      test('Signup Failed', async () => {
        vi.spyOn(actions, 'resetPassword').mockResolvedValue({
          succeeded: false,
          message: '',
        });
        render(<Basic />);
        const submitButton = screen.getByText('パスワードリセット');
        const emailInput = screen.getByLabelText('メールアドレス');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.click(submitButton);
        expect(
          await screen.findByText(
            'エラーが発生しました。再度時間をおいて試してください。',
          ),
        ).toBeInTheDocument();
      });
    });
  });
});
