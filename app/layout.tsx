import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import type { ReactNode } from 'react';
import zod from 'zod';
import '../styles/globals.css';

type Props = {
  children: ReactNode;
};

zod.setErrorMap(customErrorMap);

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body className="h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
