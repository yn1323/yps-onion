import { login } from '@/e2e/util/operations/login';
import { logout } from '@/e2e/util/operations/logout';
import test, { expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Login Page Transition', () => {
  test('Transition', async ({ page }) => {
    await page.goto('/');

    console.log('current page url');
    console.log(await page.url());

    await page.getByRole('link', { name: 'ログイン' }).click();
    await page.getByRole('link', { name: '新規登録' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();
    await page.getByRole('link', { name: 'パスワードを忘れた方' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();

    await login(page);
    await page.waitForURL('/dashboard');
    expect(await page).toHaveURL('/dashboard');

    await logout(page);
  });
});
