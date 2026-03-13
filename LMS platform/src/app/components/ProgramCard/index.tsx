import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './ProgramCard.module.css';

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttons: {
    text: string;
    icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
    variant: 'primary' | 'secondary' | 'dark' | 'orange';
    href: string;
  }[];
  delay?: number;
}

export function ProgramCard({ icon: Icon, title, description, buttons, delay = 0 }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
      style={{
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`${styles.topBar} ${isHovered ? styles.topBarVisible : ''}`} />

      <div className={styles.header}>
        <div className={`${styles.iconWrapper} ${isHovered ? styles.iconWrapperHovered : ''}`}>
          <Icon className={styles.icon} />
        </div>
        <div className={styles.headerContent}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <p className={styles.description}>
            {description}
          </p>
        </div>
      </div>

      <div className={styles.buttons}>
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`${styles.button} ${styles[`button${button.variant.charAt(0).toUpperCase() + button.variant.slice(1)}`]}`}
          >
            <button.icon className={styles.buttonIcon} />
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
}
