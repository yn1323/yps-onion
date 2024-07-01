'use client';

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  disabled?: boolean;
  describe?: string;
  id: string;
  required?: boolean;
  type?: HTMLInputElement['type'];
};

export const Input = ({
  disabled,
  describe,
  id,
  required = false,
  type,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ Form: string }>();

  const errorMessage = useMemo(
    () => errors.Form?.message,
    [errors.Form?.message],
  );

  return (
    <div id="Form">
      <label htmlFor={id}>Form</label>
      <input
        type={type}
        id={id}
        disabled={disabled}
        required={required}
        aria-required="true"
        maxLength={64}
        aria-describedby={`${id}-説明文`}
        {...register('Form')}
      />
      {describe && <span id={`${id}-説明文`}>{describe}</span>}
      {errorMessage && <span color="crimson">{errorMessage}</span>}
    </div>
  );
};
