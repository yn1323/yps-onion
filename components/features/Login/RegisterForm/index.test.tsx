import { RegisterFormInner } from '@/components/features/Login/RegisterForm';
import * as actions from '@/components/features/Login/RegisterForm/actions';
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
  describe('Password Error', () => {
    test('Required', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
    });
    test('Max Length', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      await user;
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
    });
    test('Error to be removed', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
      await user.type(passwordInput, 'aaaaaaaa');
      fireEvent.blur(passwordInput);
      await waitFor(() => {
        expect(screen.queryByText('必須項目です')).not.toBeInTheDocument();
      });
    });
  });
  describe('PasswordConfirmation Error', () => {
    test('Required', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード(確認)');
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
    });
    test('Max Length', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      await user;
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
    });
    test('Error to be removed', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      fireEvent.focus(passwordInput);
      fireEvent.blur(passwordInput);
      expect(
        await screen.findByText('8〜24文字で入力してください'),
      ).toBeInTheDocument();
      await user.type(passwordInput, 'aaaaaaaa');
      fireEvent.blur(passwordInput);
      await waitFor(() => {
        expect(screen.queryByText('必須項目です')).not.toBeInTheDocument();
      });
    });
  });
  describe('Password matching Error', () => {
    test('Password matching Error', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      const passwordConfirmationInput =
        screen.getByLabelText('パスワード(確認)');
      await user.type(passwordInput, '0123456789');
      await user.type(passwordConfirmationInput, '012345678');
      fireEvent.blur(passwordConfirmationInput);
      expect(
        await screen.findByText('パスワードが一致しません'),
      ).toBeInTheDocument();
    });
    test('Error to be removed', async () => {
      render(<Basic />);
      const passwordInput = screen.getByLabelText('パスワード');
      const passwordConfirmationInput =
        screen.getByLabelText('パスワード(確認)');
      await user.type(passwordInput, '0123456789');
      await user.type(passwordConfirmationInput, '0123456789');
      fireEvent.blur(passwordConfirmationInput);
      await waitFor(() => {
        expect(
          screen.queryByText('パスワードが一致しません'),
        ).not.toBeInTheDocument();
      });
    });
  });
  describe('Submit', () => {
    describe('Validation', () => {
      const onSubmitMock = vi.fn();
      test('Submit validation', async () => {
        const { result } = renderHook(() => useRegisterForm());
        render(
          <RegisterFormInner
            methods={result.current.methods}
            onSubmit={onSubmitMock}
          />,
        );
        const submitButton = screen.getByText('登録');
        await user.click(submitButton);
        expect(onSubmitMock).not.toHaveBeenCalled();

        const emailInput = screen.getByLabelText('メールアドレス');
        const passwordInput = screen.getByLabelText('パスワード');
        const passwordConfirmationInput =
          screen.getByLabelText('パスワード(確認)');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.type(passwordInput, '0123456789');
        await user.type(passwordConfirmationInput, '0123456789');
        await user.click(submitButton);

        // react-hook-formの利用しない引数も含まれるためexpect.objectContaining, expect.arrayContainingで判定しない
        expect(onSubmitMock.mock.calls[0][0]).toStrictEqual({
          mail: 'aaa@aaa.com',
          password: '0123456789',
          passwordConfirmation: '0123456789',
        });
      });
    });
    describe('Signup Operation', () => {
      test('Submit validation', async () => {
        vi.spyOn(actions, 'signup').mockResolvedValue({
          succeeded: true,
          message: '',
        });
        render(<Basic />);
        const submitButton = screen.getByText('登録');
        const emailInput = screen.getByLabelText('メールアドレス');
        const passwordInput = screen.getByLabelText('パスワード');
        const passwordConfirmationInput =
          screen.getByLabelText('パスワード(確認)');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.type(passwordInput, '0123456789');
        await user.type(passwordConfirmationInput, '0123456789');
        await user.click(submitButton);
        expect(
          await screen.findByText(
            '登録が完了しました。登録完了メールを確認してください。',
          ),
        ).toBeInTheDocument();
      });
      test('Signup Failed', async () => {
        vi.spyOn(actions, 'signup').mockResolvedValue({
          succeeded: false,
          message: '',
        });
        render(<Basic />);
        const submitButton = screen.getByText('登録');
        const emailInput = screen.getByLabelText('メールアドレス');
        const passwordInput = screen.getByLabelText('パスワード');
        const passwordConfirmationInput =
          screen.getByLabelText('パスワード(確認)');
        await user.type(emailInput, 'aaa@aaa.com');
        await user.type(passwordInput, '0123456789');
        await user.type(passwordConfirmationInput, '0123456789');
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
