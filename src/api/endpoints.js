import { apiGet } from './client';

export const fetchNews = () => apiGet('/api/news/');
export const fetchPartners = () => apiGet('/api/partner/');
export const fetchClients = () => apiGet('/api/client/');
export const fetchColleagues = () => apiGet('/api/colleague/');
export const fetchScales = () => apiGet('/api/scale/');
export const fetchStrategies = () => apiGet('/api/strategy/');
export const fetchRegions = () => apiGet('/api/region/');
