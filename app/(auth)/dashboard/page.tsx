import { Button } from '@/components/atoms/Button';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const DashboardPage = () => {
  console.log('DASHBOARD');
  return (
    <Animation>
      <Center>
        <div>this is Dashboard {process.cwd()}</div>
        <Button>ログアウト</Button>
      </Center>
    </Animation>
  );
};
export default DashboardPage;
