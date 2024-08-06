import prisma from '@/prisma/libs/db';
import type { BaseFetch } from '@/src/services/common/fetch';
import type { Prisma } from '@prisma/client';
import type { NextRequest } from 'next/server';

type Path = {
  params: {
    userId: string;
  };
};

export type GetAuthUser = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
};

const GetApiName = 'GetAuthUser';
export const GET = async (_: NextRequest, { params: { userId } }: Path) => {
  console.log(`${GetApiName} Started`);

  const result = await prisma.user
    .findUnique({
      where: {
        userId,
      },
    })
    .catch((e) => {
      console.error(e);
      console.error(`${GetApiName} Failed`);
    });

  console.trace(result);
  console.log(`${GetApiName} Ended`);

  return Response.json({
    success: !!result,
    result,
  });
};

export type PostAuthUser = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
  requestOptions: {
    query: Prisma.UserCreateInput;
  };
};

const PostApiName = 'PostAuthUser';
export const POST = async (request: NextRequest) => {
  console.log(`${PostApiName} Started`);

  const data: PostAuthUser['requestOptions']['query'] = await request.json();
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
