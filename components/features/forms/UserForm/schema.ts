import { USER_MAX_LENGTH, USER_MIN_LENGTH } from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { z } from 'zod';

export const Schema = z.object({
  user: z
    .string()
    .min(1)
    .superRefine(betweenLength(USER_MIN_LENGTH, USER_MAX_LENGTH)),
});
