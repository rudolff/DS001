import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={styles.title}>{title}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className={styles.body}>
          {children}
        </div>
      )}
    </div>
  );
}
