import React, { useState } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: number;
  onChange?: (index: number) => void;
}

export function Tabs({ tabs, defaultTab = 0, onChange }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultTab);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            className={`${styles.tabButton} ${activeIndex === index ? styles.active : styles.inactive}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent} role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
