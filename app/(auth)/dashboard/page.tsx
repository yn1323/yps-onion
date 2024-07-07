import { LogoutButton } from '@/components/features/Logout/LogoutButton';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const DashboardPage = () => {
  return (
    <Animation>
      <Center>
        <div>this is Dashboard {process.cwd()}</div>
        <LogoutButton />
      </Center>
    </Animation>
  );
};
export default DashboardPage;
