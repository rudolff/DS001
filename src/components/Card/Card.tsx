import styles from './Card.module.css'

export type CardAssetType = 'icon' | 'image' | 'none'
export type CardVariant = 'default' | 'stroke'
export type CardDirection = 'horizontal' | 'vertical'

export interface CardProps {
  assetType?: CardAssetType
  variant?: CardVariant
  direction?: CardDirection
  title?: string
  description?: string
  /** Icon element (when assetType="icon") */
  icon?: React.ReactNode
  /** Image URL (when assetType="image") */
  imageSrc?: string
  imageAlt?: string
}

export function Card({
  assetType = 'none',
  variant = 'default',
  direction = 'vertical',
  title,
  description,
  icon,
  imageSrc,
  imageAlt = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[direction]}`}>
      {assetType === 'icon' && icon && (
        <div className={styles.asset}>{icon}</div>
      )}
      {assetType === 'image' && imageSrc && (
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
