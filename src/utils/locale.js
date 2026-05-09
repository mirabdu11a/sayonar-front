import { useLanguage } from '../context';

const LANG_FALLBACK = ['ru', 'uz', 'en'];

export function pickLocale(obj, lang, key) {
  if (!obj) return '';
  const order = [lang, ...LANG_FALLBACK.filter((l) => l !== lang)];
  for (const l of order) {
    const v = obj[`${key}_${l}`];
    if (v) return v;
  }
  return obj[key] || '';
}

export function useLocale() {
  const { language } = useLanguage();
  return (obj, key) => pickLocale(obj, language, key);
}
