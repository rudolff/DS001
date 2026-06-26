import styles from './Avatar.module.css'

export type AvatarType = 'initial' | 'image'
export type AvatarSize = 'large' | 'medium' | 'small'
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  type?: AvatarType
  size?: AvatarSize
  shape?: AvatarShape
  /** Initials to display when type="initial" */
  initials?: string
  /** Image URL when type="image" */
  src?: string
  alt?: string
}

export function Avatar({
  type = 'initial',
  size = 'medium',
  shape = 'circle',
  initials = '?',
  src,
  alt = '',
}: AvatarProps) {
  return (
    <div className={`${styles.avatar} ${styles[size]} ${styles[shape]}`} aria-label={alt}>
      {type === 'image' && src ? (
        <img src={src} alt={alt} className={styles.image} />
      ) : (
        <span className={styles.initials}>{initials.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  )
}
