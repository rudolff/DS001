import React, { useRef, useEffect } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const isChecked = indeterminate ? false : checked;

  return (
    <label
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className={styles.input}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={indeterminate ? 'mixed' : isChecked}
      />
      <span
        className={`${styles.box} ${isChecked ? styles.checked : ''} ${indeterminate ? styles.indeterminate : ''}`}
        aria-hidden="true"
      >
        {isChecked && !indeterminate && (
          <svg
            className={styles.checkmark}
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {indeterminate && (
          <span className={styles.dash} aria-hidden="true" />
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
