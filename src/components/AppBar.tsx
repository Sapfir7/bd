import { motion } from 'framer-motion';
import {
  Map,
  Newspaper,
  Settings,
  User2,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';
import type { TabKey } from '../types';

const tabs: Array<{ key: TabKey; label: string; icon: ReactNode }> = [
  { key: 'profile', label: 'Profile', icon: <User2 className="h-5 w-5" /> },
  { key: 'events', label: 'Events', icon: <Map className="h-5 w-5" /> },
  { key: 'friends', label: 'Friends', icon: <Users className="h-5 w-5" /> },
  { key: 'news', label: 'News', icon: <Newspaper className="h-5 w-5" /> },
  { key: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
];

interface AppBarProps {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
}

function AppBar({ activeTab, onChange }: AppBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-xl justify-between px-3 py-2">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className="relative flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-slate-600 transition-colors hover:text-primary"
              aria-label={`Switch to ${tab.label}`}
            >
              <div className="relative flex h-8 w-full items-center justify-center">
                {isActive && (
                  <motion.span
                    layoutId="tab-highlight"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-slate-700">{tab.icon}</span>
              </div>
              <span className={`relative z-10 ${isActive ? 'text-primary' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default AppBar;
