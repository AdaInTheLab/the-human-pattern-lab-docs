import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Re-use the same CSS as BadgeGrid for identical layout
import styles from '../BadgeGrid/BadgeGrid.module.css';

export type Mascot = {
  id: string;
  name: string; // e.g. "Carmel"
  title: string; // e.g. "Chief Judgment Officer"
  department?: string; // e.g. "CJO"
  image: string; // "img/mascots/carmel.png"
  blurb?: string; // short fun description
};

export type MascotGridProps = {
  mascots: Mascot[];
  maxImageWidth?: number;
};

const MascotGrid: React.FC<MascotGridProps> = ({ mascots, maxImageWidth = 220 }) => {
  return (
    <div className={styles.badgeGrid}>
      {mascots.map((mascot) => {
        const imageUrl = useBaseUrl(mascot.image);

        return (
          <figure key={mascot.id} className={styles.card}>
            <div className={styles.imageWrapper} style={{ maxWidth: maxImageWidth }}>
              <img src={imageUrl} alt={mascot.name} loading="lazy" className={styles.image} />
            </div>

            <figcaption className={styles.caption}>
              {mascot.department && <span className={styles.acronym}>{mascot.department}</span>}

              <span className={styles.title}>{mascot.name}</span>

              <span className={styles.description}>{mascot.title}</span>

              {mascot.blurb && <span className={styles.description}>{mascot.blurb}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default MascotGrid;
