import { UserForm } from '@/components/features/forms/UserForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

export const SignupUserPage = () => {
  return <SignupUserPageInner />;
};

export const SignupUserPageInner = () => {
  return (
    <Animation>
      <Center>
        <UserForm />
      </Center>
    </Animation>
  );
};
