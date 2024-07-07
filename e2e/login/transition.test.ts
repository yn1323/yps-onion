import test from '@playwright/test';
import { describe } from 'node:test';

describe('Login Page Transition', () => {
  test('Transition', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'ログイン' }).click();
    await page.getByRole('link', { name: '新規登録' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();
    await page.getByRole('link', { name: 'パスワードを忘れた方' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();
  });
});
