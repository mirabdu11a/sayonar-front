const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API ${path} failed with ${res.status}`);
  return res.json();
}

export function mediaUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${BASE_URL}${path}`;
}
