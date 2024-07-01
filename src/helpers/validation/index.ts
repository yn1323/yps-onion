import { z } from 'zod';

export const required = (val: string, ctx: z.RefinementCtx) => {
  console.log(val);
  if (!val.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: '必須入力です。',
    });
  }
};

export const maxLength =
  (max: number) => (val: string, ctx: z.RefinementCtx) => {
    if (val.length > max) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `最大入力文字数は${max}文字です。`,
      });
    }
  };

export const minLength =
  (min: number) => (val: string, ctx: z.RefinementCtx) => {
    if (val.length < min) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `最低${min}文字以上入力してください。`,
      });
    }
  };
