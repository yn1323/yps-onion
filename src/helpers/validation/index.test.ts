import { betweenLength } from '@/src/helpers/validation';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';

describe('Validations', () => {
  it('betweenLength', () => {
    const zodSchema = z.string().superRefine(betweenLength(5, 10));

    expect(zodSchema.safeParse('12345').success).toBeTruthy();
    expect(zodSchema.safeParse('123456').success).toBeTruthy();
    expect(zodSchema.safeParse('1234567890').success).toBeTruthy();
    expect(
      zodSchema.safeParse('12345678901').error?.errors[0].message,
    ).toStrictEqual('5〜10文字で入力してください');
    expect(zodSchema.safeParse('12345678901').success).toBeFalsy();
  });
});
