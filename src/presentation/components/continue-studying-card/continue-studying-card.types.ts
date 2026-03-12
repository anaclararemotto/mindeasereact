import { ReactNode } from 'react';

export interface ContinueStudyingCardProps {
  youtubeVideoId: string;
  title: string;
  description: string;
  onClick?: () => void;
}