'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { tv } from 'tailwind-variants';

const select = tv({
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

type Option = {
  value: string;
  label: string;
  selected?: boolean;
};

type Props = {
  label?: string;
  description?: string;
  options: Option[];
} & Partial<Pick<HTMLSelectElement, 'disabled' | 'id'>> &
  XOR<
    {
      placeholder: string;
      forceSelect: true;
    },
    {
      forceSelect?: false;
    }
  >;

export const Select = ({
  label,
  description,
  options,
  disabled = false,
  id = 'input',
  placeholder = '',
  forceSelect = false,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ [id: string]: string }>();

  const errorMessage = useMemo(
    () => errors[id]?.message,
       [id, errors[id]?.message],
  );

  placeholder;
  forceSelect;

  return (

    
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}

      <select
        {...register(id)}
        className={select({ disabled, error: !!errorMessage })}
        aria-describedby={`${id}-説明文`}
        aria-errormessage={`${id}-エラーメッセージ`}
        aria-invalid={!!errorMessage}
      >
        {options.map(({ label, value }, i) => (
          <option key={i} value={value}>
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
