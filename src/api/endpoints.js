import { apiGet } from './client';

export const fetchNews = () => apiGet('/api/news/');
export const fetchNewsById = (id) => apiGet(`/api/news/${id}/`);
export const fetchPartners = () => apiGet('/api/partner/');
export const fetchClients = () => apiGet('/api/client/');
export const fetchColleagues = () => apiGet('/api/colleague/');
export const fetchScales = () => apiGet('/api/scale/');
export const fetchStrategies = () => apiGet('/api/strategy/');
export const fetchRegions = () => apiGet('/api/region/');
export const fetchServices = () => apiGet('/api/service/');
