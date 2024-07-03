import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach } from 'node:test';
import { afterEach, describe, expect, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('LoginForm Components', () => {
  beforeEach(() => {});
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
    test('Format', async () => {
      render(<Basic />);
      const emailInput = screen.getByLabelText('メールアドレス');
      await user.type(emailInput, '0123456789');
      fireEvent.blur(emailInput);
      expect(
        await screen.findByText('メールアドレスの形式で入力してください'),
      ).toBeInTheDocument();
    });
    test('Max Length', async () => {
      render(<Basic />);
      const emailInput = screen.getByLabelText('メールアドレス');
      await user.type(emailInput, `${'0123456789'.repeat(9)}@01234.com`);
      fireEvent.blur(emailInput);
      expect(
        screen.queryByText('100文字以内で入力してください'),
      ).not.toBeInTheDocument();
      await user.type(emailInput, `${'0123456789'.repeat(9)}@012345.com`);
      fireEvent.blur(emailInput);
      expect(
        await screen.findByText('100文字以内で入力してください'),
      ).toBeInTheDocument();
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
  describe('Link', () => {
    test('New Registration', async () => {
      render(<Basic />);
      const link = screen.getByText('新規登録');
      expect(link).toHaveAttribute('href', '/login/new');
    });
    test('Forget Password', async () => {
      render(<Basic />);
      const link = screen.getByText('パスワードを忘れた方');
      expect(link).toHaveAttribute('href', '/login/forget');
    });
  });
});
