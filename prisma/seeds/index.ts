import { createUser } from '@/prisma/seeds/data/user';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
  await createUser();
};

main();
