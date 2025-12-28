import { useEffect, useMemo, useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { useYandexMap, type EventPoint, type GeoSuggestion } from '../hooks/useYandexMap';

const polygonGeoJson: ymaps.IGeoObjectJson = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [37.55, 55.75],
        [37.65, 55.75],
        [37.65, 55.80],
        [37.55, 55.80],
        [37.55, 55.75],
      ],
    ],
  },
  properties: {
    hintContent: 'Central District',
    balloonContent: 'District boundary',
  },
};

const generateMockEvents = (): EventPoint[] =>
  Array.from({ length: 60 }).map((_, idx) => ({
    id: `event-${idx + 1}`,
    title: `Event #${idx + 1}`,
    description: 'Community meetup near you.',
    coordinates: [37.55 + Math.random() * 0.2, 55.70 + Math.random() * 0.15],
  }));

function EventsMap() {
  const { containerRef, setCenter, addPolygon, setClusteredEvents, geocode, isReady } = useYandexMap();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<GeoSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const events = useMemo(() => generateMockEvents(), []);

  useEffect(() => {
    if (!isReady) return;
    addPolygon(polygonGeoJson, {
      strokeColor: '#0088CC',
      fillColor: 'rgba(0, 136, 204, 0.1)',
      strokeWidth: 2,
    });
  }, [addPolygon, isReady]);

  useEffect(() => {
    if (!isReady) return;
    setClusteredEvents(events);
  }, [events, isReady, setClusteredEvents]);

  useEffect(() => {
    if (query.trim().length < 3) {
      setSuggestions([]);
      return undefined;
    }
    const handle = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results = await geocode(query);
        setSuggestions(results);
      } finally {
        setIsSearching(false);
      }
    }, 250);
    return () => clearTimeout(handle);
  }, [geocode, query]);

  const handleSelectSuggestion = (suggestion: GeoSuggestion) => {
    setCenter(suggestion.coordinates, 17);
    setSuggestions([]);
    setQuery(suggestion.title);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search address"
          className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2 text-sm shadow-card outline-none focus:border-primary"
        />
        {isSearching && (
          <span className="absolute right-3 top-2 text-xs text-primary">Searching…</span>
        )}
        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 z-10 mt-1 max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-card">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.title}
                type="button"
                onClick={() => handleSelectSuggestion(suggestion)}
                className="flex w-full items-start gap-2 px-3 py-2 text-left text-sm hover:bg-slate-50"
              >
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>{suggestion.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-card">
        <div
          ref={containerRef}
          className="h-[60vh] min-h-[320px] w-full touch-manipulation"
          role="application"
          aria-label="Events map"
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-card">
          Clustered events & district polygons
        </div>
      </div>
    </div>
  );
}

export default EventsMap;
