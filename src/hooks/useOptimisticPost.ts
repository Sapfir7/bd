import { useOptimistic, useTransition } from 'react';
import type { Post } from '../types/post.types';

interface OptimisticActions {
  like: () => void;
  comment: () => void;
  isPending: boolean;
  post: Post;
}

const mockNetwork = <T,>(value: T, delay = 400) =>
  new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), delay);
  });

export const useOptimisticPost = (post: Post): OptimisticActions => {
  const [isPending, startTransition] = useTransition();
  const [optimisticPost, setOptimisticPost] = useOptimistic<Post, Partial<Post>>(post, (state, delta) => ({
    ...state,
    ...delta,
  }));

  const like = () => {
    if (optimisticPost.liked) return;
    setOptimisticPost({ likes: optimisticPost.likes + 1, liked: true });
    startTransition(() => {
      void mockNetwork(true);
    });
  };

  const comment = () => {
    setOptimisticPost({ comments: optimisticPost.comments + 1 });
    startTransition(() => {
      void mockNetwork(true);
    });
  };

  return {
    like,
    comment,
    isPending,
    post: optimisticPost,
  };
};
