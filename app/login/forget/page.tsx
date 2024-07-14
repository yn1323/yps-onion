import { ResetPasswordForm } from '@/components/features/Signin/ResetPasswordForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const PasswordForgetPage = () => {
  return (
    <Animation>
      <Center>
        <ResetPasswordForm />
      </Center>
    </Animation>
  );
};
export default PasswordForgetPage;
