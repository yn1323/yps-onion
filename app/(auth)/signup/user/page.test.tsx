import Page from '@/app/(auth)/signup/user/page';
import { render } from '@testing-library/react';
import { test } from 'vitest';

test('/(auth)/signup/user', async () => {
  render(await Page());
});
