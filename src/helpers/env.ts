export const getEnv = () => {
  return {
    NEXT_PUBLIC_IS_LOCAL: process.env.NEXT_PUBLIC_IS_LOCAL === 'true',
    IS_LOCAL: process.env.IS_LOCAL === 'true',
  };
};
