import prisma from '@/prisma/libs/db';
import type { BaseFetch } from '@/src/services/common/fetch';
import { revalidatePath } from 'next/cache';
import type { NextRequest } from 'next/server';

type userExistenceDocument = {
  userId: string;
};

export type PostUserExistence = BaseFetch & {
  response: {
    exist: true;
  };
  requestOptions: {
    query: userExistenceDocument;
  };
};
export const POST = async (request: NextRequest) => {
  console.log('PostUserExistence Started');
  const { userId }: PostUserExistence['requestOptions']['query'] =
    await request.json();

  // DBチェック
  const result = await prisma.user
    .findUnique({
      where: {
        userId,
      },
    })
    .catch((e) => {
      console.error(e);
      console.error('Failed: getUser', userId);
    });

  console.log('PostUserExistence: ', result);

  return Response.json({ exist: !!result });
};

export const revalidate = () => {
  revalidatePath('/auth/user');
};
