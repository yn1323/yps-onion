import {
  SHOP_MAX_LENGTH,
  SHOP_MIN_LENGTH,
  SHOP_SUBMIT_FREQUENCY,
  type ShopTimeUnitType,
} from '@/src/constants/validations';
import { betweenLength, time } from '@/src/helpers/validation';
import { z } from 'zod';

export const Schema = z.object({
  name: z
    .string()
    .min(1)
    .superRefine(betweenLength(SHOP_MIN_LENGTH, SHOP_MAX_LENGTH)),
  start: z.string().superRefine(time(15 as const satisfies ShopTimeUnitType)),
  end: z.string().superRefine(time(15 as const satisfies ShopTimeUnitType)),
  submitFrequency: z.enum(SHOP_SUBMIT_FREQUENCY),
});
