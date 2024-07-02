import {
  betweenLength,
  maxLength,
  minLength,
  required,
} from '@/src/helpers/validation';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';

describe('Validations', () => {
  it('required', () => {
    const zodSchema = z.string().superRefine(required);
    expect(zodSchema.safeParse('').error?.errors[0].message).toStrictEqual(
      '必須入力です。',
    );
    expect(zodSchema.safeParse('').success).toBeFalsy();
    expect(zodSchema.safeParse('a').success).toBeTruthy();
  });
  it('minLength', () => {
    const zodSchema = z.string().superRefine(minLength(5));
    expect(zodSchema.safeParse('12345').success).toBeTruthy();
    expect(zodSchema.safeParse('1234').error?.errors[0].message).toStrictEqual(
      '最低5文字以上入力してください。',
    );
    expect(zodSchema.safeParse('1234').success).toBeFalsy();
  });
  it('maxLength', () => {
    const zodSchema = z.string().superRefine(maxLength(5));
    expect(zodSchema.safeParse('12345').success).toBeTruthy();
    expect(
      zodSchema.safeParse('123456').error?.errors[0].message,
    ).toStrictEqual('最大入力文字数は5文字です。');
    expect(zodSchema.safeParse('123456').success).toBeFalsy();
  });
  it('betweenLength', () => {
    const zodSchema = z.string().superRefine(betweenLength(5, 10));

    expect(zodSchema.safeParse('12345').success).toBeTruthy();
    expect(zodSchema.safeParse('123456').success).toBeTruthy();
    expect(zodSchema.safeParse('1234567890').success).toBeTruthy();
    expect(
      zodSchema.safeParse('12345678901').error?.errors[0].message,
    ).toStrictEqual('5文字以上10文字以下にしてください。');
    expect(zodSchema.safeParse('12345678901').success).toBeFalsy();
  });
});
