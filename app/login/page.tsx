import { SigninForm } from '@/components/features/Signin/SigninForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const LoginPage = () => {
  return (
    <Animation>
      <Center>
        <SigninForm />
      </Center>
    </Animation>
  );
};
export default LoginPage;
