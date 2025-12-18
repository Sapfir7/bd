const telegram = window.Telegram?.WebApp;
const telegramId = telegram?.initDataUnsafe?.user?.id || localStorage.getItem('telegram_id');
if (telegramId) {
  localStorage.setItem('telegram_id', telegramId);
}

const API_BASE = `${window.location.protocol}//${window.location.hostname}:8000/api`;
const headers = telegramId ? { 'X-Telegram-User-ID': telegramId } : {};

const map = L.map('map', { zoomControl: false, tap: false });
const markers = L.markerClusterGroup();
const markerById = new Map();
let center = [55.751244, 37.618423];
let categories = [];
let selectedCoords = null;
let selectingPoint = false;
let tempMarker = null;
let currentUser = null;
let userLocationKnown = false;
let eventsCache = new Map();

const loadingEl = document.getElementById('loading');
const mapLoadingEl = document.getElementById('map-loading');
const formContainer = document.getElementById('form-container');
const blocker = document.getElementById('blocker');
const selectionHint = document.getElementById('selection-hint');
const profilePanel = document.getElementById('profile-panel');

function setLoading(state) {
  loadingEl.style.display = state ? 'block' : 'none';
}

function setMapLoading(state) {
  mapLoadingEl.style.display = state ? 'flex' : 'none';
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
    currentUser = me;
    if (me.profile?.last_latitude && me.profile?.last_longitude) {
      center = [me.profile.last_latitude, me.profile.last_longitude];
      userLocationKnown = true;
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
  const palette = ['#e53935', '#3949ab', '#43a047', '#fb8c00', '#8e24aa', '#00838f'];
  const idx = catId % palette.length;
  return palette[idx];
}

function makeMarkerIcon(catId) {
  return L.divIcon({
    className: 'event-marker',
    html: `<div style="width:24px;height:24px;border-radius:50%;background:${categoryColor(catId)};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}

function formatDate(value) {
  const dt = new Date(value);
  return dt.toLocaleString('ru-RU', { dateStyle: 'medium', timeStyle: 'short' });
}

function renderEventPopup(event) {
  const wrapper = document.createElement('div');
  wrapper.className = 'event-card';
  const description = event.description ? event.description.slice(0, 160) : 'Описание отсутствует';
  wrapper.innerHTML = `
    <h4>${event.title}</h4>
    <div class="meta">${formatDate(event.event_date)}</div>
    <div>${description}</div>
    <div class="meta">❤ ${event.likes_count} · 👥 ${event.participants_count}</div>
    <div style="margin-top:8px;">
      <button data-action="like">❤️ Лайк</button>
      <button data-action="join">👥 Я пойду</button>
      <button data-action="comments">💬 Комментарии</button>
    </div>
  `;
  if (currentUser && event.created_by === currentUser.id) {
    const editRow = document.createElement('div');
    editRow.style.marginTop = '8px';
    editRow.innerHTML = `
      <button data-action="edit">✏️ Редактировать</button>
      <button data-action="delete">🗑️ Удалить</button>
    `;
    wrapper.appendChild(editRow);
  }
  wrapper.querySelector('[data-action="like"]').onclick = () => toggleLike(event.id);
  wrapper.querySelector('[data-action="join"]').onclick = () => joinEvent(event.id);
  wrapper.querySelector('[data-action="comments"]').onclick = () => loadComments(event.id);
  const editBtn = wrapper.querySelector('[data-action="edit"]');
  const deleteBtn = wrapper.querySelector('[data-action="delete"]');
  if (editBtn) editBtn.onclick = () => openEditForm(event);
  if (deleteBtn) deleteBtn.onclick = () => deleteEvent(event.id);
  return wrapper;
}

function renderEventMarker(event) {
  const marker = L.marker([event.latitude, event.longitude], { icon: makeMarkerIcon(event.category_id) });
  marker.bindPopup(renderEventPopup(event));
  markers.addLayer(marker);
  markerById.set(event.id, marker);
}

async function loadEvents(lat, lon, radius = 10) {
  setLoading(true);
  markers.clearLayers();
  markerById.clear();
  try {
    const events = await fetchJSON(`${API_BASE}/events/nearby?lat=${lat}&lon=${lon}&radius=${radius}&limit=20`);
    eventsCache = new Map(events.map((e) => [e.id, e]));
    events.forEach(renderEventMarker);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

async function toggleLike(eventId) {
  await fetchJSON(`${API_BASE}/events/${eventId}/like`, { method: 'POST' });
  await reloadMarkers();
}

async function joinEvent(eventId) {
  await fetchJSON(`${API_BASE}/events/${eventId}/join`, { method: 'POST' });
  await reloadMarkers();
}

async function loadComments(eventId) {
  const comments = await fetchJSON(`${API_BASE}/events/${eventId}/comments`);
  alert(comments.map((c) => `${c.user_id}: ${c.comment_text}`).join('\n') || 'Нет комментариев');
}

async function createEvent(data) {
  await fetchJSON(`${API_BASE}/events`, { method: 'POST', body: JSON.stringify(data) });
  await reloadMarkers();
}

async function updateEvent(eventId, data) {
  await fetchJSON(`${API_BASE}/events/${eventId}`, { method: 'PUT', body: JSON.stringify(data) });
  await reloadMarkers();
}

async function deleteEvent(eventId) {
  if (!confirm('Удалить это событие?')) return;
  await fetchJSON(`${API_BASE}/events/${eventId}`, { method: 'DELETE' });
  await reloadMarkers();
}

function toggleForm(show, title = 'Новое мероприятие') {
  document.querySelector('#form-container h3').textContent = title;
  formContainer.style.display = show ? 'block' : 'none';
}

function toggleSelectionHint(show) {
  selectionHint.style.display = show ? 'block' : 'none';
}

async function reloadMarkers() {
  const c = map.getCenter();
  center = [c.lat, c.lng];
  await loadEvents(center[0], center[1]);
}

function ensureLocationOrBlock() {
  if (!userLocationKnown) {
    blocker.style.display = 'flex';
    formContainer.style.display = 'none';
    return false;
  }
  blocker.style.display = 'none';
  return true;
}

function centerOnUser() {
  if (!userLocationKnown || !currentUser?.profile) {
    alert('Сначала отправьте свою геолокацию боту');
    return;
  }
  const { last_latitude, last_longitude } = currentUser.profile;
  map.setView([last_latitude, last_longitude], 15);
  loadEvents(last_latitude, last_longitude);
}

function openEditForm(event) {
  toggleForm(true, 'Редактирование');
  document.getElementById('title').value = event.title;
  document.getElementById('description').value = event.description || '';
  document.getElementById('event_date').value = new Date(event.event_date).toISOString().slice(0, 16);
  document.getElementById('category').value = event.category_id;
  selectedCoords = [event.latitude, event.longitude];
  formContainer.dataset.editing = event.id;
}

function resetFormState() {
  toggleForm(false);
  document.getElementById('event-form').reset();
  formContainer.dataset.editing = '';
  if (tempMarker) {
    map.removeLayer(tempMarker);
    tempMarker = null;
  }
}

function startPointSelection() {
  if (!ensureLocationOrBlock()) return;
  selectingPoint = true;
  toggleSelectionHint(true);
  alert('Тапните по карте, чтобы выбрать точку для мероприятия');
  const onceClick = (e) => {
    selectingPoint = false;
    toggleSelectionHint(false);
    selectedCoords = [e.latlng.lat, e.latlng.lng];
    if (tempMarker) map.removeLayer(tempMarker);
    tempMarker = L.marker(selectedCoords, {
      icon: L.divIcon({
        className: 'temp-marker',
        html: '<div style="width:24px;height:24px;border-radius:50%;background:#ff9800;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35);"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      }),
    }).addTo(map);
    toggleForm(true);
  };
  map.once('click', onceClick);
}

function buildProfilePanel() {
  if (!currentUser) {
    profilePanel.innerHTML = '<p>Не удалось загрузить профиль</p>';
    return;
  }
  const roles = (currentUser.roles || []).length ? currentUser.roles.join(', ') : 'Пользователь';
  const locationText = userLocationKnown
    ? `${currentUser.profile.last_latitude.toFixed(4)}, ${currentUser.profile.last_longitude.toFixed(4)}`
    : 'Не задана';
  const nearby = Array.from(eventsCache.values()).filter((event) => {
    if (!currentUser?.profile?.last_latitude) return false;
    const dLat = (Math.PI / 180) * (event.latitude - currentUser.profile.last_latitude);
    const dLon = (Math.PI / 180) * (event.longitude - currentUser.profile.last_longitude);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(currentUser.profile.last_latitude * (Math.PI / 180)) * Math.cos(event.latitude * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c;
    return distance <= 10;
  });

  const listHtml = nearby
    .map(
      (e) => `
      <li data-event="${e.id}" style="cursor:pointer;margin-bottom:4px;">
        <strong>${e.title}</strong><br/>
        <span class="meta">${formatDate(e.event_date)}</span><br/>
        <span class="meta">${e.latitude.toFixed(4)}, ${e.longitude.toFixed(4)}</span>
      </li>`
    )
    .join('');

  profilePanel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px; margin-bottom:8px;">
      <div style="width:40px;height:40px;border-radius:50%;background:#eceff1;display:flex;align-items:center;justify-content:center;font-weight:bold;">${
        currentUser.username?.[0]?.toUpperCase() || 'U'
      }</div>
      <div>
        <div><strong>@${currentUser.username || 'user'}</strong></div>
        <div class="pill">${roles}</div>
        <div class="meta">Локация: ${locationText}</div>
      </div>
    </div>
    <div><strong>Мероприятия рядом (10 км)</strong></div>
    <ul style="list-style:none;padding-left:0;">${listHtml || '<li>Нет событий поблизости</li>'}</ul>
  `;

  profilePanel.querySelectorAll('li[data-event]').forEach((item) => {
    item.onclick = () => {
      const id = Number(item.dataset.event);
      const event = eventsCache.get(id);
      if (event) {
        map.setView([event.latitude, event.longitude], 15);
        const marker = markerById.get(id);
        if (marker) marker.openPopup();
      }
    };
  });
}

function toggleProfilePanel() {
  const isVisible = profilePanel.style.display === 'block';
  if (isVisible) {
    profilePanel.style.display = 'none';
  } else {
    buildProfilePanel();
    profilePanel.style.display = 'block';
  }
}

async function init() {
  await loadProfile();
  map.setView(center, userLocationKnown ? 15 : 12);
  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 });
  let pendingTiles = 0;
  tileLayer.on('loading', () => {
    pendingTiles += 1;
    setMapLoading(true);
  });
  tileLayer.on('load', () => {
    pendingTiles = Math.max(0, pendingTiles - 1);
    if (pendingTiles === 0) setMapLoading(false);
  });
  tileLayer.addTo(map);
  map.whenReady(() => setMapLoading(false));
  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  map.addLayer(markers);
  await loadCategories();
  if (userLocationKnown) {
    await loadEvents(center[0], center[1]);
  } else {
    ensureLocationOrBlock();
  }

  map.on('moveend', () => {
    if (selectingPoint || !userLocationKnown) return;
    const c = map.getCenter();
    center = [c.lat, c.lng];
    loadEvents(center[0], center[1]);
  });

  document.getElementById('fab').onclick = startPointSelection;
  document.getElementById('geo-btn').onclick = centerOnUser;
  document.getElementById('profile-btn').onclick = toggleProfilePanel;
  document.getElementById('close-form').onclick = resetFormState;

  document.getElementById('event-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const coords = selectedCoords || center;
    const payload = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      event_date: new Date(document.getElementById('event_date').value).toISOString(),
      category_id: parseInt(document.getElementById('category').value, 10),
      latitude: coords[0],
      longitude: coords[1],
    };
    try {
      setLoading(true);
      if (formContainer.dataset.editing) {
        await updateEvent(Number(formContainer.dataset.editing), payload);
      } else {
        await createEvent(payload);
      }
      resetFormState();
    } catch (err) {
      alert('Не удалось сохранить событие');
    } finally {
      setLoading(false);
    }
  });
}

init();
