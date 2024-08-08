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
export const GET = async (_: NextRequest, path: Path) => {
  console.log(`${GetApiName} Started`, path.params);

  const result = await prisma.user
    .findUnique({
      where: {
        userId: path.params.userId,
      },
    })
    .catch((e) => {
      console.error(e);
      console.error(`${GetApiName} Failed`);
    });

  console.log(`${GetApiName} Ended`, result);

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
  const data: PostAuthUser['requestOptions']['query'] = await request.json();
  console.log(`${PostApiName} Started`, data);

  const result = await prisma.user
    .create({
      data,
    })
    .catch((e) => {
      console.error(e);
      console.error(`${PostApiName} Failed`);
    });

  console.log(`${PostApiName} Ended`, result);

  return Response.json({
    success: !!result,
    result,
  });
};
