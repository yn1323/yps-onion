import { ResetPasswordForm } from '@/components/features/Login/ResetPasswordForm';
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
