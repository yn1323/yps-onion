'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const select = tv({
  base: 'flex h-10 w-full rounded-lg border border-gray-300 px-2',
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

export type Option = {
  value: string;
  label: string;
  selected?: boolean;
};

type Props = {
  label?: string;
  description?: string;
  options: Option[];
  placeholder?: string;
  forceSelect?: boolean;
} & Partial<Pick<HTMLSelectElement, 'disabled' | 'id'>>;

export const Select = ({
  label,
  description,
  options,
  disabled = false,
  id = 'input',
  placeholder,
  forceSelect = false,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [id: string]: string }>();

  const errorMessage = useMemo(
    () => (disabled ? undefined : errors[id]?.message),
    [id, disabled, errors[id]?.message],
  );

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...register(id)}
        className={select({ disabled, error: !!errorMessage })}
        aria-describedby={`${id}-説明文`}
        aria-errormessage={`${id}-エラーメッセージ`}
        aria-invalid={!!errorMessage}
        disabled={disabled}
      >
        {!forceSelect && <option>{placeholder}</option>}
        {options.map(({ label, value, selected }, i) => (
          <option key={i} value={value} selected={selected}>
            {label}
          </option>
        ))}
      </select>
      {description && <span id={`${id}-説明文`}>{description}</span>}
      {errorMessage && (
        <span id={`${id}-エラーメッセージ`} className="text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
