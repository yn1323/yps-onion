import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import zod from 'zod';

zod.setErrorMap(customErrorMap);

// Library mock
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

vi.spyOn(console, 'log').mockReturnValue();
