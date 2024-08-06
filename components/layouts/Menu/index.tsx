import { Button } from '@/components/atoms/Button';

type Props = {};

const Delimiter = () => <div className="h-0.5 w-full bg-slate-300" />;

export const Menu = ({}: Props) => {
  return (
    <nav className="h-screen w-60 bg-slate-400 p-3">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full flex-col items-center justify-between space-y-3">
          <div>左</div>
          <div className="flex w-full justify-between gap-4">
            <div>あばた</div>
            <div className="grow">名前</div>
          </div>
          <Delimiter />
          <div>所属</div>
          <Delimiter />
        </div>
        <div>Avatar</div>
        <div className="flex w-full flex-col items-center justify-between space-y-3">
          <Delimiter />
          <Button fullWidth>ログアウト</Button>
        </div>
      </div>
    </nav>
  );
};
