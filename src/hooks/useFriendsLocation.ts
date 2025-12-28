import { useEffect } from 'react';
import { useFriendsStore } from '../stores/friendsStore';
import type { Friend } from '../stores/friendsStore';
import type { TelegramWebApp } from '../types';

interface ApiFriend extends Friend {
  trail: { coords: [number, number]; ts: number }[];
}

export const useFriendsLocation = () => {
  const friends = useFriendsStore((state) => state.friends);
  const setFriends = useFriendsStore((state) => state.setFriends);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const telegram = window.Telegram?.WebApp as TelegramWebApp | undefined;
    const userId = telegram?.initDataUnsafe?.user?.id;

    const fetchFriends = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`/api/friends-location?userId=${userId}`);
        if (!res.ok) throw new Error('Failed to fetch friends');
        const data: ApiFriend[] = await res.json();
        setFriends(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('friends-location error', error);
      }
    };

    void fetchFriends();
    timer = setInterval(fetchFriends, 5000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [setFriends]);

  return { friends };
};
