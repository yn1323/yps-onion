import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { type VariantProps, tv } from 'tailwind-variants';

type ButtonColorTypes = 'primary' | 'secondary';
type ButtonTheme = 'variant' | 'outline' | 'skeleton';

type ButtonAlign = 'left' | 'center';

const button = tv({
  base: 'flex h-9 min-w-fit items-center justify-center gap-2 rounded-md border px-6 py-2 font-semibold text-sm text-white transition-all active:opacity-80',
  variants: {
    color: {
      primary: 'border-emerald-500 bg-emerald-500',
      secondary: 'border-bg-slate-200 bg-slate-200 text-gray-800 ',
    } satisfies Record<ButtonColorTypes, string>,
    theme: {
      variant: '',
      outline: ' border-slate-200 bg-white text-gray-800',
      skeleton: 'border-0 bg-transparent text-gray-800',
    } satisfies Record<ButtonTheme, string>,
    align: {
      center: '',
      left: 'justify-start',
    } satisfies Record<ButtonAlign, string>,
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:opacity-50 active:opacity-50',
      false: 'hover:opacity-90 active:opacity-70',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      theme: 'outline',
      className: 'border-emerald-500 hover:bg-emerald-500 hover:text-white',
    },
    {
      color: 'secondary',
      theme: 'outline',
      className: 'border-slate-200 hover:bg-slate-200',
    },
  ],
});

type ButtonVariants = Required<VariantProps<typeof button>>;

type Props = {
  children: string;
  color?: ButtonVariants['color'];
  theme?: ButtonVariants['theme'];
  align?: ButtonVariants['align'];
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = 'primary',
  theme = 'variant',
  align = 'center',
  disabled = false,
  fullWidth = false,
  icon,
  isLoading = false,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button
      className={button({
        color,
        fullWidth,
        disabled: disabled || isLoading,
        theme,
        align,
      })}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled || isLoading}
    >
      {!isLoading && icon}
      {!isLoading && children}
      {isLoading && <CgSpinner className="animate-spin text-lg" />}
    </button>
  );
};
