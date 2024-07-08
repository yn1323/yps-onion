import { Email, Password } from '@/e2e/constants/env';
import type { Page } from '@playwright/test';

export const login = async (page: Page) => {
  await page.goto('/login');

  const logoutButton = await page.getByRole('button', { name: 'ログアウト' });

  if (await logoutButton.isVisible()) {
    await logoutButton.click();
  }
  await page.goto('/login');

  const emailInput = await page.getByRole('textbox', {
    name: 'メールアドレス',
  });
  const passwordInput = await page.getByRole('textbox', { name: 'パスワード' });

  await emailInput.fill(Email);
  await passwordInput.fill(Password);

  await page
    .getByRole('button', {
      name: 'メールアドレスでログイン',
    })
    .click();
};
