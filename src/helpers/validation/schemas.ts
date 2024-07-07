import { z } from 'zod';

export const UserSchema = z.object({
  userName: z.string().max(20),
  mail: z.string().email(),
  password: z.string().max(20),
});
