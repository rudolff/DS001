import styles from './Tag.module.css'

export type TagScheme = 'brand' | 'danger' | 'positive' | 'warning'
export type TagVariant = 'primary' | 'secondary'

export interface TagProps {
  label: string
  scheme?: TagScheme
  variant?: TagVariant
}

export function Tag({ label, scheme = 'brand', variant = 'primary' }: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[scheme]} ${styles[variant]}`}>
      {label}
    </span>
  )
}
