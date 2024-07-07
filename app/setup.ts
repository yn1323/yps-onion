'use client';

import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import zod from 'zod';

zod.setErrorMap(customErrorMap);
