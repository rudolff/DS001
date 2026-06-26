import React from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps {
  variant?: 'primary' | 'neutral' | 'subtle';
  size?: 'medium' | 'small';
  disabled?: boolean;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function IconButton({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={[
        styles.iconButton,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
      ].join(' ')}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {icon}
    </button>
  );
}

export default IconButton;
