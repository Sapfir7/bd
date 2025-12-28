import { useCallback, useEffect, useRef, useState } from 'react';

let ymapsLoadingPromise: Promise<typeof ymaps> | null = null;

const loadYMaps = () => {
  if (typeof window === 'undefined') return Promise.reject(new Error('No window'));
  if (window.ymaps) return Promise.resolve(window.ymaps);
  if (!ymapsLoadingPromise) {
    ymapsLoadingPromise = new Promise((resolve, reject) => {
      const script = document.querySelector<HTMLScriptElement>('script[src*="api-maps.yandex.ru"]');
      if (!script) {
        reject(new Error('Yandex Maps script not found'));
        return;
      }
      script.addEventListener('load', () => {
        if (window.ymaps) {
          window.ymaps.ready(() => resolve(window.ymaps));
        } else {
          reject(new Error('Yandex Maps failed to load'));
        }
      });
      script.addEventListener('error', () => reject(new Error('Failed to load Yandex Maps script')));
    });
  }
  return ymapsLoadingPromise;
};

export interface GeoSuggestion {
  title: string;
  coordinates: [number, number];
}

export interface EventPoint {
  id: string;
  title: string;
  description: string;
  coordinates: [number, number];
}

export const useYandexMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<ymaps.Map | null>(null);
  const clustererRef = useRef<ymaps.Clusterer | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadYMaps()
      .then((y) => {
        if (cancelled || !containerRef.current) return;
        const mapOptions: ymaps.IMapState = {
          center: [55.751244, 37.618423],
          zoom: 11,
          controls: ['zoomControl', 'geolocationControl'],
        };
        const map = new y.Map(containerRef.current, mapOptions, {
          suppressMapOpenBlock: true,
          yandexMapAutoSwitch: false,
        });
        map.behaviors.disable('scrollZoom');
        map.behaviors.enable(['drag', 'multiTouch', 'dblClickZoom']);
        mapRef.current = map;
        setIsReady(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
      setIsReady(false);
    };
  }, []);

  const setCenter = useCallback((coords: [number, number], zoom = 15) => {
    const map = mapRef.current;
    if (!map) return;
    map.setCenter(coords, zoom, { duration: 300 });
  }, []);

  const addPolygon = useCallback(
    (geoJson: ymaps.IGeoObjectJson, options?: ymaps.IGeoObjectOptions) => {
      const map = mapRef.current;
      if (!map || !window.ymaps) return null;
      const polygon = new window.ymaps.GeoObject(geoJson, options);
      map.geoObjects.add(polygon);
      return polygon;
    },
    [],
  );

  const setClusteredEvents = useCallback((events: EventPoint[]) => {
    const map = mapRef.current;
    if (!map || !window.ymaps) return;

    if (clustererRef.current) {
      map.geoObjects.remove(clustererRef.current);
      clustererRef.current = null;
    }

    const clusterer = new window.ymaps.Clusterer({
      clusterDisableClickZoom: false,
      gridSize: 64,
      minClusterSize: 2,
      maxZoom: 18,
    });

    const placemarks = events.map((event) =>
      new window.ymaps.Placemark(
        event.coordinates,
        {
          balloonContentHeader: `<strong>${event.title}</strong>`,
          balloonContentBody: `<p class="text-sm text-slate-700">${event.description}</p>`,
        },
        {
          preset: 'islands#blueDotIconWithCaption',
          iconColor: '#0088CC',
          hideIconOnBalloonOpen: false,
          balloonPanelMaxMapArea: Infinity,
        },
      ),
    );

    clusterer.add(placemarks);
    map.geoObjects.add(clusterer);
    clustererRef.current = clusterer;
  }, []);

  const geocode = useCallback(async (query: string): Promise<GeoSuggestion[]> => {
    const y = await loadYMaps();
    const results = await y.geocode(query, { results: 5 });
    return results.geoObjects.toArray().map((item) => ({
      title: item.getAddressLine(),
      coordinates: item.geometry?.getCoordinates() as [number, number],
    }));
  }, []);

  return {
    containerRef,
    setCenter,
    addPolygon,
    setClusteredEvents,
    geocode,
    isReady,
    getMap: () => mapRef.current,
  };
};
