'use client';

import { Button } from '@/components/atoms/Button';
import { signout } from '@/components/features/Signout/SignoutButton/actions';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export const SignoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        startTransition(async () => {
          await signout();
          router.push('/');
        });
      }}
      disabled={isPending}
    >
      ログアウト
    </Button>
  );
};
