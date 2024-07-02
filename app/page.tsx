import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import zod from 'zod';

export const metadata = {
  title: 'App Router',
};

const MainPage = () => {
  zod.setErrorMap(customErrorMap);
  return <h1 className="border text-gray-500">App Router</h1>;
};

export default MainPage;
