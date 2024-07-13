import { SignoutButton } from '@/components/features/Signout/SignoutButton';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const DashboardPage = () => {
  return (
    <Animation>
      <Center>
        <div>this is Dashboard {process.cwd()}</div>
        <SignoutButton />
      </Center>
    </Animation>
  );
};
export default DashboardPage;
