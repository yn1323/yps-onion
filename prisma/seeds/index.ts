import { createUser } from '@/prisma/seeds/data/user';

const main = async () => {
  await createUser();
};

main();
