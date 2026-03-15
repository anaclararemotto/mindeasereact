import React from 'react';
import styles from './continue-studying-card.styles.module.scss';
import { type ContinueStudyingCardProps } from './continue-studying-card.types';
import studyingImg from '../../../assets/react.svg'; 

export const ContinueStudyingCard: React.FC<ContinueStudyingCardProps & { isFirstAccess?: boolean }> = ({
  youtubeVideoId,
  isFirstAccess,
  title,
  description,
  onClick,
}) => {
  
  const renderMedia = () => {
    if (isFirstAccess || !youtubeVideoId) {
      return <img src={studyingImg} alt="Ilustração de estudo" className={styles.thumb} />;
    }

    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}?controls=0&modestbranding=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.videoContainer}>
        {renderMedia()}
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};