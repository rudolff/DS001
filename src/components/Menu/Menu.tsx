import React, { useEffect, useRef } from 'react';
import styles from './Menu.module.css';

export interface MenuItem {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export interface MenuProps {
  items: MenuItem[];
  open: boolean;
  onClose: () => void;
  trigger?: React.ReactNode;
  header?: string;
}

export function Menu({ items, open, onClose, trigger, header }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={styles.wrapper} ref={menuRef}>
      {trigger && <div className={styles.trigger}>{trigger}</div>}
      {open && (
        <div className={styles.menu} role="menu" aria-label={header}>
          {header && <div className={styles.header}>{header}</div>}
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.separator}>
                <button
                  className={[
                    styles.item,
                    item.disabled ? styles.itemDisabled : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled) {
                      item.onClick?.();
                      onClose();
                    }
                  }}
                >
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span className={styles.label}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
