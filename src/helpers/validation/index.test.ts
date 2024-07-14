import { betweenLength, time } from '@/src/helpers/validation';
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
  it('time', () => {
    const zodSchema = z.string().superRefine(time(5));

    expect(zodSchema.safeParse('00:00').success).toBeTruthy();
    expect(zodSchema.safeParse('24:00').success).toBeFalsy();
    expect(zodSchema.safeParse('04:60').success).toBeFalsy();
    expect(zodSchema.safeParse('23:55').success).toBeTruthy();
    expect(zodSchema.safeParse('23:49').success).toBeFalsy();
    expect(zodSchema.safeParse('23:51').error?.errors[0].message).toStrictEqual(
      '5分単位で入力してください',
    );
    expect(zodSchema.safeParse('aaa').success).toBeFalsy();
    expect(zodSchema.safeParse('aaa').error?.errors[0].message).toStrictEqual(
      '時刻を入力してください',
    );
  });
});
