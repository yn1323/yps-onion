import type { ButtonHTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'rounded-full px-4 py-1 font-semibold text-sm text-white active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700',
      secondary: 'bg-purple-500 hover:bg-purple-700',
      success: 'bg-green-500 hover:bg-green-700',
    },
  },
});

type ButtonVariants = Required<VariantProps<typeof button>>;

type Props = ButtonVariants & {
  children: string;
  color?: ButtonVariants['color'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  color = 'primary',
  children,
  type = 'button',
  onClick,
}: Props) => {
  return (
    <button className={button({ color })} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
