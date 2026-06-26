import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'neutral' | 'subtle' | 'danger'
export type ButtonSize = 'medium' | 'small'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  label?: string
  hasIconStart?: boolean
  hasIconEnd?: boolean
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  children?: React.ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  label,
  hasIconStart = false,
  hasIconEnd = false,
  iconStart,
  iconEnd,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {hasIconStart && iconStart && <span className={styles.icon}>{iconStart}</span>}
      <span>{label ?? children}</span>
      {hasIconEnd && iconEnd && <span className={styles.icon}>{iconEnd}</span>}
    </button>
  )
}
