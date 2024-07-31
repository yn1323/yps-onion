'use server';

type SignUpUserArgs = {
  userId: string;
  userName: string;
};
export const signUpUser = async ({ userId, userName }: SignUpUserArgs) => {
  console.log('signUpUser Started');
  console.log('userId: ', userId);
  console.log('userName: ', userName);
  console.log('signUpUser Ended');

  return true;
};
