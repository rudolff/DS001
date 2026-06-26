import React from 'react';
import styles from './Select.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  disabled?: boolean;
  error?: string;
  label?: string;
  onChange?: (value: string) => void;
}

export function Select({
  value,
  placeholder = 'Select...',
  options,
  disabled = false,
  error,
  label,
  onChange,
}: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
      <select
        className={[
          styles.select,
          error ? styles.selectError : '',
          disabled ? styles.selectDisabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
        value={value ?? ''}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={!!error}
        aria-describedby={error ? 'select-error' : undefined}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span id="select-error" className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
}
