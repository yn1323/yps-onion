import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

async function initialize() {
  const { user } = await serverFetch<GetSelf>('/auth/self');
  if (!user) {
    return { name: '', uid: '', picture: '' };
  }
  return user;
}

const {{ inputs.component | pascal }}Page = async() => {
  await initialize();
  return (
    <Animation>
      <Center>
        <div>aaa</div>
      </Center>
    </Animation>
  );
};
export default {{ inputs.component | pascal }}Page;
