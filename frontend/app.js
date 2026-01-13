const telegram = window.Telegram?.WebApp;
const telegramId = telegram?.initDataUnsafe?.user?.id || localStorage.getItem('telegram_id');
if (telegramId) {
  localStorage.setItem('telegram_id', telegramId);
}
const API_BASE = `${window.location.protocol}//${window.location.hostname}:8000/api`;
const headers = telegramId ? { 'X-Telegram-User-ID': telegramId } : {};

const map = L.map('map');
const markers = L.markerClusterGroup();
let center = [55.751244, 37.618423];
let categories = [];
let selectedCoords = null;

function setLoading(state) {
  document.getElementById('loading').style.display = state ? 'block' : 'none';
}

async function fetchJSON(url, options = {}) {
  const resp = await fetch(url, { ...options, headers: { 'Content-Type': 'application/json', ...headers } });
  if (!resp.ok) throw new Error(await resp.text());
  return resp.json();
}

async function loadProfile() {
  if (!telegramId) return null;
  try {
    const me = await fetchJSON(`${API_BASE}/users/me`);
    if (me.profile?.last_latitude && me.profile?.last_longitude) {
      center = [me.profile.last_latitude, me.profile.last_longitude];
    }
    return me;
  } catch (err) {
    console.warn('Failed to load profile', err);
    return null;
  }
}

async function loadCategories() {
  categories = await fetchJSON(`${API_BASE}/categories`);
  const select = document.getElementById('category');
  select.innerHTML = '';
  categories.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.category_name;
    select.appendChild(opt);
  });
}

function categoryColor(catId) {
  const palette = ['red', 'blue', 'green', 'orange', 'purple'];
  const idx = catId % palette.length;
  return palette[idx];
}

function renderEventMarker(event) {
  const marker = L.circleMarker([event.latitude, event.longitude], { radius: 8, color: categoryColor(event.category_id) });
  const popup = document.createElement('div');
  popup.innerHTML = `
    <strong>${event.title}</strong><br/>
    ${new Date(event.event_date).toLocaleString()}<br/>
    ❤ ${event.likes_count} · 👥 ${event.participants_count}<br/>
    <button data-action="like">❤️ Лайк</button>
    <button data-action="join">👥 Я пойду</button>
    <button data-action="comments">💬 Комментарии</button>
  `;
  popup.querySelector('[data-action="like"]').onclick = () => toggleLike(event.id, marker);
  popup.querySelector('[data-action="join"]').onclick = () => joinEvent(event.id, marker);
  popup.querySelector('[data-action="comments"]').onclick = () => loadComments(event.id);
  marker.bindPopup(popup);
  markers.addLayer(marker);
}

async function loadEvents(lat, lon, radius = 10) {
  setLoading(true);
  markers.clearLayers();
  try {
    const events = await fetchJSON(`${API_BASE}/events/nearby?lat=${lat}&lon=${lon}&radius=${radius}&limit=20`);
    events.forEach(renderEventMarker);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

async function toggleLike(eventId, marker) {
  await fetchJSON(`${API_BASE}/events/${eventId}/like`, { method: 'POST' });
  marker.closePopup();
  await loadEvents(...center);
}

async function joinEvent(eventId, marker) {
  await fetchJSON(`${API_BASE}/events/${eventId}/join`, { method: 'POST' });
  marker.closePopup();
  await loadEvents(...center);
}

async function loadComments(eventId) {
  const comments = await fetchJSON(`${API_BASE}/events/${eventId}/comments`);
  alert(comments.map((c) => `${c.user_id}: ${c.comment_text}`).join('\n') || 'Нет комментариев');
}

async function createEvent(data) {
  await fetchJSON(`${API_BASE}/events`, { method: 'POST', body: JSON.stringify(data) });
  await loadEvents(...center);
}

function toggleForm(show) {
  document.getElementById('form-container').style.display = show ? 'block' : 'none';
}

async function init() {
  await loadProfile();
  map.setView(center, 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  map.addLayer(markers);
  await loadCategories();
  await loadEvents(center[0], center[1]);

  map.on('moveend', () => {
    const c = map.getCenter();
    center = [c.lat, c.lng];
    loadEvents(center[0], center[1]);
  });

  map.on('click', (e) => {
    selectedCoords = [e.latlng.lat, e.latlng.lng];
  });

  document.getElementById('fab').onclick = () => toggleForm(true);
  document.getElementById('close-form').onclick = () => toggleForm(false);

  document.getElementById('event-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const c = selectedCoords || center;
    const payload = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      event_date: new Date(document.getElementById('event_date').value).toISOString(),
      category_id: parseInt(document.getElementById('category').value, 10),
      latitude: c[0],
      longitude: c[1],
    };
    try {
      setLoading(true);
      await createEvent(payload);
      toggleForm(false);
      e.target.reset();
    } catch (err) {
      alert('Не удалось создать событие');
    } finally {
      setLoading(false);
    }
  });
}

init();
