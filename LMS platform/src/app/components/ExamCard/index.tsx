import { Link } from 'react-router';
import { Clock, FileQuestion, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import styles from './ExamCard.module.css';

interface ExamCardProps {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questionCount: number;
  passingScore: number;
  difficulty: 'Asan' | 'Orta' | 'Çətin';
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  completed?: boolean;
  score?: number;
  delay?: number;
}

export function ExamCard({
  id,
  title,
  description,
  duration,
  questionCount,
  passingScore,
  difficulty,
  category,
  icon: Icon,
  completed = false,
  score,
  delay = 0,
}: ExamCardProps) {
  return (
    <div
      className={styles.card}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        
        <div className={styles.headerContent}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>
              {title}
            </h3>
            {completed && (
              <div className={styles.completedBadge}>
                <CheckCircle2 className={styles.completedIcon} />
                Tamamlandı
              </div>
            )}
          </div>
          <p className={styles.description}>
            {description}
          </p>
          
          <div className={styles.badges}>
            <span className={styles.categoryBadge}>
              {category}
            </span>
            <span className={`${styles.difficultyBadge} ${styles[difficulty.toLowerCase()]}`}>
              {difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statIconWrapper}>
            <Clock className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>
            {duration} dəq
          </div>
          <div className={styles.statLabel}>
            Müddət
          </div>
        </div>
        
        <div className={styles.stat}>
          <div className={styles.statIconWrapper}>
            <FileQuestion className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>
            {questionCount} sual
          </div>
          <div className={styles.statLabel}>
            Ümumi
          </div>
        </div>
        
        <div className={styles.stat}>
          <div className={styles.statIconWrapper}>
            <Award className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>
            {passingScore}%
          </div>
          <div className={styles.statLabel}>
            Keçid balı
          </div>
        </div>
      </div>

      {completed && score !== undefined && (
        <div className={`${styles.scoreBox} ${score >= passingScore ? styles.scorePassed : styles.scoreFailed}`}>
          <div className={styles.scoreContent}>
            <span className={styles.scoreLabel}>
              Son nəticəniz:
            </span>
            <span className={styles.scoreValue}>
              {score}%
            </span>
          </div>
        </div>
      )}

      <Link
        to={`/imtahan/${id}`}
        className={styles.button}
      >
        {completed ? (
          <>
            <TrendingUp className={styles.buttonIcon} />
            Yenidən Cəhd Et
          </>
        ) : (
          <>
            <Award className={styles.buttonIcon} />
            İmtahana Başla
          </>
        )}
      </Link>
    </div>
  );
}
