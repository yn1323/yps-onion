import type { Page } from '@playwright/test';

export const logout = async (page: Page) => {
  const logoutButton = await page.getByRole('button', { name: 'ログアウト' });

  if (await logoutButton.isVisible()) {
    await logoutButton.click();
  }
};
