import { ShopFormInner } from '@/components/features/forms/ShopForm';
import { useShopForm } from '@/components/features/forms/ShopForm/hooks';
import { composeStories } from '@storybook/react';
import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, it, test, vi } from 'vitest';
import * as stories from './index.stories';

const user = userEvent.setup();

const { Basic } = composeStories(stories);

describe('ShopForm Components', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  describe('Shop Name Error', () => {
    test('Required', async () => {
      render(<Basic />);
      const input = screen.getByLabelText('店舗名');
      fireEvent.focus(input);
      fireEvent.blur(input);
      expect(await screen.findByText('必須項目です')).toBeInTheDocument();
    });
    test('Max Length', async () => {
      render(<Basic />);
      const input = screen.getByLabelText('店舗名');
      await userEvent.click(input);
      await userEvent.paste('a'.repeat(51));
      fireEvent.blur(input);
      expect(
        await screen.findByText('2〜50文字で入力してください'),
      ).toBeInTheDocument();
    });
    test('Error to be removed', async () => {
      render(<Basic />);
      const input = screen.getByLabelText('店舗名');
      fireEvent.focus(input);
      fireEvent.blur(input);
      expect(await screen.findByText('必須項目です')).toBeInTheDocument();
      await user.type(input, '0123456789@123.com');
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.queryByText('必須項目です')).not.toBeInTheDocument();
      });
    });
    describe('Shift Start Time Error', () => {
      it('Required', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('開始時間');
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(
          await screen.findByText('時刻を入力してください'),
        ).toBeInTheDocument();
      });
      it('End with dividable by 15', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('開始時間');
        const submit = screen.getByRole('button', { name: '登録' });
        await userEvent.type(input, '00:01');
        await userEvent.click(submit);
        expect(
          await screen.findByText('15分単位で入力してください'),
        ).toBeInTheDocument();
      });
      it('Error to be removed', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('開始時間');
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(
          await screen.findByText('時刻を入力してください'),
        ).toBeInTheDocument();
        await userEvent.type(input, '00:15');
        fireEvent.blur(input);

        await waitFor(() => {
          expect(
            screen.queryByText('15分単位で入力してください'),
          ).not.toBeInTheDocument();
        });
      });
    });
    describe('Shift End Time Error', () => {
      it('Required', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('終了時間');
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(
          await screen.findByText('時刻を入力してください'),
        ).toBeInTheDocument();
      });
      it('End with dividable by 15', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('終了時間');
        const submit = screen.getByRole('button', { name: '登録' });
        await userEvent.type(input, '00:01');
        await userEvent.click(submit);
        expect(
          await screen.findByText('15分単位で入力してください'),
        ).toBeInTheDocument();
      });
      it('Error to be removed', async () => {
        render(<Basic />);
        const input = screen.getByLabelText('終了時間');
        fireEvent.focus(input);
        fireEvent.blur(input);
        expect(
          await screen.findByText('時刻を入力してください'),
        ).toBeInTheDocument();
        await userEvent.type(input, '00:15');
        fireEvent.blur(input);

        await waitFor(() => {
          expect(
            screen.queryByText('15分単位で入力してください'),
          ).not.toBeInTheDocument();
        });
      });
    });
  });
  describe('Submit', () => {
    const onSubmitMock = vi.fn();
    test('Submit validation', async () => {
      const { result } = renderHook(() => useShopForm({}));
      render(
        <ShopFormInner
          methods={result.current.methods}
          onSubmit={onSubmitMock}
        />,
      );
      const submit = screen.getByRole('button', { name: '登録' });
      await user.click(submit);
      expect(onSubmitMock).not.toHaveBeenCalled();

      const shopName = screen.getByLabelText('店舗名');
      const startTime = screen.getByLabelText('開始時間');
      const endTime = screen.getByLabelText('終了時間');
      const frequency = screen.getByLabelText('シフト提出頻度');
      await user.type(shopName, 'shopName');
      await user.type(startTime, '08:00');
      await user.type(endTime, '23:30');
      await user.selectOptions(frequency, '1m');
      await user.click(submit);

      // react-hook-formの利用しない引数も含まれるためexpect.objectContaining, expect.arrayContainingで判定しない
      expect(onSubmitMock.mock.calls[0][0]).toStrictEqual({
        shopName: 'shopName',
        start: '08:00',
        end: '23:30',
        submitFrequency: '1m',
      });
    });
    test('Submit validation with User Name', async () => {
      const { result } = renderHook(() => useShopForm({}));
      render(
        <ShopFormInner
          methods={result.current.methods}
          onSubmit={onSubmitMock}
        />,
      );
      const submit = screen.getByRole('button', { name: '登録' });
      await user.click(submit);
      expect(onSubmitMock).not.toHaveBeenCalled();

      const shopName = screen.getByLabelText('店舗名');
      const startTime = screen.getByLabelText('開始時間');
      const endTime = screen.getByLabelText('終了時間');
      const frequency = screen.getByLabelText('シフト提出頻度');
      await user.type(shopName, 'shopName');
      await user.type(startTime, '08:00');
      await user.type(endTime, '23:30');
      await user.selectOptions(frequency, '1m');
      await user.click(submit);

      // react-hook-formの利用しない引数も含まれるためexpect.objectContaining, expect.arrayContainingで判定しない
      expect(onSubmitMock.mock.calls[0][0]).toStrictEqual({
        shopName: 'shopName',
        start: '08:00',
        end: '23:30',
        submitFrequency: '1m',
      });
    });
  });
});
