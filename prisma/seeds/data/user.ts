import prisma from '@/prisma/libs/db';
import { successLog } from '@/prisma/seeds/utils/log';
import type { Prisma } from '@prisma/client';
export const createUser = async () => {
  const data: Prisma.UserCreateInput = {
    userName: 'ユーザー 太郎',
    userId: process.env.TEST_USER_ID,
  };
  const result = await prisma.user
    .createMany({
      data,
    })
    .catch((e) => {
      console.error(e);
      console.error('Failed: createUser');
    });

  if (!result) {
    return;
  }
  successLog(data, { label: 'createUser' });
};
