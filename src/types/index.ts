import type { WebApp } from '@twa-dev/sdk';

export type TabKey = 'profile' | 'events' | 'friends' | 'news' | 'settings';

export interface TelegramWebApp extends WebApp {
  ready: () => void;
  expand: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}
