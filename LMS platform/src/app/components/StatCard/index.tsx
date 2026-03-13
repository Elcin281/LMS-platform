import { LucideIcon } from 'lucide-react';
import styles from './StatCard.module.css';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'blue';
  delay?: number;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color,
  delay = 0,
}: StatCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[color]}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>{value}</p>
        </div>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
