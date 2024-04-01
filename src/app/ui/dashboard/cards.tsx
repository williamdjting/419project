'use client'

import styles from './ui-dashboard.module.css'

export function Card({
  key,
  title,
  value,
}: {
  key: number;
  title: string;
  value: string;
}) {
  

  return (
    <>
    <div className={styles.cards}>
      
      <span>
        <ul>{title}</ul>
        <ul>{value}</ul>
      </span>
    </div>
    
    </>
  );
}