import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Page from './page';

test('Login', () => {
  render(<Page />);
  expect(true).toBeTruthy();
});
