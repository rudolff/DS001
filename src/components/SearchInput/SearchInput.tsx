import React from 'react'
import styles from './SearchInput.module.css'

export interface SearchInputProps {
  value?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onClear?: () => void
}

export function SearchInput({
  value = '',
  placeholder = 'Search...',
  disabled = false,
  onChange,
  onClear,
}: SearchInputProps) {
  return (
    <div className={`${styles.wrapper} ${disabled ? styles.wrapperDisabled : ''}`}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
      />
      {value && !disabled && (
        <button
          className={styles.clearButton}
          onClick={onClear}
          aria-label="Clear search"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
