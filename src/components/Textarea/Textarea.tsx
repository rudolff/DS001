import React from 'react'
import styles from './Textarea.module.css'

export type TextareaState = 'default' | 'error' | 'disabled'

export interface TextareaProps {
  label?: string
  description?: string
  error?: string
  placeholder?: string
  value?: string
  rows?: number
  state?: TextareaState
  onChange?: (value: string) => void
}

export function Textarea({
  label,
  description,
  error,
  placeholder = 'Placeholder',
  value = '',
  rows = 4,
  state = 'default',
  onChange,
}: TextareaProps) {
  const isError = state === 'error' || !!error
  const isDisabled = state === 'disabled'

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      {description && <p className={styles.description}>{description}</p>}
      <textarea
        className={[
          styles.textarea,
          isError ? styles.textareaError : '',
          isDisabled ? styles.textareaDisabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
        placeholder={placeholder}
        value={value}
        rows={rows}
        disabled={isDisabled}
        aria-invalid={isError}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value)}
      />
      {isError && error && <p className={styles.errorText}>{error}</p>}
    </div>
  )
}
