export interface FeedbackProps {
  likes: number;
  dislikes: number;
  onDislike: () => void;
  onLike: () => void;
  resetResults: () => void;
}
