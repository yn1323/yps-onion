import prisma from '@/prisma/libs/db';
import type { BaseFetch } from '@/src/services/common/fetch';
import type { Prisma } from '@prisma/client';
import type { NextRequest } from 'next/server';

export type PostUserSignup = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
  requestOptions: {
    query: Prisma.UserCreateInput;
  };
};

const PostApiName = 'PostUserSignup';
export const POST = async (request: NextRequest) => {
  console.log(`${PostApiName} Started`);

  const data: PostUserSignup['requestOptions']['query'] = await request.json();
  console.trace(data);

  const result = await prisma.user
    .create({
      data,
    })
    .catch((e) => {
      console.error(e);
      console.error(`${PostApiName} Failed`);
    });

  console.trace(result);
  console.log(`${PostApiName} Ended`);

  return Response.json({
    success: !!result,
    result,
  });
};
