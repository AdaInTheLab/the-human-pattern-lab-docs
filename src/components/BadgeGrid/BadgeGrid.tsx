// src/components/BadgeGrid/BadgeGrid.tsx
import React from 'react';
import styles from './BadgeGrid.module.css';

export type Badge = {
  id: string;
  name: string; // Full department name
  acronym?: string; // e.g. SCMS, OOD
  image: string; // /img/badges/scms.png
  description?: string; // Short tagline (optional)
};

export type BadgeGridProps = {
  badges: Badge[];
  /** Max width of each badge image, in pixels (default 220) */
  maxImageWidth?: number;
};

export const BadgeGrid: React.FC<BadgeGridProps> = ({ badges, maxImageWidth = 220 }) => {
  return (
    <div className={styles.badgeGrid}>
      {badges.map((badge) => (
        <figure key={badge.id} className={styles.card}>
          <div className={styles.imageWrapper} style={{ maxWidth: maxImageWidth }}>
            <img src={badge.image} alt={badge.name} loading="lazy" className={styles.image} />
          </div>

          <figcaption className={styles.caption}>
            {badge.acronym && <span className={styles.acronym}>{badge.acronym}</span>}
            <span className={styles.title}>{badge.name}</span>
            {badge.description && <span className={styles.description}>{badge.description}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default BadgeGrid;
