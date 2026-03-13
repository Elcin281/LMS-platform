import { Play, Clock, Users, Star } from 'lucide-react';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  thumbnail: string;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  reviewCount: number;
  category: string;
  delay?: number;
}

export function CourseCard({
  thumbnail,
  title,
  instructor,
  duration,
  students,
  rating,
  reviewCount,
  category,
  delay = 0,
}: CourseCardProps) {
  return (
    <div
      className={styles.card}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        <img 
          src={thumbnail} 
          alt={title}
          className={styles.thumbnailImage}
        />
        <div className={styles.overlay}>
          <div className={styles.playButton}>
            <Play className={styles.playIcon} fill="currentColor" />
          </div>
        </div>
        
        {/* Category badge */}
        <div className={styles.categoryBadge}>
          {category}
        </div>

        {/* Duration */}
        <div className={styles.durationBadge}>
          <Clock className={styles.durationIcon} />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.instructor}>
          {instructor}
        </p>

        <div className={styles.footer}>
          <div className={styles.rating}>
            <Star className={styles.starIcon} fill="currentColor" />
            <span className={styles.ratingValue}>
              {rating.toFixed(1)}
            </span>
            <span className={styles.reviewCount}>
              ({reviewCount})
            </span>
          </div>

          <div className={styles.students}>
            <Users className={styles.studentsIcon} />
            <span className={styles.studentsCount}>
              {students >= 1000 ? `${(students / 1000).toFixed(1)}k` : students}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
