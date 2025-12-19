import React from 'react';
import Link from '@docusaurus/Link';
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

  href?: string; // Optional: link to docs detail page
  hoverBlurb?: string; // Optional: shown on hover / focus
  silhouetteImage?: string; // Optional: silhouette image for small screens
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
        const silhouetteUrl = mascot.silhouetteImage ? useBaseUrl(mascot.silhouetteImage) : null;

        // Only link if href provided. (Prevents accidentally linking every card.)
        const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
          mascot.href ? (
            <Link
              to={mascot.href}
              className={styles.cardLink}
              aria-label={`${mascot.name} — details`}
            >
              {children}
            </Link>
          ) : (
            <>{children}</>
          );

        const hasHover = Boolean(mascot.hoverBlurb);

        return (
          <figure
            key={mascot.id}
            className={styles.card}
            data-has-hover={hasHover ? 'true' : 'false'}
          >
            <Wrapper>
              <div className={styles.imageWrapper} style={{ maxWidth: maxImageWidth }}>
                <picture>
                  {silhouetteUrl && <source media="(max-width: 640px)" srcSet={silhouetteUrl} />}
                  <img src={imageUrl} alt={mascot.name} loading="lazy" className={styles.image} />
                </picture>
              </div>

              <figcaption className={styles.caption}>
                {mascot.department && <span className={styles.acronym}>{mascot.department}</span>}

                <span className={styles.title}>{mascot.name}</span>

                <span className={styles.description}>{mascot.title}</span>

                {(mascot.blurb || mascot.hoverBlurb) && (
                  <span className={styles.description}>
                    {/* Default blurb */}
                    {mascot.blurb && <span className={styles.blurbDefault}>{mascot.blurb}</span>}

                    {/* Hover/focus blurb */}
                    {mascot.hoverBlurb && (
                      <span className={styles.blurbHover}>{mascot.hoverBlurb}</span>
                    )}
                  </span>
                )}
              </figcaption>
            </Wrapper>
          </figure>
        );
      })}
    </div>
  );
};

export default MascotGrid;
