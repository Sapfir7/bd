import { useEffect, useState } from 'react';
import type { TelegramWebApp } from '../types';

interface MyLocation {
  coords: [number, number] | null;
  accuracy?: number;
  isLive: boolean;
  updatedAt?: number;
}

export const useMyLocation = () => {
  const [data, setData] = useState<MyLocation>({ coords: null, isLive: false });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const telegram = window.Telegram?.WebApp as TelegramWebApp | undefined;
    const userId = telegram?.initDataUnsafe?.user?.id;

    const fetchMine = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`/api/my-location?userId=${userId}`);
        if (!res.ok) throw new Error('Failed to fetch my location');
        const json = await res.json();
        setData({
          coords: json.coords ?? null,
          accuracy: json.accuracy,
          isLive: json.isLive,
          updatedAt: json.updatedAt,
        });
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    void fetchMine();
    timer = setInterval(fetchMine, 3000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return { ...data, error };
};
