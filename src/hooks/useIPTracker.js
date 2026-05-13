import { useState, useCallback } from 'react';
import { MAX_HISTORY, API_BASE } from '../constants';
import { loadHistory, saveHistory } from '../utils';

export function useIPTracker() {
  const [ipData, setIpData]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [history, setHistory] = useState(loadHistory);

  const addToHistory = useCallback((data) => {
    if (!data?.ip) return;
    setHistory((prev) => {
      const entry   = { ip: data.ip, city: data.location?.city || '—', country: data.location?.country || '—', ts: Date.now() };
      const updated = [entry, ...prev.filter((h) => h.ip !== data.ip)].slice(0, MAX_HISTORY);
      saveHistory(updated);
      return updated;
    });
  }, []);

  const fetchIPData = useCallback(async (ip = '') => {
    try {
      setLoading(true);
      setError(null);
      const url  = ip.trim() ? `${API_BASE}/?q=${encodeURIComponent(ip.trim())}` : `${API_BASE}/`;
      const res  = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setIpData(data);
      addToHistory(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to fetch IP data');
      return null;
    } finally {
      setLoading(false);
    }
  }, [addToHistory]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    saveHistory([]);
  }, []);

  return { ipData, loading, error, history, fetchIPData, clearHistory };
}