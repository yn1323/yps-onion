import { UserForm } from '@/components/features/forms/UserForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const UserSignupPage = () => {
  return (
    <Animation>
      <Center>
        <UserForm />
      </Center>
    </Animation>
  );
};
export default UserSignupPage;
