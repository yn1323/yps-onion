import { SignupForm } from '@/components/features/Signin/SignupForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

export const LoginSignupPage = () => {
  return <LoginSignupPageInner />;
};

export const LoginSignupPageInner = () => {
  return (
    <Animation>
      <Center>
        <SignupForm />
      </Center>
    </Animation>
  );
};
