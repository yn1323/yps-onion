import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';
import { serverFetch } from '@/src/services/common/fetch';

async function initialize() {
  const { user } = await serverFetch<GetSelf>('/auth/self');
  if (!user) {
    return { name: '', uid: '', picture: '' };
  }
  return user;
}

const ShopSignupPage = async () => {
  await initialize();
  return (
    <Animation>
      <Center>
        <div>aaa</div>
      </Center>
    </Animation>
  );
};
export default ShopSignupPage;
