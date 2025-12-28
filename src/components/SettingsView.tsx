import { useEffect } from 'react';
import { Bell, Globe2, Moon, SunMedium, ToggleLeft, ToggleRight } from 'lucide-react';
import { useSettingsStore } from '../stores/settingsStore';
import type { TelegramWebApp } from '../types';

const Toggle = ({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  description?: string;
}) => (
  <button
    type="button"
    onClick={onChange}
    className="flex w-full items-center justify-between rounded-lg bg-white px-3 py-2 text-left shadow-card transition-colors hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
    aria-pressed={checked}
  >
    <div>
      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
      {description && <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>}
    </div>
    {checked ? <ToggleRight className="h-5 w-5 text-primary" /> : <ToggleLeft className="h-5 w-5 text-slate-400" />}
  </button>
);

function SettingsView() {
  const {
    mapRadiusKm,
    theme,
    notifications,
    language,
    privacy,
    setTheme,
    setMapRadius,
    toggleNotification,
    setLanguage,
    setPrivacy,
  } = useSettingsStore();

  useEffect(() => {
    const telegram = window.Telegram?.WebApp as TelegramWebApp | undefined;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('color-scheme', 'dark');
      telegram?.setBackgroundColor?.('#0f172a');
      telegram?.setHeaderColor?.('#0f172a');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('color-scheme', 'light');
      telegram?.setBackgroundColor?.('#ffffff');
      telegram?.setHeaderColor?.('#ffffff');
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-xl bg-white p-4 shadow-card dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Map</p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Radius & Theme</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {mapRadiusKm} km
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <label className="flex items-center justify-between gap-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
            Radius (km)
            <input
              type="range"
              min={1}
              max={50}
              value={mapRadiusKm}
              onChange={(e) => setMapRadius(Number(e.target.value))}
              className="h-2 w-48 cursor-pointer accent-primary"
            />
          </label>
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 shadow-inner dark:bg-slate-700 dark:text-slate-200">
            Live preview: {mapRadiusKm} km radius
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 shadow-inner dark:bg-slate-700">
            <div className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="h-4 w-4 text-primary" /> : <SunMedium className="h-4 w-4 text-amber-500" />}
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
            </div>
            <div className="flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`rounded-full px-3 py-1 font-semibold ${theme === 'light' ? 'bg-primary/10 text-primary' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`rounded-full px-3 py-1 font-semibold ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-card dark:bg-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Bell className="h-4 w-4 text-primary" /> Notifications
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <Toggle
            checked={notifications.events}
            onChange={() => toggleNotification('events')}
            label="Event alerts"
            description="Get notified about nearby events"
          />
          <Toggle
            checked={notifications.friends}
            onChange={() => toggleNotification('friends')}
            label="Friend pings"
            description="Live movement + status"
          />
          <Toggle
            checked={notifications.posts}
            onChange={() => toggleNotification('posts')}
            label="Feed updates"
            description="Comments, likes, reposts"
          />
        </div>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-card dark:bg-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Globe2 className="h-4 w-4 text-primary" /> Language
        </div>
        <div className="mt-3 flex gap-2 text-sm">
          {[
            { key: 'en', label: 'English' },
            { key: 'ru', label: 'Русский' },
          ].map((lang) => (
            <button
              key={lang.key}
              type="button"
              onClick={() => setLanguage(lang.key as 'en' | 'ru')}
              className={`rounded-full px-4 py-2 font-semibold ${
                language === lang.key ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-card dark:bg-slate-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Globe2 className="h-4 w-4 text-primary" /> Privacy
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <Toggle
            checked={privacy.shareLocation}
            onChange={() => setPrivacy({ shareLocation: !privacy.shareLocation })}
            label="Share live location"
            description="Allow friends to see your position"
          />
          <Toggle
            checked={privacy.showOnlineStatus}
            onChange={() => setPrivacy({ showOnlineStatus: !privacy.showOnlineStatus })}
            label="Show online status"
            description="Display when you are active"
          />
        </div>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-card text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-200">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">App Info</p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-300">Version</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">0.1.0-alpha</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-300">Build</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Phase 5</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SettingsView;
