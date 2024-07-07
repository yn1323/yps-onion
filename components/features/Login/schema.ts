import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { z } from 'zod';

export const Schema = z.object({
  mail: z.string().min(1).max(100).email(),
  password: z
    .string()
    .superRefine(betweenLength(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)),
});
