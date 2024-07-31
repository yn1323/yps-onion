import { SigninForm } from '@/components/features/Signin/SigninForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

export const LoginPage = () => <LoginPageInner />;

export const LoginPageInner = () => {
  return (
    <Animation>
      <Center>
        <SigninForm />
      </Center>
    </Animation>
  );
};
