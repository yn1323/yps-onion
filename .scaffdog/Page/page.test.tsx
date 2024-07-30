import Page from '@/app/{{ inputs.path }}/page';
import { render } from '@testing-library/react';
import { test } from 'vitest';


test('/{{ inputs.path }}', async () => {
  render(await Page())
});
