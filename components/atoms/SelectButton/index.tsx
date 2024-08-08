import type { Option } from '@/components/forms/Select';
import { tv } from 'tailwind-variants';

const selectButton = tv({
  base: 'flex h-10 w-full rounded-lg border border-gray-300 px-2',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 active:opacity-50',
      false: 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
    },
  },
});

type Props = {
  label?: string;
  options: Option[];
  placeholder?: string;
  forceSelect?: boolean;
  onSelect: (value: string) => void;
} & Partial<Pick<HTMLSelectElement, 'disabled' | 'id'>>;
export const SelectButton = ({
  label,
  options,
  disabled = false,
  id = 'input',
  placeholder,
  forceSelect = false,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        aria-label={label}
        className={selectButton({ disabled })}
        disabled={disabled}
        defaultValue={options.find((option) => option.selected)?.value}
        onChange={(e) => onSelect(e.target.value)}
      >
        {!forceSelect && <option>{placeholder}</option>}
        {options.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
