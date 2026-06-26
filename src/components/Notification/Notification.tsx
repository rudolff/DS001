import React from 'react';
import styles from './Notification.module.css';

export interface NotificationProps {
  variant?: 'message' | 'alert';
  title?: string;
  message: string;
  onClose?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  variant = 'message',
  title,
  message,
  onClose,
}) => {
  return (
    <div className={`${styles.notification} ${styles[variant]}`}>
      <div className={styles.header}>
        {title && <span className={styles.title}>{title}</span>}
        {onClose && (
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            &times;
          </button>
        )}
      </div>
      <p className={styles.messageText}>{message}</p>
    </div>
  );
};

export default Notification;
