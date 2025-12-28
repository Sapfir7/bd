import { useEffect, useMemo, useState, useTransition } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppBar from './components/AppBar';
import EventsMap from './components/EventsMap';
import FriendsMap from './components/FriendsMap';
import NewsFeed from './components/NewsFeed';
import ProfileView from './components/ProfileView';
import SettingsView from './components/SettingsView';
import { useSettingsStore } from './stores/settingsStore';
import type { TabKey, TelegramWebApp } from './types';

const tabTitles: Record<TabKey, string> = {
  profile: 'Profile',
  events: 'Events Map',
  friends: 'Friends Map',
  news: 'News Feed',
  settings: 'Settings',
};

function PlaceholderCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-card">
      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('events');
  const [isPending, startTransition] = useTransition();
  const theme = useSettingsStore((state) => state.theme);

  useEffect(() => {
    const telegram = window.Telegram?.WebApp as TelegramWebApp | undefined;
    if (telegram) {
      telegram.ready();
      telegram.expand();
      telegram.BackButton?.hide();
      telegram.MainButton?.hide();
      telegram.HapticFeedback?.impactOccurred('light');
    }
  }, []);

  const handleTabChange = (next: TabKey) => {
    startTransition(() => setActiveTab(next));
  };

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case 'profile':
        return <ProfileView />;
      case 'events':
        return <EventsMap />;
      case 'friends':
        return <FriendsMap />;
      case 'news':
        return <NewsFeed />;
      case 'settings':
        return <SettingsView />;
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col bg-gradient-to-b from-white to-slate-50 pb-24">
      <header className="sticky top-0 z-10 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Social Radar</p>
            <h1 className="text-2xl font-bold text-slate-900">{tabTitles[activeTab]}</h1>
            {isPending && <p className="text-xs text-slate-500">Switching…</p>}
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            60fps UI
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-3 px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', stiffness: 250, damping: 28, mass: 0.8 }}
            className="flex flex-col gap-3"
          >
            {tabContent}
          </motion.div>
        </AnimatePresence>
      </main>

      <AppBar activeTab={activeTab} onChange={handleTabChange} />
    </div>
  );
}

export default App;
