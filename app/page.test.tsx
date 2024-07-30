import * as actions from '@/app/actions';
import Page from '@/app/page';
import { render } from '@testing-library/react';
import { test, vi } from 'vitest';

vi.spyOn(actions, 'revalidateAuth').mockReturnValue();

test('App Router: Works with Server Components', async () => {
  render(await Page());
});
