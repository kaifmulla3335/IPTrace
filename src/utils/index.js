import { HISTORY_KEY } from '../constants';

export function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveHistory(items) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
  } catch { /* ignore */ }
}

export function formatLocation(location) {
  if (!location) return '—';
  return [location.city, location.state, location.country]
    .filter(Boolean)
    .join(', ');
}