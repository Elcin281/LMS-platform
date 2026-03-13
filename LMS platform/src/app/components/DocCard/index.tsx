import { LucideIcon, Calendar, FileText } from 'lucide-react';
import { useState } from 'react';
import styles from './DocCard.module.css';

interface DocCardProps {
  icon: LucideIcon;
  tag: string;
  tagVariant: 'new' | 'updated';
  title: string;
  description: string;
  date: string;
}

export function DocCard({ icon: Icon, tag, tagVariant, title, description, date }: DocCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.header}>
        <div className={`${styles.iconWrapper} ${isHovered ? styles.iconWrapperHovered : ''}`}>
          <Icon className={styles.icon} />
        </div>
        <span className={`${styles.tag} ${styles[`tag${tagVariant.charAt(0).toUpperCase() + tagVariant.slice(1)}`]}`}>
          {tag}
        </span>
      </div>

      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Calendar className={styles.metaIcon} />
          {date}
        </span>
        <span className={styles.metaItem}>
          <FileText className={styles.metaIcon} />
          PDF
        </span>
      </div>
    </div>
  );
}
