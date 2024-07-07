import { z } from 'zod';

export const betweenLength =
  (min: number, max: number) => (val: string, ctx: z.RefinementCtx) => {
    if (val.length < min || val.length > max) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `${min}〜${max}文字で入力してください`,
      });
    }
  };
