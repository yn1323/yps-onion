'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const timePicker = tv({
  base: 'mt-2 h-10 rounded-md border px-3 outline-none',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 active:opacity-50',
      false: 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
    },
    error: {
      true: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      false: 'border-gray-200',
    },
  },
});

type Props = {
  description?: string;
  label?: string;
} & Partial<
  Pick<HTMLInputElement, 'disabled' | 'id' | 'placeholder' | 'max' | 'min'>
>;

export const TimePicker = ({
  description,
  label,
  disabled = false,
  id = 'TimePicker',
  placeholder,
  max,
  min,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [id: string]: string }>();

  const errorMessage = useMemo(
    () => errors[id]?.message,
    [id, errors[id]?.message],
  );

  console.log(register(id));

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={timePicker({ disabled, error: !!errorMessage })}
        {...register(id)}
        id={id}
        type="time"
        disabled={disabled}
        placeholder={placeholder}
        aria-describedby={`${id}-説明文`}
        aria-errormessage={`${id}-エラーメッセージ`}
        aria-invalid={!!errorMessage}
        max={max}
        min={min}
      />

      {description && <span id={`${id}-説明文`}>{description}</span>}
      {errorMessage && (
        <span id={`${id}-エラーメッセージ`} className="text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
