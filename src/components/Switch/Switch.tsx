import { useId } from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
}: SwitchProps) {
  const id = useId();

  return (
    <div className={styles.row}>
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        className={`${styles.track} ${checked ? styles.trackChecked : ''} ${disabled ? styles.trackDisabled : ''}`}
        onClick={() => !disabled && onChange && onChange(!checked)}
      >
        <span className={`${styles.thumb} ${checked ? styles.thumbChecked : ''}`} />
      </button>
      {label && (
        <label htmlFor={id} className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
          {label}
        </label>
      )}
    </div>
  );
}
