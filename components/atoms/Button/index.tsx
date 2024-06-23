import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type ButtonColorTypes = 'primary' | 'secondary';

const button = tv({
  base: 'flex items-center justify-center gap-2 rounded-md px-6 py-2 font-semibold text-sm text-white active:opacity-80',
  variants: {
    color: {
      primary: 'bg-emerald-500 hover:bg-emerald-600',
      secondary: 'bg-slate-200 text-gray-800 hover:bg-slate-300',
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
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  color = 'primary',
  disabled = false,
  fullWidth = false,
  icon,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button
      className={button({ color, fullWidth, disabled })}
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};
