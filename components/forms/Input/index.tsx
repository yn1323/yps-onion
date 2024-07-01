'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const input = tv({
  base: 'h-10 rounded-md border px-3 outline-none',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 active:opacity-50',
      false: 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
    },
    error: {
      true: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      false: 'border-gray-300',
    },
  },
  compoundVariants: [],
});

type Props = {
  description?: string;
  label?: string;
} & Partial<
  Pick<
    HTMLInputElement,
    'type' | 'maxLength' | 'disabled' | 'id' | 'placeholder'
  >
>;

export const Input = ({
  description,
  label,
  disabled = false,
  id = 'input',
  maxLength,
  type = 'text',
  placeholder,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [id: string]: string }>();

  const errorMessage = useMemo(
    () => errors[id]?.message,
    [id, errors[id]?.message],
  );

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={input({ disabled, error: !!errorMessage })}
        type={type}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        aria-required="true"
        maxLength={maxLength}
        aria-describedby={`${id}-説明文`}
        aria-invalid={!!errorMessage}
        {...register(id)}
      />
      {description && <span id={`${id}-説明文`}>{description}</span>}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};
