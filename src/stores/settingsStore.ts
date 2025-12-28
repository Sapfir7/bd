import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

interface Notifications {
  events: boolean;
  friends: boolean;
  posts: boolean;
}

interface SettingsState {
  mapRadiusKm: number;
  theme: ThemeMode;
  notifications: Notifications;
  language: 'en' | 'ru';
  privacy: {
    shareLocation: boolean;
    showOnlineStatus: boolean;
  };
  setTheme: (mode: ThemeMode) => void;
  setMapRadius: (km: number) => void;
  toggleNotification: (key: keyof Notifications) => void;
  setLanguage: (lang: 'en' | 'ru') => void;
  setPrivacy: (partial: Partial<SettingsState['privacy']>) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      mapRadiusKm: 5,
      theme: 'light',
      notifications: {
        events: true,
        friends: true,
        posts: true,
      },
      language: 'en',
      privacy: {
        shareLocation: true,
        showOnlineStatus: true,
      },
      setTheme: (mode) => set({ theme: mode }),
      setMapRadius: (km) => set({ mapRadiusKm: Math.min(50, Math.max(1, km)) }),
      toggleNotification: (key) =>
        set((state) => ({
          notifications: { ...state.notifications, [key]: !state.notifications[key] },
        })),
      setLanguage: (lang) => set({ language: lang }),
      setPrivacy: (partial) => set((state) => ({ privacy: { ...state.privacy, ...partial } })),
    }),
    {
      name: 'settings-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
