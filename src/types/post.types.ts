export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: number;
  likes: number;
  liked: boolean;
  comments: number;
  image?: string;
}
