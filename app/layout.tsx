import { Toast } from '@/components/atoms/Toast';
import { customErrorMap } from '@/src/helpers/validation/customErrorMap';
import type { ReactNode } from 'react';
import zod from 'zod';
import '../styles/globals.css';
import './setup';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  zod.setErrorMap(customErrorMap);
  return (
    <html lang="ja">
      <body className="h-screen">
        {children}
        <Toast />
      </body>
    </html>
  );
};

export default RootLayout;
