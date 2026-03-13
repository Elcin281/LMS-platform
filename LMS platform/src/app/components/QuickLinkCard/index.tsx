import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';
import styles from './QuickLinkCard.module.css';

interface QuickLinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: 'primary' | 'secondary';
  delay?: number;
}

export function QuickLinkCard({
  title,
  description,
  icon: Icon,
  href,
  color,
  delay = 0,
}: QuickLinkCardProps) {
  return (
    <Link
      to={href}
      className={`${styles.card} ${styles[color]}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
