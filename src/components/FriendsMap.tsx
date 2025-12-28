import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Radio, Target } from 'lucide-react';
import { useFriendsLocation } from '../hooks/useFriendsLocation';
import { useMyLocation } from '../hooks/useMyLocation';
import { useYandexMap } from '../hooks/useYandexMap';
import { useFriendsStore, type Friend } from '../stores/friendsStore';
import { useSettingsStore } from '../stores/settingsStore';

const statusColor: Record<Friend['status'], string> = {
  online: '#00D084',
  idle: '#FFC107',
  offline: '#94a3b8',
};

const kmDistance = (a: [number, number], b: [number, number]) => {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const [lon1, lat1] = a;
  const [lon2, lat2] = b;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);
  const aHarv =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.atan2(Math.sqrt(aHarv), Math.sqrt(1 - aHarv));
};

function FriendsMap() {
  const { containerRef, isReady, setCenter, getMap } = useYandexMap();
  const { friends } = useFriendsLocation();
  const myLocation = useMyLocation();
  const radiusKm = useSettingsStore((state) => state.mapRadiusKm);
  const setRadius = useSettingsStore((state) => state.setMapRadius);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const mapObjectsRef = useRef<Map<string, { placemark: ymaps.Placemark; polyline: ymaps.Polyline }>>(new Map());

  const filteredFriends = useMemo(() => {
    const map = getMap();
    if (!map) return friends;
    const center = map.getCenter();
    return friends.filter((f) => kmDistance(center, f.trail[0].coords) <= radiusKm);
  }, [friends, getMap, radiusKm]);

  useEffect(() => {
    if (!isReady) return;
    const map = getMap();
    if (!map) return;

    const nextIds = new Set(filteredFriends.map((f) => f.id));

    // Cleanup objects that are out of filter
    mapObjectsRef.current.forEach((objs, id) => {
      if (!nextIds.has(id)) {
        map.geoObjects.remove(objs.placemark);
        map.geoObjects.remove(objs.polyline);
        mapObjectsRef.current.delete(id);
      }
    });

    filteredFriends.forEach((friend) => {
      const latest = friend.trail[0];
      const points = friend.trail.map((pos) => pos.coords);
      const existing = mapObjectsRef.current.get(friend.id);

      if (!existing) {
        const polyline = new window.ymaps.Polyline(points, {}, {
          strokeColor: statusColor[friend.status],
          strokeWidth: 3,
          strokeOpacity: 0.5,
        });
        const placemark = new window.ymaps.Placemark(
          latest.coords,
          {
            hintContent: `${friend.name} (${friend.status})`,
            balloonContentBody: `<strong>${friend.name}</strong><br>Status: ${friend.status}`,
            iconCaption: friend.name,
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'https://yastatic.net/s3/home/services/block/favs/icon-taxi.svg',
            iconImageSize: [36, 36],
            iconImageOffset: [-18, -18],
            iconContentLayout: window.ymaps.templateLayoutFactory.createClass(
              `<div style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:9999px;background:${statusColor[friend.status]};color:white;font-weight:700;font-size:12px;">${friend.name[0]}</div>`,
            ),
            hideIconOnBalloonOpen: false,
            balloonPanelMaxMapArea: Infinity,
          },
        );
        map.geoObjects.add(polyline);
        map.geoObjects.add(placemark);
        mapObjectsRef.current.set(friend.id, { placemark, polyline });
      } else {
        existing.polyline.geometry?.setCoordinates(points);
        existing.polyline.options.set('strokeColor', statusColor[friend.status]);
        existing.placemark.geometry?.setCoordinates(latest.coords);
        existing.placemark.properties?.set({
          hintContent: `${friend.name} (${friend.status})`,
          balloonContentBody: `<strong>${friend.name}</strong><br>Status: ${friend.status}`,
        });
      }
    });
  }, [filteredFriends, getMap, isReady]);

  useEffect(() => {
    return () => {
      const map = getMap();
      if (!map) return;
      mapObjectsRef.current.forEach(({ placemark, polyline }) => {
        map.geoObjects.remove(placemark);
        map.geoObjects.remove(polyline);
      });
      mapObjectsRef.current.clear();
    };
  }, [getMap]);

  const handleSelect = (friend: Friend) => {
    setSelectedId(friend.id);
    setCenter(friend.trail[0].coords, 15);
  };

  useEffect(() => {
    if (!isReady || !myLocation.coords) return;
    const map = getMap();
    if (!map || !window.ymaps) return;

    const existing = mapObjectsRef.current.get('self');
    if (existing) {
      existing.placemark.geometry?.setCoordinates(myLocation.coords);
      existing.placemark.properties?.set({ hintContent: 'You' });
    } else {
      const placemark = new window.ymaps.Placemark(
        myLocation.coords,
        { hintContent: 'You', iconCaption: 'You' },
        { preset: 'islands#blueCircleIcon', iconColor: '#0088CC' },
      );
      map.geoObjects.add(placemark);
      mapObjectsRef.current.set('self', { placemark, polyline: new window.ymaps.Polyline([]) });
    }
  }, [getMap, isReady, myLocation.coords]);

  return (
    <div className="flex flex-col gap-3">
      {!myLocation.isLive && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 shadow-card">
          Not broadcasting. Start in bot: <a href="https://t.me/YOUR_BOT" className="font-semibold underline">t.me/YOUR_BOT</a>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 rounded-lg bg-white p-3 shadow-card">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-primary" />
          <p className="text-sm font-semibold text-slate-800">Radius filter</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="range"
            min={1}
            max={20}
            value={radiusKm}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="h-2 w-32 cursor-pointer accent-primary"
          />
          <span className="min-w-[48px] text-right font-semibold text-primary">{radiusKm} km</span>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-xl shadow-card">
          <div
            ref={containerRef}
            className="h-[60vh] min-h-[320px] w-full touch-pan-y"
            role="application"
            aria-label="Friends map"
          />
          <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-card">
            Live friends with trails
          </div>
        </div>

        <div className="flex max-h-[60vh] flex-col gap-2 overflow-y-auto rounded-xl bg-white p-3 shadow-card">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <Radio className="h-4 w-4 text-primary" /> Live Friends
          </div>
          <AnimatePresence initial={false}>
            {filteredFriends.map((friend) => (
              <motion.button
                key={friend.id}
                layout
                type="button"
                onClick={() => handleSelect(friend)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-50 ${
                  selectedId === friend.id ? 'border border-primary/40 bg-primary/5' : 'border border-transparent'
                }`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  <img src={friend.avatar} alt={friend.name} className="h-full w-full object-cover" loading="lazy" />
                  <span
                    className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: statusColor[friend.status] }}
                    aria-label={`${friend.status} status`}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-slate-800">{friend.name}</span>
                  <span className="text-xs text-slate-500">{friend.status}</span>
                </div>
                <div className="text-xs font-semibold text-primary">{friend.trail.length} pts</div>
              </motion.button>
            ))}
            {filteredFriends.length === 0 && (
              <motion.div
                className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <MapPin className="h-4 w-4 text-primary" /> No friends within {radiusKm} km.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default FriendsMap;
