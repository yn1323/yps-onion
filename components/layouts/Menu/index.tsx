import { Button } from '@/components/atoms/Button';
import { LinkButton } from '@/components/atoms/LinkButton';
import {
  FcAlarmClock,
  FcAssistant,
  FcHome,
  FcOpenedFolder,
  FcOvertime,
  FcSupport,
  FcUndo,
} from 'react-icons/fc';

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
  help: {
    icon: <FcAssistant />,
    label: '使い方',
    link: '/help',
  },
  logout: {
    icon: <FcUndo />,
    label: 'ログアウト',
    link: '/logout',
  },
} as const;

type Props = {};
export const Menu = ({}: Props) => {
  return (
    <nav className="h-screen w-52 bg-slate-200 p-3">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex w-full flex-col items-stretch justify-between space-y-3">
          <div>左</div>
          <div className="flex w-full justify-between gap-4">
            <div>あばた</div>
            <div className="grow">名前</div>
          </div>
          <Delimiter />
          <div>所属</div>
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
