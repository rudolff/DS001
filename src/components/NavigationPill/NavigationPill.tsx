import styles from './NavigationPill.module.css'

export type NavigationPillState = 'default' | 'active'

export interface NavigationPillProps {
  label: string
  state?: NavigationPillState
  onClick?: () => void
}

export function NavigationPill({
  label,
  state = 'default',
  onClick,
}: NavigationPillProps) {
  return (
    <button
      className={`${styles.pill} ${state === 'active' ? styles.active : ''}`}
      onClick={onClick}
      type="button"
      aria-current={state === 'active' ? 'page' : undefined}
    >
      {label}
    </button>
  )
}
