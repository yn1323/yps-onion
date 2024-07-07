import { LoginForm } from '@/components/features/Login/LoginForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const LoginPage = () => {
  return (
    <Animation>
      <Center>
        <LoginForm />
      </Center>
    </Animation>
  );
};
export default LoginPage;
