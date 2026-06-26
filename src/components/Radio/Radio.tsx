import React, { useId } from 'react';
import styles from './Radio.module.css';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value = '',
  onChange,
}: RadioProps) {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <label
      className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}
      htmlFor={id}
    >
      <input
        className={styles.input}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={`${styles.circle} ${checked ? styles.checked : ''}`}>
        {checked && <span className={styles.dot} />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
