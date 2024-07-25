export const successLog = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any,
  { label }: { label: string },
) => {
  console.log('Succeeded: ', label);
  console.log(JSON.stringify(data, null, 2));
};
