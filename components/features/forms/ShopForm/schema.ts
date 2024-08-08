import type { Option } from '@/components/forms/Select';
import {
  SHOP_MAX_LENGTH,
  SHOP_MIN_LENGTH,
  type ShopTimeUnitType,
} from '@/src/constants/validations';
import { betweenLength, select, time } from '@/src/helpers/validation';
import { z } from 'zod';

export const options: Option[] = [
  {
    label: '1週間ごと',
    value: '1w',
  },
  {
    label: '2週間ごと',
    value: '2w',
  },
  {
    label: '1ヶ月ごと',
    value: '1m',
  },
];

export const Schema = z.object({
  shopName: z
    .string()
    .min(1)
    .superRefine(betweenLength(SHOP_MIN_LENGTH, SHOP_MAX_LENGTH)),
  start: z.string().superRefine(time(15 as const satisfies ShopTimeUnitType)),
  end: z.string().superRefine(time(15 as const satisfies ShopTimeUnitType)),
  submitFrequency: z
    .string()
    .superRefine(select({ options, forceSelect: true })),
});
