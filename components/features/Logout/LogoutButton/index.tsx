'use client';

import { Button } from '@/components/atoms/Button';
import { logout } from '@/components/features/Logout/LogoutButton/actions';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        startTransition(async () => {
          await logout();
          router.push('/');
        });
      }}
      disabled={isPending}
    >
      ログアウト
    </Button>
  );
};
