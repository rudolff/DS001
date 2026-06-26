import React from 'react'
import styles from './Input.module.css'

export type InputState = 'default' | 'error' | 'disabled'

export interface InputProps {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  value?: string
  state?: InputState
  onChange?: (value: string) => void
}

export function Input({
  label,
  description,
  error,
  placeholder = 'Placeholder',
  value = '',
  state = 'default',
  onChange,
}: InputProps) {
  const isError = state === 'error' || !!error
  const isDisabled = state === 'disabled'

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      {description && <p className={styles.description}>{description}</p>}
      <input
        className={[
          styles.input,
          isError ? styles.inputError : '',
          isDisabled ? styles.inputDisabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        aria-invalid={isError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
      />
      {isError && error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
