import { Fragment, useCallback, useMemo } from 'react';
import { FixedSizeList, ListOnItemsRenderedProps } from 'react-window';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, MessageCircle, Repeat2, Share2 } from 'lucide-react';
import { useOptimisticPost } from '../hooks/useOptimisticPost';
import type { Post } from '../types/post.types';

const PAGE_SIZE = 20;
const TOTAL_PAGES = 50; // 1,000 posts mocked; react-window handles scaling

const mockFetchPosts = async ({ pageParam = 0 }: { pageParam?: number }) => {
  await new Promise((resolve) => setTimeout(resolve, 350));
  const start = pageParam * PAGE_SIZE;
  const items: Post[] = Array.from({ length: PAGE_SIZE }).map((_, idx) => {
    const idNum = start + idx + 1;
    return {
      id: `post-${idNum}`,
      author: `Author ${idNum}`,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${idNum}`,
      content:
        'Neighborhood meetup highlights and updates. This feed is virtualized to keep scroll buttery smooth even for thousands of posts.',
      timestamp: Date.now() - idNum * 1000 * 60,
      likes: Math.floor(Math.random() * 1200),
      liked: false,
      comments: Math.floor(Math.random() * 320),
      image: idNum % 4 === 0 ? `https://picsum.photos/seed/${idNum}/640/360` : undefined,
    } satisfies Post;
  });
  const hasNext = pageParam + 1 < TOTAL_PAGES;
  return { items, nextCursor: hasNext ? pageParam + 1 : null };
};

const Skeleton = () => (
  <div className="animate-pulse space-y-3 rounded-xl bg-white p-4 shadow-card">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-slate-200" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-24 rounded bg-slate-200" />
        <div className="h-3 w-16 rounded bg-slate-200" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 w-full rounded bg-slate-200" />
      <div className="h-3 w-11/12 rounded bg-slate-200" />
    </div>
    <div className="flex gap-3">
      <div className="h-9 w-20 rounded-full bg-slate-200" />
      <div className="h-9 w-20 rounded-full bg-slate-200" />
    </div>
  </div>
);

const formatTime = (ts: number) => {
  const diffMinutes = Math.max(1, Math.round((Date.now() - ts) / 60000));
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const hours = Math.round(diffMinutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
};

interface PostRowProps {
  post: Post;
  style: React.CSSProperties;
}

const PostRow = ({ post, style }: PostRowProps) => {
  const { post: optimisticPost, like, comment, isPending } = useOptimisticPost(post);

  return (
    <div style={style} className="p-2">
      <article className="flex h-full flex-col gap-3 rounded-xl bg-white p-4 shadow-card">
        <div className="flex items-center gap-3">
          <img
            src={optimisticPost.avatar}
            alt={optimisticPost.author}
            className="h-10 w-10 rounded-full border border-slate-200 object-cover"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">{optimisticPost.author}</span>
            <span className="text-xs text-slate-500">{formatTime(optimisticPost.timestamp)}</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-800">{optimisticPost.content}</p>

        {optimisticPost.image && (
          <img
            src={optimisticPost.image}
            alt="Post visual"
            className="h-48 w-full rounded-lg object-cover"
            loading="lazy"
          />
        )}

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{optimisticPost.likes} likes</span>
          <span>•</span>
          <span>{optimisticPost.comments} comments</span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={like}
            disabled={optimisticPost.liked}
            className={`flex items-center gap-1 rounded-full px-3 py-2 font-semibold transition-colors ${
              optimisticPost.liked ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Heart className={`h-4 w-4 ${optimisticPost.liked ? 'fill-primary text-primary' : ''}`} />
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={optimisticPost.likes}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
              >
                Like {optimisticPost.likes}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={comment}
            className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-200"
          >
            <MessageCircle className="h-4 w-4" />
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={optimisticPost.comments}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
              >
                Comment {optimisticPost.comments}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-200">
            <Repeat2 className="h-4 w-4" /> Repost
          </button>

          <button className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-200">
            <Share2 className="h-4 w-4" /> Share
          </button>

          {isPending && <span className="text-xs text-slate-400">syncing…</span>}
        </div>
      </article>
    </div>
  );
};

function NewsFeed() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['news-feed'],
    queryFn: ({ pageParam }) => mockFetchPosts({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const items = useMemo(() => data?.pages.flatMap((page) => page.items) ?? [], [data]);

  const handleItemsRendered = useCallback(
    ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
      if (!hasNextPage || isFetchingNextPage) return;
      if (visibleStopIndex >= items.length - 5) {
        void fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage, items.length],
  );

  if (status === 'pending') {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Skeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-card">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">News</p>
          <h2 className="text-lg font-bold text-slate-900">Live Feed</h2>
        </div>
        {isFetchingNextPage && <span className="text-xs text-primary">Loading more…</span>}
      </div>

      <div className="h-[65vh] min-h-[360px] w-full overflow-hidden rounded-xl bg-slate-50">
        <FixedSizeList
          height={520}
          width="100%"
          itemCount={items.length}
          itemSize={260}
          itemData={items}
          onItemsRendered={handleItemsRendered}
          className="scrollbar-thin"
        >
          {({ index, style, data: listData }) => {
            const rowPost = listData[index] as Post;
            return <PostRow post={rowPost} style={style} />;
          }}
        </FixedSizeList>
      </div>

      {!hasNextPage && (
        <div className="rounded-lg bg-white p-3 text-center text-sm text-slate-500 shadow-card">
          You are all caught up.
        </div>
      )}
    </div>
  );
}

export default NewsFeed;
