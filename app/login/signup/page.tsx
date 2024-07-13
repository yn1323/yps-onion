import { SignupForm } from '@/components/features/Signin/SignupForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const RegisterPage = () => {
  return (
    <Animation>
      <Center>
        <SignupForm />
      </Center>
    </Animation>
  );
};
export default RegisterPage;
