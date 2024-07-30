import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import * as authHook from '@/src/hooks/useAuth';
import { setProjectAnnotations } from '@storybook/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import zod from 'zod';
import * as globalStorybookConfig from '../../../.storybook/preview';

setProjectAnnotations(globalStorybookConfig);
zod.setErrorMap(customErrorMap);

// Library mock
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

vi.spyOn(console, 'log').mockReturnValue();

vi.spyOn(authHook, 'useAuth').mockReturnValue({
  userId: 'test-user-id',
});
