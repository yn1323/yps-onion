import { Button } from '@/components/atoms/Button';
import { LinkButton } from '@/components/atoms/LinkButton';
import { SelectButton } from '@/components/atoms/SelectButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FcAddDatabase,
  FcAlarmClock,
  FcHome,
  FcOpenedFolder,
  FcOvertime,
  FcSupport,
} from 'react-icons/fc';
import { IoPersonCircle } from 'react-icons/io5';

const Delimiter = () => <div className="h-0.5 w-full bg-slate-300" />;

export const Links = {
  top: { icon: <FcHome />, label: 'マイページ', link: '/dashboard' },
  shift: { icon: <FcOvertime />, label: 'シフト', link: '/shift' },
  attendance: { icon: <FcOpenedFolder />, label: '勤務記録', link: '/history' },
  timeCard: {
    icon: <FcAlarmClock />,
    label: 'タイムカード',
    link: '/timecard',
  },
  config: {
    icon: <FcSupport />,
    label: '設定',
    link: '/config',
  },
} as const;

type Props = {
  userName: string;
  shops: {
    id: string;
    name: string;
    selected?: boolean;
  }[];
};
export const Menu = ({ userName, shops }: Props) => {
  const router = useRouter();
  const shopOptions = shops.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <nav className="h-screen w-52 bg-slate-200 p-3">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full flex-col items-stretch justify-between space-y-3">
          <Link
            href="/profile"
            className="flex w-full items-center justify-between gap-4 rounded-sm"
          >
            <IoPersonCircle size="36" className="text-slate-700" />
            <div className="grow">{userName}</div>
          </Link>

          {shopOptions.length === 0 ? (
            <span className="text-center text-xs">
              店舗が登録されていません。
            </span>
          ) : shopOptions.length === 1 ? (
            <span className="text-ellipsis text-center">{shops[0].name}</span>
          ) : (
            <SelectButton
              onSelect={(value) => {
                router.push(`/${value}`);
              }}
              options={shopOptions}
              forceSelect
            />
          )}

          <Delimiter />
          <LinkButton
            theme="skeleton"
            icon={<FcAddDatabase />}
            fullWidth
            href={'/shop/create'}
            align="left"
          >
            店舗の作成 / 登録
          </LinkButton>
          <Delimiter />
          <ul className="space-y-4">
            {Object.values(Links).map(({ icon, label, link }) => (
              <li key={label} className="text-left">
                <LinkButton
                  theme="skeleton"
                  icon={icon}
                  fullWidth
                  href={link}
                  align="left"
                >
                  {label}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col items-center justify-between space-y-3">
          <Delimiter />
          <Button fullWidth>ログアウト</Button>
        </div>
      </div>
    </nav>
  );
};
