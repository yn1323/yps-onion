'use client';

import { Button } from '@/components/atoms/Button';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';
import { clientFetch } from '@/src/services/common/clientFetch';
import { redirect } from 'next/navigation';

const logout = async () => {
  const res = await clientFetch('/auth/logout', { method: 'POST' });
  redirect('http://localhost:3000/');

  console.log(res);
};

const DashboardPage = () => {
  return (
    <Animation>
      <Center>
        <div>this is Dashboard {process.cwd()}</div>
        <Button onClick={logout}>ログアウト</Button>
      </Center>
    </Animation>
  );
};
export default DashboardPage;
