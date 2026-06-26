import React, { useId } from 'react'
import styles from './Slider.module.css'

export interface SliderProps {
  label?: string
  description?: string
  min?: number
  max?: number
  value?: number
  step?: number
  disabled?: boolean
  formatValue?: (v: number) => string
  onChange?: (value: number) => void
}

export function Slider({
  label,
  description,
  min = 0,
  max = 100,
  value = 0,
  step = 1,
  disabled = false,
  formatValue = (v) => String(v),
  onChange,
}: SliderProps) {
  const id = useId()
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.wrapperDisabled : ''}`}>
      {label && (
        <div className={styles.labelRow}>
          <label htmlFor={id} className={styles.label}>{label}</label>
          <span className={styles.valueDisplay}>{formatValue(value)}</span>
        </div>
      )}
      <div className={styles.trackWrapper}>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: `${pct}%` }} />
        </div>
        <input
          id={id}
          className={styles.range}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(Number(e.target.value))}
        />
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
