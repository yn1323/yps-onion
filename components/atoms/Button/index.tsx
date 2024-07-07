import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { type VariantProps, tv } from 'tailwind-variants';

type ButtonColorTypes = 'primary' | 'secondary';

const button = tv({
  base: 'flex h-9 min-w-fit items-center justify-center gap-2 rounded-md px-6 py-2 font-semibold text-sm text-white active:opacity-80',
  variants: {
    color: {
      primary: 'bg-emerald-500 hover:bg-emerald-600',
      secondary: 'bg-slate-200 text-gray-700 hover:bg-slate-300',
    } as Record<ButtonColorTypes, string>,
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 active:opacity-50',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: true,
      className: 'bg-emerald-500 hover:bg-emerald-500',
    },
    {
      color: 'secondary',
      disabled: true,
      className: 'bg-slate-200 hover:bg-slate-200',
    },
  ],
});

type ButtonVariants = Required<VariantProps<typeof button>>;

type Props = {
  children: string;
  color?: ButtonVariants['color'];
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = 'primary',
  disabled = false,
  fullWidth = false,
  icon,
  isLoading = false,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button
      className={button({ color, fullWidth, disabled: disabled || isLoading })}
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
