import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import '@testing-library/jest-dom';
import zod from 'zod';

zod.setErrorMap(customErrorMap);

// import { cleanup } from '@testing-library/react';
// import { afterAll, afterEach, beforeAll } from 'vitest';

// import { server } from './mocks/node.js';

// beforeAll(() => {
//   server.listen();
// });

// afterEach(() => {
//   server.resetHandlers();
//   cleanup();
// });

// afterAll(() => {
//   server.close();
// });
