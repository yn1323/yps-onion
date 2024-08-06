import prisma from '@/prisma/libs/db';
import type { BaseFetch } from '@/src/services/common/fetch';
import type { Prisma } from '@prisma/client';
import type { NextRequest } from 'next/server';

type Path = {
  params: {
    userId: string;
  };
};

export type {{ inputs.method | pascal }}{{ inputs.pathWithoutSlash | pascal }} = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
};

const {{ inputs.method | pascal }}ApiName = '{{ inputs.method | pascal }}{{ inputs.pathWithoutSlash | pascal }}';
export const {{ inputs.method | constant }} = async (_: NextRequest, { params: { userId } }: Path) => {
  console.log(`${{{ inputs.method | pascal }}ApiName} Started`);

  const result = await prisma.user
    .findUnique({
      where: {
        userId,
      },
    })
    .catch((e) => {
      console.error(e);
      console.error(`${{{ inputs.method | pascal }}ApiName} Failed`);
    });

  console.trace(result);
  console.log(`${{{ inputs.method | pascal }}ApiName} Ended`);

  return Response.json({
    success: !!result,
    result,
  });
};