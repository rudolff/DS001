import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Dialog.module.css';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  type?: 'card' | 'sheet';
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export function Dialog({
  open,
  onClose,
  type = 'card',
  title,
  children,
  actions,
}: DialogProps): React.ReactPortal | null {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const dialogClass =
    type === 'sheet'
      ? `${styles.dialog} ${styles.sheet}`
      : `${styles.dialog} ${styles.card}`;

  return ReactDOM.createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={dialogClass}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.body}>{children}</div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </div>,
    document.body
  );
}
