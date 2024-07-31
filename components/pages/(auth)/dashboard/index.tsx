import { SignoutButton } from '@/components/features/Signout/SignoutButton';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

export const DashboardPage = () => {
  return <DashboardPageInner />;
};

export const DashboardPageInner = () => {
  return (
    <Animation>
      <Center>
        <div>this is Dashboard {process.cwd()}</div>
        <SignoutButton />
      </Center>
    </Animation>
  );
};
