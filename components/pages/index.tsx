import Link from 'next/link';

export const metadata = {
  title: 'YPS-Onion',
};

export const MainPage = async () => {
  return <MainPageInner />;
};

export const MainPageInner = () => {
  return (
    <main>
      <h1 className="border text-gray-500">YPS-Onion</h1>
      <Link href="/login">ログイン</Link>
    </main>
  );
};
