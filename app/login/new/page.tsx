import { RegisterForm } from '@/components/features/Login/RegisterForm';
import { Animation } from '@/components/layouts/Animation';
import { Center } from '@/components/layouts/Center';

const RegisterPage = () => {
  return (
    <Animation>
      <Center>
        <RegisterForm />
      </Center>
    </Animation>
  );
};
export default RegisterPage;
