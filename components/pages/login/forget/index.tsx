import { ResetPasswordForm } from '@/components/features/Signin/ResetPasswordForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

export const LoginForgetPage = () => {
  return <LoginForgetPageInner />;
};

export const LoginForgetPageInner = () => {
  return (
    <Animation>
      <Center>
        <ResetPasswordForm />
      </Center>
    </Animation>
  );
};
