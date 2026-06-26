import React from 'react';
import styles from './NavigationButton.module.css';

export interface NavigationButtonProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  direction?: 'column' | 'row';
  size?: 'small' | 'medium';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function NavigationButton({
  label,
  active = false,
  disabled = false,
  direction = 'row',
  size = 'medium',
  icon,
  onClick,
}: NavigationButtonProps) {
  return (
    <button
      className={[
        styles.root,
        styles[direction],
        styles[size],
        active ? styles.active : '',
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
      type="button"
      aria-pressed={active}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {active && direction === 'column' && <span className={styles.indicator} aria-hidden="true" />}
    </button>
  );
}
