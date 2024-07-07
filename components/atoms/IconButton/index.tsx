import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const iconButton = tv({
  base: 'h-8 w-8 rounded-full bg-primary-500 p-2',
  variants: {
    color: {
      primary: '',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 active:opacity-50',
    },
  },
});

type IconButtonVariants = Required<VariantProps<typeof iconButton>>;

type Props = {
  disabled?: boolean;
  color?: IconButtonVariants['color'];
  icon: ReactNode;
  href?: string;
  label: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({
  disabled = false,
  color = 'primary',
  icon,
  href = '',
  label = '',
  type = 'button',
  onClick,
}: Props) => {
  const buttonComponent = (
    <button
      type={type}
      className={iconButton({ color, disabled })}
      aria-label={label}
      disabled={disabled}
      onClick={href || disabled ? undefined : onClick}
    >
      {icon}
    </button>
  );

  return href ? <Link href={href}>{buttonComponent}</Link> : buttonComponent;
};
